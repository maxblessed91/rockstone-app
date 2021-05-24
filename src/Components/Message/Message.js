import React from "react";
import MessageItem from "../MessageItem/MessageItem";
import "./Message.css";

const Message = (props) => {
  return (
    <ul>
      {props.textArray.map((text) => {
        return <MessageItem text={text} key={text.id} />;
      })}
    </ul>
  );
};

export default Message;
