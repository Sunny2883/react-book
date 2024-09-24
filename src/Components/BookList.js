import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './BookList.css';
const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await axios.get('http://localhost:8080/api/books');
      setBooks(response.data);
    };
    fetchBooks();
  }, []);

  return (
    <div>
        <h1>Book List</h1>
        <ul>
            {books.map((book) => (
                <li key={book.id}>
                    <Link to={`/books/${book.id}`}>{book.title}</Link>
                    <li>{book.description}</li>
                    <li>&#8377; {book.price}</li>
                </li>
            ))}
        </ul>
        <Link to="/add" className="add-book">Add Book</Link>
    </div>
);
};

export default BookList;
