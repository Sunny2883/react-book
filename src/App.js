import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookList from './Components/BookList';
import BookDetail from './Components/BookDetails';
import AddBooks from './Components/AddBook';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path='/books/:id' element={<BookDetail />}></Route>
        <Route path='/add' element={<AddBooks/>} ></Route>
      </Routes>
    </Router>
  );
}

export default App;
