import React, { useState, useEffect } from "react";

const App = () => {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="flex bg-white text-black w-full h-14 justify-between items-center">
        <h1 className="text-2xl text-black mx-5">Title</h1>
        <div className="flex space-x-4 mr-2">
          <h1>Home</h1>
          <h1>About</h1>
          <h1>Blog</h1>
          <h1>Contact</h1>
          <button className="btn border-blue text-blue p-3">Button</button>
        </div>
      </div>

      <div className="w-full bg-sky-800 h-60 text-center justify-between bg-gradient-to-r from-[#01DCFE] to-[#7043B2]">
        <h1 className="text-white text-4xl py-5">TITLE</h1>
        <span className="text-white px-5 py-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          quae atque optio amet sapiente totam mollitia nostrum nulla error
          ipsam. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Voluptas cum veritatis, reprehenderit aut quidem culpa saepe
          voluptatum nisi eveniet dolore. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Qui quae corporis cum mollitia iure consectetur,
          facere exercitationem totam dignissimos quibusdam.
        </span>
        <div className="mt-4">
          <button className="bg-white p-2 rounded-xl ">Read More</button>
        </div>
      </div>

      <div className="text-center mt-10">
        <h1 className="text-black text-6xl">CLASSES</h1>
        <span className="text-2xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, labore!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          perferendis consequuntur quis libero quibusdam atque amet illo nulla
          repellat labore. 
        </span>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-items-center my-10 text-black p-10" >
          {jsonData &&
            jsonData.map((item, index) => (
              <div
                key={index}
                className="bg-slate-400 rounded-2xl p-4 text-left bg-gray-50 border border-black p-6"
              >
                <img
                  src={item.ImageUrl}
                  alt={item.ID}
                  className="mx-auto mb-4 bg-gray-500"
                  height="250"
                  width="350"
                />
                <h3 className="text-xl font-semibold mb-2">{item.Name}</h3>
                <p className="mb-4">{item.ShortDesc}</p>
                <button className="btn border border-black p-3">View</button>
              </div>
            ))}
        </div>
      </div>

      <div className="text-white text-center bg-slate-600 p-4">
        <p className="text-2xl">&copy; 2024 ALL RIGHTS RESERVED</p>
      </div>
    </div>
  );
};

export default App;
