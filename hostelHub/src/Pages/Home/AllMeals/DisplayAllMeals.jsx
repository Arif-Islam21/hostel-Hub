import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle";
import TabCard from "../Tab/TabCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../../Hooks/useAxiosCommon";

const DisplayAllMeals = () => {
  const [item = [], setItem] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [index, setIndex] = useState(2);
  const [serch, setSearch] = useState("");
  const axiosCommon = useAxiosCommon();

  // fetch initial data
  const { data: initialMeal = [] } = useQuery({
    queryKey: ["loadInitialMeal"],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/scrollMeal?offset=0&limit=12");
      return data;
    },
  });

  const loadMoreMeal = async () => {
    try {
      const res = await axiosCommon.get(`/scrollMeal?offset=${index}&limit=12`);

      setItem((previous) => [...previous, ...res.data]);

      if (res.data.length > 0) {
        setHasMore(true);
      } else {
        setHasMore(false);
      }

      setIndex((prev) => prev + 1);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = async () => {
    try {
      const res = await axiosCommon.get(`/searchMeals?query=${serch}`);
      setItem(res.data);
    } catch (error) {}
  };

  const handleSearchByCategory = async (e) => {
    const res = await axiosCommon.get(
      `/categorySearch?category=${e.target.value}`
    );
    setItem(res.data);
  };
  const handleSearchByPrice = async (e) => {
    const res = await axiosCommon.get(`/searchByPrice?price=${e.target.value}`);
    setItem(res.data);
  };

  useEffect(() => {
    setItem(initialMeal);
  }, [index]);

  return (
    <div>
      <SectionTitle
        subHeading={"All meals are Here"}
        heading={"Please Select a meal"}
      />
      <div className="lg:mx-24 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <input
            type="text"
            name="searchText"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Meal"
            className="input input-bordered input-md w-full max-w-xs"
          />
          <button onClick={handleSearch} className="btn">
            Search
          </button>
        </div>
        <div className="flex gap-4">
          <div>
            <select
              onChange={(e) => handleSearchByCategory(e)}
              className="select select-bordered w-full max-w-40"
              defaultValue={"category"}
            >
              <option value={"category"} disabled>
                Category
              </option>
              <option>Breakfast</option>
              <option>Lunch</option>
              <option>Dinner</option>
            </select>
          </div>
          <div>
            <select
              onChange={(e) => handleSearchByPrice(e)}
              defaultValue={"price"}
              className="select select-bordered w-full max-w-40"
            >
              <option value={"price"} disabled>
                Price
              </option>
              <option>Low to high</option>
              <option>Hign to low</option>
            </select>
          </div>
        </div>
      </div>

      <InfiniteScroll
        dataLength={item.length} //This is important field to render the next data
        next={loadMoreMeal}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        // below props only if you need pull down functionality
        // refreshFunction={this.refresh}
        // pullDownToRefresh
        // pullDownToRefreshThreshold={50}
        // pullDownToRefreshContent={
        //   <h3 style={{ textAlign: "center" }}>&#8595; Pull down to refresh</h3>
        // }
        // releaseToRefreshContent={
        //   <h3 style={{ textAlign: "center" }}>&#8593; Release to refresh</h3>
        // }
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-6 mx-2 gap-6 my-4">
          {item.map((item) => (
            <TabCard key={item._id} item={item} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default DisplayAllMeals;
