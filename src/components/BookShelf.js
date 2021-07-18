import React from 'react';
import Book from './Book';

const BookShelf = (props) => {
    const {books, shelf, handleSelect} = props;
    return (
        <div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelf.name}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book, i) => (
                            <Book key={i} book={book} handleSelect={handleSelect} />
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default BookShelf;