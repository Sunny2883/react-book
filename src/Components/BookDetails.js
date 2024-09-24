import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './BookDetails.css';

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      const response = await axios.get(`http://localhost:8080/api/books/${id}`);
      setBook(response.data);
    };
    fetchBook();
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div className="container">
    <h1>{book.title}</h1>
    <img src={book.imageUrl} alt={book.title} width="300" />
    <p><strong>Author:</strong> {book.author}</p>
    <p><strong>ISBN:</strong> {book.isbn}</p>
    <p><strong>Description:</strong> {book.description}</p>
    <p><strong>PublicationDate:</strong> {book.publicationDate}</p>
    <p><strong>Publisher:</strong> {book.publisher}</p>
    <p><strong>Price:</strong> {book.price} $</p>
    <p><strong>Pagecount:</strong> {book.pageCount}</p>
    <p><strong>Language:</strong> {book.language}</p>
  
    <p><strong>averageRating:</strong> {book.averageRating}</p>
    <p><strong>InStock:</strong> {book.inStock}</p>
    <Link to="/">Back to List</Link>
</div>
  );
};

export default BookDetail;
