// basic usage
// in some react component
import React from "react";
import TimePicker from "react-times";
import TimePickerWrapper from "react-times";

// use material theme
import "react-times/css/material/default.css";
// or you can use classic theme
import "react-times/css/classic/default.css";

export default class SomeComponent extends React.Component {


  // onTimeChange(options) {
  //   const { hour, minute, meridiem } = options;
  //   const time = hour + ":" + minute;
  //   this.setState({ time, meridiem  });
  // }

  // onFocusChange(focusStatue) {
  //   console.log("Focus shifted");
  // }

  render() {
    return (
      <TimePicker
        timeMode="12"
        time={this.props.time}
        meridiem={this.props.meridiem}
        showTimezone="true"
        // onFocusChange={this.onFocusChange.bind(this)}
        onTimeChange={this.props.onTimeChange.bind(this)}
      />
    );
  }
}
