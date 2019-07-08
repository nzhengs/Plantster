import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/plants");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/plants/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/plants/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/plants", bookData);
  },

  getUser: function() {
    return axios.get("/api/users");
  },

  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },

  getUser: function(username) {
    return axios.get("/api/users/" + username);
  },

};
