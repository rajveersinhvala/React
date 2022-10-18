import React from "react";
import Card from "./Card";
import "./index.css";
import Sdata from "./Sdata";

const App = () => {
  return (
    <>
      <h1 className="heading_style"> List Of Top 5 Technology Series </h1>
      {Sdata.map((val, index) => {
        return (
          <Card
            key={val.id}
            imgsrc={val.imgsrc}
            title={val.title}
            sname={val.sname}
            link={val.links}
          />
        );
      })}
    </>
  );
};

export default App;