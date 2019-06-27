import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import { asyncContainer, Typeahead } from "react-bootstrap-typeahead";
import SearchWrap from "../components/SearchWrap";
import SearchBar from "../components/SearchBar";
import PlantDetail from "../components/PlantDetail";

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
    finalPlants:[]
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

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   console.log(this.state.name)
  //   if (this.state.name) {
  //     API.getBook({
  //       finalPlant: this.state.plant,
  //     })
  //       .then(res => this.loadBooks())
  //       .catch(err => console.log(err));
  //   }
  // };

// onClick would add the plant object to an array

handleFormSubmit = event => {
  event.preventDefault();
      let finalPlants = [];
      let finalPlant = this.state.plant.Name;
      finalPlants.push({
        name:finalPlant,
        id:this.state.plant._id,
        key: 1
      });
      this.setState({finalPlants:finalPlants});
      console.log(finalPlants);
  }
  
  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.plant.Name) {
  //     API.getBook({
  //       name: this.state.plant.Name,
  //       id: this.state.plant._id,
  //       number: 1
  //     })
  //       .then(res => this.loadBooks())
  //       .catch(err => console.log(err));
  //   }
  //   console.log(this.state.plant.Name)
  // };

 

  render() {
    return (
      <Container fluid>
        {/* <Row>
          <Col size="md-6">
            <Jumbotron>
              {this.state.plant && (
                <div>
                  <h2>{this.state.plant.Name}</h2>
                  <p>Type:{this.state.plant.Type}</p>
                  <p>Spacing:{this.state.plant.Spacing}</p>
                  <p>PS:{this.state.plant.PS}</p>
                  <p>RS:{this.state.plant.RS}</p>
                  <p>Depth:{this.state.plant.Depth}</p>
                  <p>Spread:{this.state.plant.Spread}</p>
                  <p>Light:{this.state.plant.Light}</p>
                  <p>Maturity:{this.state.plant.Maturity}</p>
                </div>
              )}
              {this.state.plant && (
                <div>
                  Image: <img src={this.state.plant.Image} />
                </div>
              )}
            </Jumbotron>

            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Search Plants</h1>
              <AsyncTypeahead
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
            </Jumbotron>
            {this.state.plants.length ? (
              <List>
                {this.state.plants.map(plant => (
                  <ListItem key={plant._id}>
                    <Link to={"/books/" + plant._id}>
                      <strong>{plant.Name}</strong>
                    </Link>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
       */}
        <Row>
          <Col size="sm-4">
            <SearchBar>
              <AsyncTypeahead
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
            <FormBtn
                onClick={this.handleFormSubmit}
              >
                Start your garden
              </FormBtn>
          </Col>
          <Col size="sm-8">
          
          <PlantDetail plant={this.state.plant} style={{ marginTop: 0, marginBottom: 0 }}/>
        </Col>
        </Row>

<Row>
<Col size="col-sm-4">
    {this.state.plant ? (
          <List>
          {this.state.plants.map(plant => (
            <ListItem 
            key={plant._id}>
            {/* {this.state.plant.Name} */}
            {plant.Name}
               
              <DeleteBtn onClick={() => this.deleteBook(plant._id)} />
            </ListItem>
          ))}
        </List>
            ) : (
              <h6>Search your plant to get started</h6>
            )}
</Col>

</Row>

      </Container>
    );
  }
}

export default Plants;
