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
import ReactModal from "react-modal";

const AsyncTypeahead = asyncContainer(Typeahead);

class Plants extends Component {
  state = {
    plant: null,
    plants: [],
    Type: "",
    Name: "",
    Comments: "",
    isLoading: false,
    options: []
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

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
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
          </Col>
          <Col size="sm-8">
            <PlantDetail plant={this.state.plant} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Plants;
