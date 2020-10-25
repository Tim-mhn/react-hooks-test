import React, { useState, useEffect } from "react";

export const Hello = () => {

  const [hello, handleChange] = useState("world")


  useEffect( () => {
    console.log("use effect to replace ComponentDidMount");

    return () => console.log("component unmounted")
  }, []);
  
  return (
    <div>
        <p> {hello}</p>
    </div>
  );
}



