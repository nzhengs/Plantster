import React, { Component } from "react";
import Nav1 from "../components/Nav1";
import { Col, Row, CenterRow, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";
import TesselComponent from "../components/TesselComponent/index";
import formData from "../data/formData";
import Modal from "react-modal";
import { Button } from "react-bootstrap";

class Tessel extends Component {
  state = {
    timers: [
      {
        duration: "3",
        frequency: "Daily",
        meridiem: "PM",
        time: "6:45",
        zone: "Zone 1"
      }
    ],
    zoneOptions: formData.zoneOptions,
    frequencyOptions: formData.frequencyOptions,
    durationOptions: formData.durationOptions,
    zone: "",
    duration: "",
    frequency: "",
    time: "6:45",
    meridiem: "PM",
    isOpen: false
  };
  onClick() {
    this.setState({ isOpen: !this.state.isOpen });
  }
  handleTimeChange = options => {
    const { hour, minute, meridiem } = options;
    const time = hour + ":" + minute;
    this.setState({ time, meridiem });
  };

  onFocusChange(focusStatue) {
    console.log("Focus shifted");
  }

  handleDelete = index => {
    console.log(index);
    const timers = this.state.timers.filter((timer, i) => index !== i);
    this.setState({ timers });
  };

  handleChange = event => {
    const { name, value } = event.target;
    console.log("Event Values: ", event.target);

    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    // set timer values
    const timer = {
      time: this.state.time,
      meridiem: this.state.meridiem,
      duration: this.state.duration,
      frequency: this.state.frequency,
      zone: this.state.zone
    };

    // Todo: Try catch block that confirms timer was set successfully on the tessel 2

    // Post timer data to Tessel 2 and set timer
    fetch("/api/redLight", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        data: timer
      })
    });

    // add to timers array
    let timers = [...this.state.timers];
    timers.push(timer);
    console.log(timers);
    this.setState({ timers });
  };

  render() {
    const {
      zoneOptions,
      frequencyOptions,
      durationOptions,
      zone,
      frequency,
      duration,
      time,
      meridiem,
      timers
    } = this.state;

    const data = formData;

    return (
      <React.Fragment>
        <Nav1 />
        <FormBtn
          onClick={this.onClick.bind(this)}
          style={{ float: "right", margin: "10px" }}
        >
          Learn about installation
        </FormBtn>
        <Container>
          <Modal
            isOpen={this.state.isOpen}
            aria={{
              labelledby: "heading",
              describedby: "full_description"
            }}
          >
            <iframe
              src="https://learn.sparkfun.com/tutorials/getting-started-with-the-tessel-2/all"
              height="100%"
              width="100%"
            />
            <Button
              className="float-right"
              variant="success"
              onClick={this.onClick.bind(this)}
              isOpen={this.state.isOpen}
            >
              Close
            </Button>
          </Modal>
          <div className="row justify-content-center">
            <h5 className="m-4">Add Timer</h5>
          </div>
          <CenterRow>
            <form style={{ width: "100%" }}>
              <div className="form-row align-items-center">
                <div className="col-sm-4">
                  <label className="my-1" for="inlineFormInput">
                    Time
                  </label>
                  <TesselComponent
                    time={time}
                    meridiem={meridiem}
                    onTimeChange={this.handleTimeChange}
                  />
                </div>
                <div className="col-sm-3">
                  <label className="my-1" for="inlineFormInputGroup">
                    Duration (minutes)
                  </label>
                  <div className="input-group mt-1">
                    <div className="input-group-prepend" />
                    <select
                      className="custom-select mr-sm-2"
                      id="inlineFormCustomSelect"
                      onChange={this.handleChange}
                      value={duration}
                      name="duration"
                    >
                      {durationOptions.map(item => (
                        <option key={item.value} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-sm-2">
                  <label className="my-1" for="inlineFormInputGroup2">
                    Frequency
                  </label>
                  <div className="input-group mt-1">
                    <div className="input-group-prepend" />
                    <select
                      className="custom-select mr-sm-2"
                      id="inlineFormCustomSelect"
                      onChange={this.handleChange}
                      value={frequency}
                      name="frequency"
                    >
                      {frequencyOptions.map(item => (
                        <option key={item.value} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-sm-2">
                  <label className="my-1" for="inlineFormCustomSelect2">
                    Zone
                  </label>
                  <div className="input-group mt-1">
                    <div className="input-group-prepend" />
                    <select
                      className="custom-select mr-sm-2"
                      id="inlineFormCustomSelect2"
                      onChange={this.handleChange}
                      value={zone}
                      name="zone"
                    >
                      {zoneOptions.map(item => (
                        <option key={item.value} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-sm-1">
                  <label className="my-1 invisible">Empty</label>
                  <button
                    type="submit"
                    onClick={this.handleFormSubmit}
                    className="btn btn-success mt-1"
                    style={{ backgroundColor: "#A0D413" }}
                  >
                    Add Timer
                  </button>
                </div>
              </div>
            </form>
          </CenterRow>
          <CenterRow>
            <h4 className="mt-5 mb-3">Timers</h4>
          </CenterRow>
          <Row>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Time</th>
                  <th scope="col">Duration</th>
                  <th scope="col">Frequency</th>
                  <th scope="col">Zone</th>
                  <th scopre="col" />
                </tr>
              </thead>
              <tbody>
                {timers.map((timer, index) => (
                  <tr key={index}>
                    <td>
                      {timer.time} {timer.meridiem}
                    </td>
                    <td>{timer.duration} minutes</td>
                    <td>{timer.frequency}</td>
                    <td>{timer.zone}</td>
                    <button
                      type="submit"
                      deleteKey={index}
                      onClick={() => this.handleDelete(index)}
                      value={timer.index}
                      className="btn btn-link m-1"
                    >
                      Delete
                    </button>
                  </tr>
                ))}
              </tbody>
            </table>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Tessel;
