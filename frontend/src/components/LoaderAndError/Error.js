import ErrorIcon from "@material-ui/icons/Error";
import React from "react";

const Error = ({error}) => {
  return (
    <>
      <div
        className="alert alert-danger d-flex align-items-center"
        role="alert"
      >
        <div>
          <ErrorIcon /> {error}
        </div>
      </div>
    </>
  );
};

export default Error;
