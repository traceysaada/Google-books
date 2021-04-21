import React from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import UserSearch from "./UserSearch";
import API from "../utils/ApiCalls";

import BooksCards from "./BooksCards";

class SearchPage extends React.Component {
  state = {
    books: [],
    q: "",
  };
  getBooksFromGoogleAPI = () => {
    console.log("searching", this.state.q);
    API.getGoogleBooksSearch(this.state.q).then((results) =>
      this.setState({
        books: results.data,
      })
    );
  };
  handleUserInput = (e) => {
    this.setState({
      q: e.target.value,
    });
  };
  saveBookFromDatabase = (bookId) => {
    console.log("saved clicked", bookId);
    const book = this.state.books.find((book) => book.id === bookId);
    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
      authors: book.volumeInfo.authors,
      link: book.volumeInfo.infoLink,
    }).then(() => this.getBooksFromGoogleAPI());
  };
  handleSearch = (event) => {
    event.preventDefault();

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
                <p>Search for Books you like & Save your Favourite books</p>
              </Jumbotron>
            </Col>
            <UserSearch
              q={this.state.q}
              handleSearch={this.handleSearch}
              handleUserInput={this.handleUserInput}
            />
          </Row>
        
          {this.state.books.length ? (
            this.state.books.map((book) => (
              <BooksCards
                key={book.id}
                title={book.volumeInfo.title}
                authors={book.volumeInfo.authors.join(", ")}
                description={book.volumeInfo.description}
                image={book.volumeInfo.imageLinks.thumbnail}
                link={book.volumeInfo.infoLink}
                Button={() => (
                  <button className="btn"
                    onClick={() => {
                      this.saveBookFromDatabase(book.id);
                    }}
                  >
                   Save as favourite
                  </button>
                )}
              />
            ))
          ) : (
            <p>
              When you search for a book you can click the button to view or
              save to list
            </p>
          )}
        </Container>
      </>
    );
  }
}
export default SearchPage;
