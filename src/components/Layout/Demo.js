import React from "react";
import Header from "../../components/Layout/Header";

const Demo = (props) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};

export default Demo;
