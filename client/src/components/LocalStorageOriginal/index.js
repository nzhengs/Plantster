import React from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import _ from "lodash";
import { FormBtn } from "../Form";
import "./style.css";

const ReactGridLayout = WidthProvider(RGL);
const originalLayout = getFromLS("layout") || [];

const testDefaultLayout = [
  {
    w: 2,
    h: 3,
    x: 0,
    y: 0,
    i: "1",
    moved: false,
    static: false
  },
  {
    w: 2,
    h: 5,
    x: 2,
    y: 0,
    i: "2",
    moved: false,
    static: false
  },
  {
    w: 2,
    h: 3,
    x: 4,
    y: 0,
    i: "3",
    moved: false,
    static: false
  },
  {
    w: 2,
    h: 3,
    x: 6,
    y: 0,
    i: "4",
    moved: false,
    static: false
  },
  {
    w: 2,
    h: 1,
    x: 8,
    y: 0,
    i: "5",
    moved: false,
    static: false
  }
];

/**
 * This layout demonstrates how to sync to localstorage.
 */
class LocalStorageOriginal extends React.PureComponent {
  static defaultProps = {
    className: "layout",
    cols: 50,
    rowHeight: 20,
    verticalCompact: true,
    onLayoutChange: function() {}
  };

  constructor(props) {
    super(props);

    this.state = {
      layout: JSON.parse(JSON.stringify(originalLayout)),
      //   layout: testDefaultLayout,
      totalHeight: 22,
      mouse: false,
      rollBackLayout: [],
      newCounter: 15,
      gardenSytle: {
        height: "500px",
        width: "1400px"
      }
    };

    this.onLayoutChange = this.onLayoutChange.bind(this);
    this.resetLayout = this.resetLayout.bind(this);
    this.setHeight = this.setHeight.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.rollBackLayout = this.rollBackLayout.bind(this);
    this.onAddItem = this.onAddItem.bind(this);
  }

  resetLayout() {
    console.log("In Reset Layout Function");
    this.setState({
      layout: originalLayout
    });
  }

  rollBackLayout() {
    const { rollBackLayout } = this.state;
    console.log("Roll Back Layout: ", rollBackLayout);
    this.setState({ layout: rollBackLayout });
  }

  setHeight() {
    console.log("State - ", this.state);
    console.log(JSON.stringify(this.state.layout));
    this.setState({ totalHeight: 20 });
  }

  onLayoutChange(layout) {
    /*eslint no-console: 0*/
    saveToLS("layout", layout);
    this.setState({ layout });
    this.props.onLayoutChange(layout); // updates status display
  }

  handleMouseDown() {
    console.log("Mouse Down");
    this.setState({
      mouse: true,
      rollBackLayout: this.state.layout
    });
  }

  componentDidMount() {

    //Set layout to last saved layout
    this.setState({ layout : this.props.defaultLayout });
  }

  componentDidUpdate(prevProps, prevState) {
    //   console.log("PrevState: ", prevState.layout);
    //   console.log("This State Layout: ", this.state.layout);
    //   console.log("Total Height", this.state.totalHeight);

    const { layout, totalHeight } = this.state;
    let resetFlag = false;

    layout.forEach(e => {
      // console.log("ID: ",e.i)
      // console.log("Height: ", e.h);
      // console.log("Y-Axis", e.y);
      // console.log("Total Height:", e.y+e.h);
      if (e.h + e.y > totalHeight) {
        resetFlag = true;
        console.log("Reset Flag", resetFlag);
      }
    });

    if (arraysEqual(this.state.layout, prevState.layout)) {
      console.log("Arrays Are Equal, Nothing Happens");
    } else {
      console.log("----Not Equal");
      if (resetFlag) {
        console.log("Height Exceeded");
        // this.resetLayout();
        // this.rollBackLayoutChange(prevState);
        this.rollBackLayout();
        console.log("Original Layout: ", originalLayout);
        console.log("Previous State: ", prevState.layout);
      }
    }
  }

