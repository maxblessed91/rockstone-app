import React, { useState } from "react";
import PropTypes from "prop-types";
// import Message from "./../Message/Message";
// import AddText from './FirstPage';

function AddText({ onCreate }) {
  const [value, setValue] = useState("");

  function onSubmit(event) {
    event.preventDefault();

    if (value.trim()) {
      onCreate(value);
      setValue("");
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Type some text"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

AddText.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default AddText;
