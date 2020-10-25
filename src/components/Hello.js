import React, { useState, useEffect, useRef } from "react";

export const Hello = () => {

  const [hello, handleChange] = useState("Hello World");
  const renderCounter = useRef(0);

  // Called only once on component mouting
  useEffect( () => {
    console.log("use effect to replace ComponentDidMount");
    // const onMouseMove = (e) => console.log(e);
    renderCounter.current++;
    console.log(renderCounter.current);
    // // Add event listener on component "mounting"
    // window.addEventListener("mousemove", onMouseMove)

    // // Remvoe event listener once component is destroyed ("unmounted")
    // return () => { 
    //   console.log("component unmounted");
    //   window.removeEventListener("mousemove", onMouseMove);
    // }
  }, []);
  
  return (
    <div>
        <p> {hello}</p>
    </div>
  );
}



