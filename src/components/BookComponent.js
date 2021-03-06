import React from 'react';
import { useDispatch } from 'react-redux';
import { setUpdateBook } from '../actions/books';

export const BookComponent = ({ book }) => {
  const dispatch = useDispatch();
  const updateBook = (book, value) => {
    console.log(value, book);
    dispatch(setUpdateBook(value, book));
  };
  const placeholder = 'http://via.placeholder.com/128x193?text=' + book.title;
  return (
    <li key={book.id}>
      <div className='book'>
        <div className='book-top'>
          <div
            className='book-cover'
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : placeholder})`,
            }}
          ></div>
          <div className='book-shelf-changer'>
            <select
              value={book.shelf}
              onChange={(e) => {
                updateBook(book, e.target.value);
              }}
            >
              <option value='none' disabled>
                Move to...
              </option>
              <option value='currentlyReading'>Currently Reading</option>
              <option value='wantToRead'>Want to Read</option>
              <option value='read'>Read</option>
              <option value='none'>None</option>
            </select>
          </div>
        </div>
        <div className='book-title'>{book.title}</div>
        <div className='book-authors'>{book.authors}</div>
      </div>
    </li>
  );
};
