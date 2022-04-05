import React, { useState } from "react";
import AddCategory from "./AddCategory";
import { GifGrid } from "./GifGrid";

export default function GitExpertApp() {
  const [categories, setCategories] = useState(["demon slayer"]);

  // const handleAdd = () => {

  // setCategories( [...categories, "Demon Slayer"])
  // setCategories recibe un callback que tiene el estado anterior y se delega el cambio
  // setCategories( cats => [...cats, "Demon Slayer"])

  // };

  return (
    <div className="git-expert-container">
      <h1>GitExpertApp</h1>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category.charAt(0).toUpperCase()+category.slice(1)} />
        ))}
      </ol>
    </div>
  );
}
