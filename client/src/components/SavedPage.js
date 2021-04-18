import React from 'react'
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";

class SavedBooks extends React.Component {
state = {
    books: [],
  };
  componentDidMount() {
    return;
  }
  getDatabaseBooks = () => {
    return;
  };
  deleteBookFromDatabase = (bookId) => {
    return;
  };
  render() {
      return (
    <Container fluid>
        <Row>
          <Col size="md-12">
        <Jumbotron>
        <h1>Saved Page</h1>
        <p>View or Remove your Saved Books</p>
        </Jumbotron>
        </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Book Title:</h1>
              <p>BODY</p>
            </article>
          </Col>
          <button className="btn">View</button>
            <button className="btn btn-danger">Remove</button> 
          
        </Row>
        </Container>
      )
  }
}
export default SavedBooks;

