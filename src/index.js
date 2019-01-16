import React from "react";
import ReactDOM from "react-dom";
import CustomDatePicker from "./CustomDatePicker.js";

import "./styles.css";

//function App() {
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      excludeDates: {
        "2019/01": ["2019-01-02", "2019-01-03"],
        "2019/02": ["2019-02-05", "2019-02-08"]
      }
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleClick(e) {
    this.setState({
      excludeDates: JSON.parse(this.refs.txt.value)
    });
    console.log(this.state.excludeDates);
  }
  handleChange = e => {
    this.setState({ excludeDates: e.target.value });
  };

  render() {
    console.log("App#render");
    return (
      <div className="App">
        <h1>React DatePicker</h1>
        <CustomDatePicker excludeDates={this.state.excludeDates} />
        <p>excludeDates@JSON</p>
        <p>Format>&#123;"YYYY/MM":["YYYY-MM-DD",...],...&#125;</p>
        <textarea
          defaultValue={JSON.stringify(this.state.excludeDates, null, 2)}
          onChange={this.handleChange}
          style={{ width: "400px", height: "200px" }}
          ref="txt"
        />
        <br />
        <button onClick={this.handleClick}>Apply</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
