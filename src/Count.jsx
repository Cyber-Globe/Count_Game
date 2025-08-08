import React from "react";
function Count(props) {
  console.log("count rendered");
  return (
    <>
      <h2 className="count">{props.number}</h2>
    </>
  );
}
export default Count;
