import React from "react";

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = { display: true };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    ///console.log("button clicked")
    this.setState((prestate) => {
      return { display: !prestate.display };
    });
  }
  render() {
    return (
      <div>
        {this.state.display && (
          <p>this is a paragraph which will be hide on clicking the button.</p>
        )}
        <button onClick={this.toggle}>
          {this.state.display ? "hide" : "show"}
        </button>
      </div>
    );
  }
}
export default Display;
