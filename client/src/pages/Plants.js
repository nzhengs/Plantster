import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { FormBtn } from "../components/Form";
import { asyncContainer, Typeahead } from "react-bootstrap-typeahead";
import SearchBar from "../components/SearchBar";
import PlantDetail from "../components/PlantDetail";
import LocalStorageOriginal from "../components/LocalStorageOriginal/index";
import Nav2 from "../components/Nav2";
import NumberBadge from "../components/NumberBadge";

const AsyncTypeahead = asyncContainer(Typeahead);

class Plants extends Component {
  state = {
    plant: null,
    plants: [],
    Type: "",
    Name: "",
    Comments: "",
    isLoading: false,
    options: [],
    finalPlant: {},
    finalPlants: [],
    gardenHeight: 750,
    gardenWeight: 12,
    seedSpacing: 5,
    bgColor: "",
    defaultLayout: [],
    name: "",
    length: "",
    breadth: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ plants: res.data, Type: "", Name: "", Comments: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  removePlant = id => {
    const newPlantArray = this.state.finalPlants.filter(
      plant => id !== plant.id
    );
    this.setState({ finalPlants: newPlantArray });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  getRandomColor() {
    let colorValues = [
      "#F2506E",
      "#07418C",
      "#03738C",
      "#91E0F2",
      "#F2CA52",
      "#077336",
      "#145932",
      "#F27405",
      "#D9411E",
      "#A6A486",
      "#F2D5C4",
      "#8C2E6B",
      "#468C8C",
      "#F2DF80",
      "#BFB4AA",
      "#F27777"
    ];
    return colorValues[Math.floor(Math.random() * colorValues.length)];
  }

  updateName = event => {
    this.setState({ name: event.target.value });
  };

  updateLength = event => {
    this.setState({ length: event.target.value });
  };

  updateBreadth = event => {
    this.setState({ breadth: event.target.value });
  };

 

  handleFormSubmit = event => {
    event.preventDefault();
    let finalPlants = [...this.state.finalPlants];
    let finalPlant = this.state.plant.Name;
    finalPlants.push({
      name: finalPlant,
      id: this.state.plant._id,
      key: 1,
      background: this.getRandomColor()
    });
    this.setState({ finalPlants: finalPlants });
    console.log(finalPlants);
    this.typeahead.getInstance().clear();
    // Todo: Remove plant clear completely?
    this.setState({
      plant: null
    });
    return finalPlants[finalPlants.length - 1].background;
  };

  handleGardenSave = newLayout => {
    const garden = {
      name: this.state.name,
      length: this.state.length,
      breadth: this.state.breadth,
      layout: newLayout
    };
    this.setState({ layout: newLayout });
    console.log({ newLayout });
    console.log({ garden });
  };

  triggerChildAddItem = bgColor => {
    this.refs.addItem.onAddItem(bgColor);
  };

  addPlantToList = event => {
    let bgColor = this.handleFormSubmit(event);
    this.triggerChildAddItem(bgColor);
  };

  render() {
    return (
      <Container fluid>
        <Nav2 />
        <Row>
          <Col size="sm-4">
            <div className="form-group">
              <label for="garden-name">
                Name your garden and specify dimensions
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
                value={this.state.name}
                onChange={this.updateName}
              />
            </div>
            <div className="row">
              <div className="dimension-1 col">
                <input
                  type="text"
                  name="length"
                  className="form-control"
                  placeholder="feet"
                  value={this.state.length}
                  onChange={this.updateLength}
                />
              </div>

              <div className="dimension-2 col">
                <h6> by </h6>
              </div>

              <div className="dimension-3 col">
                <input
                  type="text"
                  name="breadth"
                  className="form-control w-200"
                  placeholder="feet"
                  value={this.state.breadth}
                  onChange={this.updateBreadth}
                />
              </div>
            </div>
            <SearchBar>
              <AsyncTypeahead
                ref={typeahead => (this.typeahead = typeahead)}
                isLoading={this.state.isLoading}
                labelKey="Name"
                onChange={([selectedPlant]) => {
                  this.setState({ plant: selectedPlant });
                  console.log(selectedPlant);
                }}
                onSearch={query => {
                  this.setState({ isLoading: true });
                  fetch(`api/plants?name=${query}`)
                    .then(resp => resp.json())
                    .then(plants => {
                      this.setState({
                        isLoading: false,
                        options: plants
                      });
                    });
                }}
                options={this.state.options}
              />
            </SearchBar>

            <FormBtn onClick={this.addPlantToList} disabled={!this.state.plant}>
              Add plant
            </FormBtn>
          </Col>
          <Col size="sm-8">
            {this.state.plant && (
              <PlantDetail
                plant={this.state.plant}
                style={{ marginTop: 0, marginBottom: 0 }}
              />
            )}
            {!this.state.plant && (
              <div>
                <ul>
                  {this.state.finalPlants.map(plant => (
                    <Col size="sm-6 col-md-6 col-lg-4">
                      <div className="listed-plant">
                        <li
                          className="list-group-item"
                          style={{ backgroundColor: plant.background }}
                        >
                          {plant.name}
                          <NumberBadge
                            id={plant.id}
                            key={plant.key}
                            name={plant.name}
                            // style={{backgroundColor: plant.background}}
                          />
                          <DeleteBtn
                            onClick={() => this.removePlant(plant.id)}
                          />
                        </li>
                      </div>
                    </Col>
                  ))}
                </ul>
              </div>
            )}
          </Col>
        </Row>

        <Row>
          <Col size="sm-12">
            <LocalStorageOriginal
              // cols={10}
              // rowHeight={30}
              gardenWidth={this.state.gardenWeight}
              ref="addItem"
              seedSpacing={this.state.seedSpacing}
              defaultLayout={this.state.defaultLayout}
              handleGardenSave={this.handleGardenSave}
              finalPlants={this.state.finalPlants}
              plant={this.state.plant}
              bgColor={this.state.bgColor}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Plants;
