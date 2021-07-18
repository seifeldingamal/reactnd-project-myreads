import React from 'react';
import Changer from './Changer';

const Book = (props) => {
    const { book, handleSelect} = props;
    return(
    <li key={book.id}>
        <div className="book">
            <div className="book-top">
                <div 
                    className="book-cover" 
                        style={
                            {   
                                width: 128, 
                                height: 193, 
                                backgroundImage: `url(${book.imageLinks.thumbnail})` 
                            }
                        }>
                </div>
                <Changer value={book.shelf} book={book} handleSelect={handleSelect} />
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">
                {
                    book.authors.map((author, i) => (
                        <div key={i}>
                            {author}<br/>
                        </div>
                    ))
                }
            </div>
        </div>
    </li>
    )
}


export default Book;