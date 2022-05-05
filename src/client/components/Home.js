import React from "react";

const Home = () => {
  return (
    <div>
      <div>Home Component Update</div>
      <button
        onClick={() => {
          console.log("Click Me");
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default Home;
