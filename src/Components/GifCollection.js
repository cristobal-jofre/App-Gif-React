import React, { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";

export const GifCollection = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs( category )
    .then( setImages );
  }, [ category ]);

  return (
    <>
      <h3> {category} </h3>
      <div className="card-collection">
  
          {
            images.map( img => (
              <GifItem 
                key={ img.id }
                { ...img }
              />
            ))
          }   
      </div>
    </>
  )
};
