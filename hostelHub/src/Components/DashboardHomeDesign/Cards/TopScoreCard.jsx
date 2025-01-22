const TopScoreCard = () => {
  return (
    <div className="my-4 bg-gray-200 p-2 rounded-md">
      <div className="flex gap-4 items-center border-b-2 border-gray-500 pb-3">
        <img
          src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
          alt="this is a image"
          className="size-16 rounded-xl"
        />
        <div>
          <h2 className="text-secondColor font-semibold">Top Contributor</h2>
          {/* <h3 className="text-gray-600">
            <span className="text-xl font-semibold text-black">230</span>/240
          </h3> */}
        </div>
      </div>
      <div className="flex items-center justify-between mt-1">
        <h2 className="text-lg font-semibold text-gray-600">
          By <span className="text-black">Ariful Islam</span>
        </h2>
        {/* <h2 className="bg-secondColor px-2 rounded-lg text-center font-bold text-white">
          92% Accuracy
        </h2> */}
      </div>
    </div>
  );
};

export default TopScoreCard;
