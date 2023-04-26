import React from 'react';
import axios from 'axios';
import { Carousel, Button, Spinner } from 'react-bootstrap';
import Image from './Images/book.jpeg'
import BookModal from './BookFormModal';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showModal: false,
      loading: false
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
    console.log('Form submitted', bookObj);

    const postBook = async (bookObj) => {
      try {
        let url = `${process.env.REACT_APP_SERVER}/books`
        let postBook = await axios.post(url, bookObj);
        this.setState({ books: [...this.state.books, postBook.data] })
        this.closeModal();

        console.log('Book saved', postBook.data)

      } catch (error) {
        console.log(error.message);
      }
    };
    postBook(bookObj);
  };

  deleteBook = async (bookID) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books/${bookID}`;
      await axios.delete(url);
      let updatedBooks = this.state.books.filter(book => book._id !== bookID)
      this.setState({ books: updatedBooks, loading: true });

      setTimeout(() => {
        this.setState({ loading: false });
      }, 700)

    } catch (error) {
      console.log(error.message)
    }
  };

  componentDidMount() {
    this.getBooks();
  }

  openModal = () => {
    this.setState({ showModal: true })
  };

  closeModal = () => {
    this.setState({ showModal: false })
  };

  render() {
    return (
      <>
        <h2 className='shelf-header'>My Essential Bookshelf Collection</h2>
        {this.state.books.length > 0 ? (
          <Carousel>
            {this.state.books.map((book) => (
              <Carousel.Item key={book._id}>
                <img
                  className="d-block w-100"
                  src={Image}
                  alt={book.title}
                />
                <Carousel.Caption>
                  <h3 className='book-title'>{book.title}</h3>
                  <h5 style={{ color: 'black' }}> {book.status && (
                    <>
                      <span role="img" aria-label="heart"> ❤️ </span>
                      <strong><em>Highly Recommended</em></strong>
                    </>
                  )}</h5>
                  <p className='book-description'>{book.description}</p>
                  <div className='button-div'>
                    <Button className='add-button' onClick={this.openModal}>Add a Book!</Button>
                    <Button className='fa fa-refresh fa-spin' style={{ backgroundColor: 'transparent', borderColor: 'black', color: 'black', fontWeight: 'bold' }} onClick={() => this.deleteBook(book._id)} disabled={this.state.loading}>
                      {this.state.loading && <i className='fa fa-refresh fa-spin'></i>}
                      {this.state.loading && <span><Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                        Loading...</span>}
                      {!this.state.loading && <span>Remove Book!</span>}
                    </Button>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <h3>No Books Found :(</h3>
        )}

        <BookModal
          show={this.state.showModal}
          onHide={this.closeModal}
          onSubmit={this.handleBookSubmit}
          onBookAdd={this.closeModal}
        />
      </>
    );
  }
}

export default BestBooks;

