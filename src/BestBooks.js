import React from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  getBooks = async () => {
    try {
      let url = `${process.env.REACT_APP_SERVER_URL}/books`;
      let urlData = await axios.get(url);
      this.setState({ books: urlData.data });
    } catch (error) {
      console.log(error.message);
    }
  };

  componentDidMount() {
    this.getBooks();
  }

  render() {
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        {this.state.books.length > 0 ? (
          <>
            {this.state.books.map((book) => (
              <p key={book._id}>
                {book.title} is a book about {book.description}
              </p>
            ))}
            <p>Book Carousel coming soon</p>
          </>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    );
  }
}

export default BestBooks;

