import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${index}&limit=12`
      );
      setUserData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [index]);

  return (
    <div className="bg-black min-h-screen p-5">
      {/* Images */}
      <div className="flex flex-wrap justify-center gap-4">
        {userData.length > 0 ? (
          userData.map((elem) => (
            <div key={elem.id} className="w-48">
              <a
                href={elem.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="h-50 w-48 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={elem.download_url}
                    alt={elem.author}
                    className="h-full w-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>

                <h2 className="text-white text-center mt-2 font-medium break-words ">
                  {elem.author}
                </h2>
              </a>
            </div>
          ))
        ) : (
          <h1 className="text-white text-2xl">No User Available</h1>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={() => {
            if (index > 1) {
              setIndex((prev) => prev - 1);
            }
          }}
          disabled={index === 1}
          className={`px-5 py-2 rounded-lg font-semibold transition ${
            index === 1
              ? "bg-gray-500 text-white cursor-not-allowed"
              : "bg-yellow-400 text-black hover:bg-yellow-500 cursor-pointer"
          }`}
        >
          Prev
        </button>

        <span className="text-white text-lg font-bold">
          Page {index}
        </span>

        <button
          onClick={() => setIndex((prev) => prev + 1)}
          className="px-5 py-2 rounded-lg bg-yellow-400 text-black hover:bg-yellow-500 font-semibold cursor-pointer transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;