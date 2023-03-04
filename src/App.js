/* eslint-disable */
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Books from './Components/Books';
import Categories from './Components/Categories';
import Menu from './Components/Menu';

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
