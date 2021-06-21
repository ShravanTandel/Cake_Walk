import ErrorIcon from "@material-ui/icons/Error";
import React from "react";

const Message = ({message,messagetype}) => {
  return (
    <>
    {
      messagetype==="danger"? (
        <div
        className="alert alert-danger d-flex align-items-center"
        role="alert"
      >
        <div>
          <ErrorIcon /> {message}
        </div>
      </div>
      ):(
        <div
        className="alert alert-sucess d-flex align-items-center"
        role="alert"
      >
        <div>
          {message}
        </div>
      </div>
      )
    }
    </>
  );
};

export default Message;
