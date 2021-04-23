import React from 'react'
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/ApiCalls"
import BooksCards from "./BooksCards"

class SavedBooks extends React.Component {
    state = {
        books: [],
      };
      componentDidMount() {
        console.log("Saveds mounted")
        this.getDatabaseBooks();
        console.log(this.state.books)
      }
      getDatabaseBooks = () => {
        API.getAllSavedBooks().then(res => {
          console.log(res)
          this.setState({
            books: res.data
          })
        });
      };
      deleteBookFromDatabase = (bookId) => {
        API.deleteBooks(bookId).then(() => this.getDatabaseBooks());
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
        <Col size="md-10 md-offset-1">
            <article>
              <h1>Book Titles that have been saved:</h1> 
            </article>
          </Col>
        {this.state.books.length ? (
          this.state.books.map((book) => (
            
            <BooksCards
            key={book._id}
            title={book.title}
            authors={book.authors}
            description={book.description}
            image={book.image}
            link={book.link}
            Button={() => (
              <button className="btn btn-danger"
              onClick={() => {
                this.deleteBookFromDatabase(book._id);
              }}
              >
         Remove
              </button>
              
            )}
            />
            ))
        ) : (
          <p>You have no books saved</p>
        )}




       
        </Container>
      )
  }
}
export default SavedBooks;

