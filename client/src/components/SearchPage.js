import React from 'react'
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import UserSearch from "./UserSearch";
import API from "../utils/ApiCalls"

class SearchPage extends React.Component {
  state = {
    books: [],
    q: "",
  };
  getBooksFromGoogleAPI = () => {
      console.log("searching", this.state.q)
    API.getGoogleBooksSearch(this.state.q).then(results => console.log(results))
  };
  handleUserInput = e => {
    this.setState({
        q: e.target.value
    })
  };
  saveBookFromDatabase = (bookObject) => {
    return;
  };
  handleSearch = (event) => {
      event.preventDefault();
      console.log("Button blicked")
      this.getBooksFromGoogleAPI();
  };
  render() {
    return (
      <>
         <Container fluid>
        <Row>
          <Col size="md-12">
        <Jumbotron>
      
        <h1>Search For Books</h1>
        <p>Search Books you like & Save your Favourite books</p>
        </Jumbotron>
        </Col>
        <UserSearch
          q={this.state.q}
          handleSearch={this.handleSearch}
          handleUserInput={this.handleUserInput}
          />
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Book Title:</h1>
              <p>BODY</p>
            </article>
          </Col>
          <button className="btn">View</button>
            <button className="btn">Save Favourite</button> 
          
        </Row>
        </Container>
      </>
    );
  }
}
export default SearchPage;
