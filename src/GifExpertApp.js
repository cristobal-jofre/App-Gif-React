import React, { useState } from "react";
import { AddCategory } from "./Components/AddCategory";
import { GifCollection } from "./Components/GifCollection";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Shingeki No Kyojin"]);

  // const addCategory = () => {
  //   setCategories([...categories, "Hunter X"]);
  // };

  return (
    <>  
      <h2> GIF APP</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifCollection key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
