import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookList from './Components/BookList';
import BookDetail from './Components/BookDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path='/books/:id' element={<BookDetail />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
