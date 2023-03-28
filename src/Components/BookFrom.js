import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addBook, postBook } from '../redux/books/booksSlice';
import BookFormCss from './BookForm.module.css';

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
      dispatch(postBook(payload));

      clearInputs();
    } else {
      clearInputs();
    }
  };

  const books = 'Add Books';
  return (
    <div className={BookFormCss.FormContainer}>
      <hr className={BookFormCss.Divider} />
      <div className={BookFormCss.Title}>Add New Book</div>
      <form className={BookFormCss.formContainer}>
        <input
          type="text"
          name="title"
          value={title}
          placeholder="Book Title"
          onChange={(e) => setTitle(e.target.value)}
          className={BookFormCss.BookInput}
          required
        />
        <input
          type="text"
          name="author"
          value={author}
          placeholder="Book Author"
          onChange={(e) => setAuthor(e.target.value)}
          className={BookFormCss.CategoryInput}
          required
        />
        <input
          type="dropdown"
          name="category"
          value={category}
          placeholder="Book Category"
          onChange={(e) => setCategory(e.target.value)}
          className={BookFormCss.CategoryInput}
          required
        />
        <button type="submit" onClick={onsubmitHandler} className={BookFormCss.FormSubmit}>
          {books}
        </button>
      </form>
    </div>
  );
};

export default BookFrom;
