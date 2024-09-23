import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./AddBook.css"
const AddBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setISBN] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8080/api/books', { title, author, isbn });
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add Book</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author"
        required
      />
      <textarea
        value={isbn}
        onChange={(e) => setISBN(e.target.value)}
        placeholder="ISBN"
        required
      />

      <button type="submit">Add</button>
    </form>
  );
};

export default AddBooks;
