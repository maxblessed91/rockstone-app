import React from "react";
import PropTypes from "prop-types";
import "./App.css";
// import FirstPage from "../FirstPage/FirstPage";
// import SecondPage from "../SecondPage/SecondPage";
import AddText from "../AddText/AddText";
import List from "../List/List";

function App() {
  const [textArray, setTA] = React.useState([
    { id: 1, title: "First text" },
    { id: 2, title: "Second text" },
  ]);

  function addText(title) {
    setTA(
      textArray.concat([
        {
          title,
          id: Date.now(),
        },
      ])
    );
  }

  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <List textArray={textArray} />
      <AddText onCreate={addText} />
      {/* <SecondPage /> */}
    </div>
  );
}

App.propTypes = {
  textArray: PropTypes.array,
};

export default App;
