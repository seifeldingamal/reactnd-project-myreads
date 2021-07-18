import React from 'react';

const Changer = (props) => {
    const { value, book, handleSelect} = props;
    return (
        <div className="book-shelf-changer">
            <select value={value} onChange={(e) => handleSelect(book.id, e.target.value)} >
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )
}

export default Changer;