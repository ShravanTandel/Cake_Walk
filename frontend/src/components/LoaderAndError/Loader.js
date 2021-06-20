import React from "react";

const Loader = () => {
  return (
    <>
      <div className="text-center">
        <div className="spinner-border" role="status" style={{ width: "100px", height: "100px" , margin: "auto", display: "block"}}>
        </div>
      </div>
    </>
  );
};

export default Loader;
