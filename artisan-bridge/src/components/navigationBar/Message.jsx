import React from "react";
import { Alert } from "reactstrap";

const Message = (props) => {
  const color = props.alertMessage.alert;
  const message = props.alertMessage.message;
  return (
    <div className="col" style={{ textAlign: "center" }}>
      <Alert color={color}>{message}</Alert>
    </div>
  );
};

export default Message;
