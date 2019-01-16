import React from "react";
import DatePicker from "react-datepicker";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";

moment.locale("ja");

class CustomDatePicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: moment()
    };
    // init excludeDates
    this.excludeDates = null;

    this.handleChange = this.handleChange.bind(this);
    this.handleMonthChange = this.handleMonthChange.bind(this);
  }

  parseExcludeDates(props) {
    let defaultValue = [];
    try {
      // parse excludeDates@JSON
      // {"YYYY/MM":["YYYY-MM-DD",...]}
      for (let key in props.excludeDates) {
        for (let val of props.excludeDates[key]) {
          defaultValue.push(moment(val));
        }
      }
    } catch (ex) {
      console.log(ex);
    }
    return defaultValue;
  }

  handleChange(date) {
    //console.log(date);
    this.setState({
      startDate: date
    });
  }

  handleMonthChange(date) {
    const ym = date.format("YYYY/MM");
    if (ym in this.props.excludeDates) {
      const arr = this.props.excludeDates[ym];
      this.setState({
        excludeDates: arr
      });
    }
  }

  render() {
    this.excludeDates = this.parseExcludeDates(this.props);
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
        onMonthChange={this.handleMonthChange}
        dateFormatCalendar="YYYY/MM"
        excludeDates={this.excludeDates}
      />
    );
  }
}

export default CustomDatePicker;
