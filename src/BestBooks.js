import React from 'react';
import axios from 'axios';
import { Carousel, Button } from 'react-bootstrap';
import Image from './Images/book.jpeg'
import BookModal from './BookFormModal';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  getBooks = async () => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books`;
      let urlData = await axios.get(url);
      this.setState({ books: urlData.data });
    } catch (error) {
      console.log(error.message);
    }
  };

  handleBookSubmit = (event) => {
    event.preventDefault();

    let bookObj = {
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.checked
    }
    console.log(bookObj);

    const postBook = async (bookObj) => {
      try {
        let url = `${process.env.REACT_APP_SERVER}/books`
        let postBook = await axios.post(url, bookObj);
        this.setState({ books: [...this.state.books, postBook.data] })
      } catch (error) {
        console.log(error.message);
      }
    };
    postBook(bookObj);
  };

  deleteBook = async (bookId) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books/${bookId}`;
      await axios.delete(url);
      let updatedBooks = this.state.books.filter(book => book._id !== bookId)
      this.setState({ books: updatedBooks });

    } catch (error) {
      console.log(error.message)
    }
  };

  componentDidMount() {
    this.getBooks();
  }

  render() {
    return (
      <>
        <h2 style={{ display: 'flex', justifyContent: 'center', marginTop: '1em' }}>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        {this.state.books.length > 0 ? (
          <Carousel>
            {this.state.books.map((book) => (
              <Carousel.Item key={book._id}>
                <img
                  className="d-block w-100"
                  src={Image}
                  alt={book.title}
                  style={{ maxHeight: '800px', objectFit: 'contain', marginTop: '2em', marginBottom: '2em' }}
                />
                <Carousel.Caption>
                  <h3>{book.title}</h3>
                  <p>{book.description}</p>
                  <Button></Button>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    );
  }
}

export default BestBooks;

