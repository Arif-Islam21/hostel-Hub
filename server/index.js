const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET);

const app = express();
const port = process.env.POST || 5000;

// middleware
app.use(express.json());
app.use(cors());

// yIS365KTFNqwtOz8  hostelHub

const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.knlt5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // Send a ping to confirm a successful connection

    const usersCollection = client.db("hostelHub").collection("users");
    const mealsCollection = client.db("hostelHub").collection("meals");
    const reviewsCollection = client.db("hostelHub").collection("reviews");
    const upcomingMealsCollection = client
      .db("hostelHub")
      .collection("upcomingMeals");
    const transectionsCollection = client
      .db("hostelHub")
      .collection("transections");
    const mealRequestCollection = client
      .db("hostelHub")
      .collection("mealRequest");

    // PAYMENT RELATED API
    app.post("/create-payment-intent", async (req, res) => {
      const { amount } = req.body;
      // return console.log(items);

      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount * 100,
        currency: "usd",
        automatic_payment_methods: {
          enabled: true,
        },
      });

      res.send({
        clientSecret: paymentIntent.client_secret,
      });
    });
    app.get("/transections/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email };
      const result = await transectionsCollection.find(query).toArray();
      res.send(result);
    });

    app.post("/transections", async (req, res) => {
      const data = req.body;
      const email = data?.email;
      const query = { email };
      const badge =
        data?.amount === 7.99
          ? "Gold"
          : data?.amount === 4.99
          ? "Silver"
          : data?.amount === 9.99
          ? "Platinum"
          : "bronge";
      const updatedDoc = {
        $set: {
          badge: badge,
        },
      };
      const setBadge = await usersCollection.updateOne(query, updatedDoc);
      const result = await transectionsCollection.insertOne(data);
      res.send(result);
    });

    // REVIEWS COLLECTION

    app.get("/reviews", async (req, res) => {
      const result = await reviewsCollection.find().toArray();
      const foodIds = result.map((food) => new ObjectId(food.fodId));
      const aggrigate = await reviewsCollection
        .aggregate([
          {
            $addFields: {
              foodObjectId: { $toObjectId: "$fodId" },
            },
          },
          {
            $lookup: {
              from: "meals",
              localField: "foodObjectId",
              foreignField: "_id",
              as: "mealsDetails",
            },
          },
          {
            $unwind: "$mealsDetails",
          },
          {
            $match: {
              "mealsDetails._id": { $in: foodIds },
            },
          },
          {
            $project: {
              _id: 1,
              "mealsDetails.title": 1,
              "mealsDetails._id": 1,
              "mealsDetails.likes": 1,
              "mealsDetails.review": 1,
            },
          },
        ])
        .toArray();
      res.send(aggrigate);
    });
    app.get("/reviews/:email", async (req, res) => {
      const email = req.params.email;
      try {
        const query = { email };
        const reviews = await reviewsCollection.find(query).toArray();
        const foodIds = reviews.map((review) => new ObjectId(review.fodId));
        // return console.log(foodIds);

        const aggrigation = await reviewsCollection
          .aggregate([
            {
              $addFields: {
                foodIdAsObjectId: { $toObjectId: "$fodId" },
              },
            },
            {
              $lookup: {
                from: "meals",
                localField: "foodIdAsObjectId",
                foreignField: "_id",
                as: "mealsDetails",
              },
            },
            {
              $unwind: "$mealsDetails",
            },
            {
              $match: {
                "mealsDetails._id": { $in: foodIds },
              },
            },
            {
              $project: {
                reviewText: 1,
                "mealsDetails._id": 1,
                "mealsDetails.title": 1,
                "mealsDetails.likes": 1,
              },
            },
          ])
          .toArray();
        res.send(aggrigation);
      } catch (error) {
        console.log(error);
      }
    });

    app.post("/reviews", async (req, res) => {
      const data = req.body;
      const result = await reviewsCollection.insertOne(data);
      res.send(result);
    });
    app.delete("/reviews/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await reviewsCollection.deleteOne(query);
      res.send(result);
    });

    // UPCOMING MEALS RELATED APIS

    app.get("/upcomingMeals", async (req, res) => {
      const result = await upcomingMealsCollection.find().toArray();
      res.send(result);
    });

    app.post("/upcomingMeals", async (req, res) => {
      const data = req.body;
      const result = await upcomingMealsCollection.insertOne(data);
      res.send(result);
    });

    // MEAL REQUEST SEND TO DB

    app.get("/mealRequests", async (req, res) => {
      const result = await mealRequestCollection.find().toArray();
      res.send(result);
    });

    app.patch("/mealRequests/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const updatedDoc = {
        $set: {
          status: "Delivered",
        },
      };
      const result = await mealRequestCollection.updateOne(query, updatedDoc);
      res.send(result);
    });

    app.post("/mealRequest", async (req, res) => {
      const data = req.body;
      // TODO: MAKE SURE THE USER HAVE A SUBSCRIPTION
      const result = await mealRequestCollection.insertOne(data);
      res.send(result);
    });
    app.get("/mealRequests/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email };
      const result = await mealRequestCollection.find(query).toArray();
      res.send(result);
    });
    app.delete("/mealRequests/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await mealRequestCollection.deleteOne(query);
      res.send(result);
    });

    // MEAL RELATED APIS

    app.get("/scrollMeal", async (req, res) => {
      const { offset, limit } = req.query;
      const offsetInt = parseFloat(offset);
      const limitInt = parseFloat(limit);
      const result = await mealsCollection
        .find()
        .skip(offsetInt)
        .limit(limitInt)
        .toArray();
      res.send(result);
    });

    // ALL SEARCH METHODS ARE HERE

    const findMealsByUser = async (text, fields, collection) => {
      const filter = text
        ? {
            $or: fields.map((field) => ({
              [field]: { $regex: text, $options: "i" },
            })),
          }
        : {};

      try {
        const requests = await collection.find(filter).toArray();
        return requests;
      } catch (error) {
        res
          .status(500)
          .send({ message: "error in data fetching", error: error });
      }
    };

    app.get("/findMealsByUser", async (req, res) => {
      const { text } = req.query;
      const fields = ["email", "displayName"];
      try {
        const requests = await findMealsByUser(
          text,
          fields,
          mealRequestCollection
        );
        res.send(requests);
      } catch (error) {
        res
          .status(500)
          .send({ message: "error in data fetching", error: error });
      }
    });

    app.get("/findUserByName", async (req, res) => {
      const { text } = req.query;
      const fields = ["displayName", "email"];
      try {
        const users = await findMealsByUser(text, fields, usersCollection);
        res.send(users);
      } catch (error) {
        res
          .status(500)
          .send({ message: "error in data fetching", error: error });
      }
    });

    app.get("/searchMeals", async (req, res) => {
      const { query } = req.query;
      if (query) {
        const filter = { title: { $regex: query, $options: "i" } };
        try {
          const meals = await mealsCollection.find(filter).toArray();
          res.send(meals);
        } catch (error) {
          res
            .status(500)
            .send({ message: "error fetching meal", error: error });
        }
      } else {
        const meals = await mealsCollection.find().toArray();
        res.send(meals);
      }
    });
    app.get("/categorySearch", async (req, res) => {
      const { category } = req.query;
      const filter = { category: { $regex: category, $options: "i" } };
      try {
        const meals = await mealsCollection.find(filter).toArray();
        res.send(meals);
      } catch (error) {
        res
          .status(500)
          .send({ message: "error in data fetching", error: error });
      }
    });
    // creating a function for sorting
    const searchFunc = async (text, field, collection, res) => {
      try {
        let sortCriteria = {};
        if (text === "Hign to low") {
          sortCriteria[field] = -1;
        } else if (text === "Low to high") {
          sortCriteria[field] = 1;
        } else {
          return res.status(400).send({ message: "Invalid sort order" });
        }

        const result = await collection.find().sort(sortCriteria).toArray();
        res.send(result);
      } catch (error) {
        res
          .status(500)
          .send({ message: "error in data fetching", error: error });
      }
    };

    app.get("/sortByLikes", async (req, res) => {
      const { likes } = req.query;
      await searchFunc(likes, "likes", upcomingMealsCollection, res);
    });

    app.get("/searchByPrice", async (req, res) => {
      const { price } = req.query;
      await searchFunc(price, "priceInt", mealsCollection, res);
    });
    app.get("/searchByLikes", async (req, res) => {
      const query = req.query;
      await searchFunc(query.likes, "likes", mealsCollection, res);
    });
    app.get("/searchByReviews", async (req, res) => {
      const query = req.query;
      await searchFunc(query.review, "review", mealsCollection, res);
    });
    // UPCOMING MEALS RELATED APIS
    app.post("/upload-upcoming-meal/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const upcomingMeal = await upcomingMealsCollection.findOne(query, {
        projection: { _id: 0 },
      });
      if (!upcomingMeal) {
        res.status(404).send({ message: "No upcoming meal by this id" });
      }
      const setMeal = await mealsCollection.insertOne(upcomingMeal);
      const deleteItem = await upcomingMealsCollection.deleteOne(query);
      res.send(setMeal);
    });

    // MEALS RELATED APIS
    app.get("/meals", async (req, res) => {
      const result = await mealsCollection.find().toArray();
      res.send(result);
    });

    app.get("/addedMeals/:email", async (req, res) => {
      const email = req.params.email;
      const query = { adminEmail: email };
      const addCount = await mealsCollection.countDocuments(query);
      res.send({ addCount });
    });

    app.get("/meals/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await mealsCollection.findOne(query);
      res.send(result);
    });

    app.post("/meals", async (req, res) => {
      const data = req.body;
      const result = await mealsCollection.insertOne(data);
      res.send(result);
    });

    app.delete("/meals/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await mealsCollection.deleteOne(query);
      res.send(result);
    });

    // INCREAST LIKE COUNT WHEN A USER REACTS

    const likeFunc = async (id, email, collection) => {
      try {
        const query = { _id: new ObjectId(id) };
        const options = { upsert: true };
        const item = await collection.findOne(query);
        if (!item) {
          res.status(404).send({ message: "Item not found" });
        }
        if (!item.likedUser) {
          const updatedDoc = {
            $addToSet: { likedUser: email },
          };
          const result = await collection.updateOne(query, updatedDoc, {
            upsert: true,
          });
          return result;
        }
        const userHasLiked = item.likedUser.includes(email);
        let updatedQuery;
        if (userHasLiked) {
          updatedQuery = { $pull: { likedUser: email } };
        } else {
          updatedQuery = { $addToSet: { likedUser: email } };
        }

        const result = await collection.updateOne(query, updatedQuery);
        return result;
      } catch (error) {
        console.log(error);
        return error;
      }
    };
    app.put("/upcomingLike/:id", async (req, res) => {
      const id = req.params.id;
      try {
        const { email } = req.body;
        const result = await likeFunc(id, email, upcomingMealsCollection);
        res.send(result);
      } catch (error) {
        res.status(500).send({ message: "internal server error" });
      }
    });

    app.put("/reacts/:id", async (req, res) => {
      const id = req.params.id;
      const { email } = req.body;
      const result = await likeFunc(id, email, mealsCollection);
      res.send(result);
    });

    // USER RELATED APIS
    app.get("/users", async (req, res) => {
      const result = await usersCollection.find().toArray();
      res.send(result);
    });

    app.get("/user/:email", async (req, res) => {
      const email = req.params.email;
      const result = await usersCollection.findOne({ email });
      res.send(result);
    });

    app.get("/users/admin/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email: email };
      const result = await usersCollection.findOne(query);
      if (result.role === "admin") {
        res.send({ role: result.role });
      } else {
        res.send({ role: "guast" });
      }
    });

    app.patch("/makeAdmin/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email: email };
      const options = { upsert: true };
      const updatedDoc = {
        $set: {
          role: "admin",
        },
      };

      const result = await usersCollection.updateOne(
        query,
        updatedDoc,
        options
      );
      res.send(result);
    });

    app.post("/users", async (req, res) => {
      const data = req.body;
      // console.log(data);
      const existingUser = await usersCollection.findOne({ email: data.email });
      if (existingUser) {
        res.send("User with this email already exists.");
      } else {
        const result = await usersCollection.insertOne(data);
        res.send(result);
      }
    });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Food is making");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
