import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Table, Button } from "antd";

function remove() {
  console.log("remove");
}
const columns = [
  {
    title: "Selected plants",
    dataIndex: "name"
  },
  {
    title: "",
    dataIndex: "name2"
  }
];
let data = [
  {
    key: "1",
    name: "Tomato"
  },
  {
    key: "2",
    name: "Bean"
  },
  {
    key: "3",
    name: "Basil"
  }
];

export default class MyTable extends React.Component {
  constructor(props) {
    super(props);
    this.count = data.length;
    this.state = {
      data: data
    };
  }
  add = () => {
    var row = {
      key: "99",
      name: "I am New"
    };
    var newStateArray = [...this.state.data];
    newStateArray.push(row);
    this.setState(() => {
      return {
        data: newStateArray
      };
    });
  };

  remove = () => {
    var newStateArray = [...this.state.data];
    if (newStateArray.length > 1) {
      newStateArray.pop();
      this.count = --this.count;
    }
    this.setState(() => {
      return {
        data: newStateArray
      };
    });
  };
  render() {
    return (
      <div>
        <Table
          pagination={false}
          columns={columns}
          dataSource={this.state.data}
        />
        <Button type="primary" onClick={this.add}>
          add
        </Button>
        <Button type="danger" onClick={this.remove}>
          remove
        </Button>
      </div>
    );
  }
}
ReactDOM.render(<MyTable />, document.getElementById("container"));

{/* <div id="container" style="padding: 24px"></div>
<script>
  var mountNode = document.getElementById('container');
</script> */}