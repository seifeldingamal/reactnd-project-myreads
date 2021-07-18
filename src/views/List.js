import React from 'react';
import BookShelf from '../components/BookShelf';
import { Link } from 'react-router-dom';

const List = (props) => {
    const {books, shelfs, handleSelect} = props
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                {shelfs.map((shelf, i) => (
                    <BookShelf 
                        key={i} 
                        books={books.filter((book) => (
                            book.shelf === shelf.value
                        ))} 
                        shelf={shelf} 
                        handleSelect={handleSelect}
                    />
                ))}
            </div>
            <div className="open-search">
                <Link
                    to='/search'
                    className='open-search'
                >Add a book</Link>
            </div>
        </div>
    )
}

export default List;