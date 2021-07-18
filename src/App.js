import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Search from './views/Search';
import List from './views/List';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    books: [],
    shelfs: [
      {
        value: 'currentlyReading', 
        name: 'Currently Reading'
      }, 
      {
        value: 'wantToRead', 
        name: 'Want To Read'
      },
      {
        value: 'read', 
        name: 'Read'
      } 
    ]
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  handleSelect = (bookID, shelf) => {
    const { books } = this.state;
    books.map((book) => {
      if(book.id === bookID)
        book.shelf = shelf
      return book;
    })
    
    this.setState({
        books
    })
    const book = { id: bookID }
    BooksAPI.update(book, shelf);
  }

  render() {
    const {books, shelfs} = this.state;
    return (
      <div className="app">
          <Route exact path='/' render={() => (
            <List books={books} shelfs={shelfs} handleSelect={this.handleSelect} />
          )}  />
          <Route path='/search' render={() => (
            <Search books={books} handleSelect={this.handleSelect} />
          )} /> 
      </div>
    )
  }
}

export default BooksApp
