import React from "react";
import "../MessageItem/MessageItem.css";

const MessageItem = ({ text }) => {
  return <li>{text.title}</li>;
};

export default MessageItem;
