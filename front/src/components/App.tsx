import React from "react";
import Search from "./Search";

function App() {
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-12">
          <Search />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-12">
        <div className="col-start-2 col-span-10"></div>
      </div>
    </>
  );
}

export default App;
