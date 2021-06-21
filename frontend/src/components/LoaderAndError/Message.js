import React from "react";

const Message = ({messagetype, children}) => {
  return (
    <>
    {
      messagetype==="danger"? (
        <div
        className="alert alert-danger d-flex align-items-center"
        role="alert"
      >
        {children}
      </div>
      ):(
        <div
        className="alert alert-success d-flex align-items-center"
        role="alert"
      >
        {children}
      </div>
      )
    }
    </>
  );
};

export default Message;
