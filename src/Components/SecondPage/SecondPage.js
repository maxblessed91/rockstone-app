import React, { Component } from "react";

import "./SecondPage.css";

export default class SecondPage extends Component {
  state = {
    currentDateTime: null,
    isLoaded: false,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        currentDateTime: new Date().toLocaleTimeString(),
        isLoaded: true,
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="page-time">
        <div className="text-block">
          {this.state.isLoaded ? (
            <p>{this.state.currentDateTime}</p>
          ) : (
            <p className="ghost-text">&nbsp</p>
          )}
        </div>
      </div>
    );
  }
}
