import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';
import BooksCss from './Books.module.css';

const BookFrom = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const clearInputs = () => {
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  const onsubmitHandler = (e) => {
    e.preventDefault();
    if (title.trim() !== '' && author.trim() !== '' && category.trim() !== '') {
      const payload = {
        item_id: uuidv4(),
        title,
        author,
        category,
      };
      dispatch(addBook(payload));
      clearInputs();
    } else {
      clearInputs();
    }
  };

  const books = 'Add Books';
  return (
    <div>
      <div>Add New Book</div>
      <form className={BooksCss.formContainer}>
        <input
          type="text"
          name="title"
          value={title}
          placeholder="Book Title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          name="author"
          value={author}
          placeholder="Book Author"
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <input
          type="dropdown"
          name="category"
          value={category}
          placeholder="Book Category"
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <button type="submit" onClick={onsubmitHandler}>
          {books}
        </button>
      </form>
    </div>
  );
};

export default BookFrom;