  onAddItem() {
    /*eslint no-console: 0*/
    // console.log("adding", "n" + this.state.newCounter);
    // console.log("State - ", this.state)
    // console.log(JSON.stringify(this.state))

    let newLayout = Array.from(this.state.layout);

    let clone = {};

    clone.i = "n" + this.state.newCounter.toString();
    clone.x = 0;
    clone.y = 0;
    clone.h = this.props.seedSpacing;
    clone.w = this.props.seedSpacing;
    clone.moved = false;
    clone.static = false;
    clone.add = false;

    console.log("Clone: ", clone);
    // console.log("Layout: ", layout)
    newLayout.push(clone);
    console.log("New Layout: ", newLayout);
    console.log(JSON.stringify(newLayout));
    // layout[0].h=5;
    // console.log(layout)
    // this.rollBackLayout();
    this.setState({ layout: newLayout, newCounter: this.state.newCounter + 1 });

    // this.setState({
    //   // Add a new item. It must have a unique key!
    // layout: this.state.layout.concat({
    //     i: "7",
    //     x: 3,
    //     y: Infinity, // puts it at the bottom
    //     w: 2,
    //     h: 2
    //   })
    //   // Increment the counter to ensure key is always unique.
    // //   newCounter: this.state.newCounter + 1
    // });
    // this.forceUpdate();
    // this.rollBackLayout();
  }

  createElement(el) {
    console.log("In Create Element &&&&&&&&&&");
    const removeStyle = {
      position: "absolute",
      right: "2px",
      top: 0,
      cursor: "pointer"
    };
    const i = el.add ? "+" : el.i;
    return (
      <div key={i} data-grid={el}>
        {el.add ? (
          <span
            className="add text"
            onClick={this.onAddItem}
            title="You can add an item by clicking here, too."
          >
            Add +
          </span>
        ) : (
          // <span className="text">{i}</span>
          <span className="text"></span>
        )}
        <span
          className="remove"
          style={removeStyle}
          onClick={this.onRemoveItem.bind(this, i)}
        >
          {/* x */}
        </span>
      </div>
    );
  }

  onRemoveItem(i) {
    console.log("removing", i);
    this.setState({ layout: _.reject(this.state.layout, { i: i }) });
  }

  render() {
    return (
      <React.Fragment>
        <div id="headerTestForce">
          {/* <FormBtn onClick={this.onAddItem}>Adds plant to grid</FormBtn> */}
          <button onClick={() => {this.props.handleGardenSave(this.state.layout)}} type="button" className="btn btn-success float-right">Save Layout</button>
          {/* <h1>Title</h1> */}
        </div>
        <div 
        style={{width: this.state.gardenSytle.width, height: this.state.gardenSytle.height}}
        id="mainTestForce" 
        onMouseDown={this.handleMouseDown}
        >
          {/* <button onClick={this.resetLayout}>Reset Layout</button> */}
          {/* <button onClick={this.setHeight}>Set Height</button> */}

          <ReactGridLayout
            {...this.props}
            layout={this.state.layout}
            onLayoutChange={this.onLayoutChange}
            margin= {[1,1]}
          >
            {_.map(this.state.layout, el => this.createElement(el))}
            {/* <div key="1" data-grid={{ w: 1, h: 1, x: 0, y: 0 }}>
              <span className="text">1</span>
            </div>
            <div key="2" data-grid={{ w: 2, h: 3, x: 2, y: 0 }}>
              <span className="text">2</span>
            </div>
            <div key="3" data-grid={{ w: 2, h: 3, x: 4, y: 0 }}>
              <span className="text">3</span>
            </div>
            <div key="4" data-grid={{ w: 2, h: 3, x: 6, y: 0 }}>
              <span className="text">4</span>
            </div>
            <div key="5" data-grid={{ w: 2, h: 3, x: 8, y: 0 }}>
              <span className="text">5</span>
            </div> */}
          </ReactGridLayout>
        </div>
      </React.Fragment>
    );
  }
}

function getFromLS(key) {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem("rgl-7")) || {};
    } catch (e) {
      /*Ignore*/
    }
  }
  return ls[key];
}

function saveToLS(key, value) {
  if (global.localStorage) {
    global.localStorage.setItem(
      "rgl-7",
      JSON.stringify({
        [key]: value
      })
    );
  }
}

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (var i = arr1.length; i--; ) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}

export default LocalStorageOriginal;
