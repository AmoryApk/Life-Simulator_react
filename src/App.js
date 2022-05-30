import React, { Component } from "react";
import { ProgressBarContainer } from "./ProgressBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProgressBarContainer percenRange={25} />
      </div>
    );
  }
}

export default App;
