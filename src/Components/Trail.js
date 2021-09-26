import React from "react";
import Data from "./sampleoutput.json";

export default function Trail() {
  return (
    <>
      {Data.map((data, index) => {
        return (
          <>
            <h1>{data.name}</h1>
            <p>{data.date}</p>
          </>
        );
      })}
    </>
  );
}
if (props.mode === "light") {
  document.body.style.backgroundColor = "#D57E7E";
}
