import React, { Component } from 'react';
import * as BookAPI from '../BooksAPI';
import Book from '../components/Book';
import { Link } from 'react-router-dom';

class Search extends Component {

    state = {
        query:'',
        foundBooks:[],
    }

    updateQuery = (query) => {

        const queryTrimmed = query.trim()

        this.setState(() => ({
            query: queryTrimmed
        }))

        const { books } = this.props;
        
        if(queryTrimmed && queryTrimmed.length ) {
            BookAPI.search(queryTrimmed)
                .then((result) => {
                    if(Array.isArray(result) && result.length > 0) {
                        const final = result.map(bookFound => {
                            const alreadyExists = books.find((book) => book.id === bookFound.id)
                            const shelf = alreadyExists ? bookFound.shelf = alreadyExists.shelf : bookFound.shelf = 'none'
                            return {
                                id: bookFound.id,
                                shelf: shelf,
                                authors: bookFound.authors !== undefined ? bookFound.authors : ['Author name not found'],
                                title: bookFound.title !== undefined ? bookFound.title : 'Book Title not found',
                                imageLinks: {
                                        thumbnail: bookFound.imageLinks !== undefined  ? bookFound.imageLinks.thumbnail : 'http://via.placeholder.com/128x193?text=No%20Cover%20Found'
                                }
                            };
                        })
                        this.setState({
                            foundBooks: final
                        })
                    } else {
                        this.setState(() => ({
                            foundBooks: []
                        }))
                    }
                })
        } else {
            this.setState(() => ({
                foundBooks: []
            }))
        }
    }
    
    render() {

        const { query, foundBooks } = this.state;
        const { handleSelect } = this.props;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        to='/'
                        className='close-search'
                    >Close</Link>
                    <div className="search-books-input-wrapper">
                        <input 
                            type="text" 
                            placeholder="Search by title or author"
                            value={query} 
                            onChange={(e)=>this.updateQuery(e.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                <ol className="books-grid">
                    {foundBooks.map((book, i) => (
                        <Book key={i} book={book} handleSelect={handleSelect} />
                    ))}
                </ol>
                </div>
            </div>
        )
    }
}

export default Search;