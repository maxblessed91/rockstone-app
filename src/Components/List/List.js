import React from "react";
import ListItem from "../ListItem/ListItem";

const List = (props) => {

  return (
    <ul>
      {props.textArray.map((text) => {
        return <ListItem text={text} />;
      })}
    </ul>
  );
};

export default List;
