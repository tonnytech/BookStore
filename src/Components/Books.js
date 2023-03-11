/* eslint-disable */
import { useSelector, useDispatch } from 'react-redux';
import BooksCss from './Books.module.css';
import BookFrom from './BookFrom';
import { removeBook } from '../redux/books/booksSlice';

const Books =()=> {
    const dispatch = useDispatch();
    const { books } = useSelector((state) => state.books);

    const bookData = books;
    return (
        <>
        {bookData.map((bookInfo)=> (
            <div className={BooksCss.bookContainer}>
            <div className={BooksCss.bookDetails}>
                <div className={BooksCss.bookGenre}> {bookInfo.category}</div>
                <div className={BooksCss.bookTitle}> {bookInfo.title}</div>
                <div className={BooksCss.bookAuthor}> {bookInfo.author}</div>
                <div>
                    <ul className={BooksCss.bookActionList}>
                        <li className={BooksCss.bookAction}> <button>Comment</button></li>
                        <li className={BooksCss.bookAction} onClick={()=>dispatch(removeBook(bookInfo.item_id))}><button>Remove</button></li>
                        <li className={BooksCss.bookAction}><button>Edit</button></li> 
                    </ul>
                </div>
            </div>

            <div className={BooksCss.bookStatus}>
                <div className={BooksCss.statusCircleContainer}>
                    <div className={BooksCss.statusCircle}> </div>
                </div>
                <div className='statusPercentage'>
                    <div className={BooksCss.Percentage}>{bookInfo.percentage}</div>
                    <div className={BooksCss.Completed}>Completed</div>
                </div>
            </div>

            <div className="bookProgress">
                <div className={BooksCss.currentChapter}>current chapter</div>
                <div className={BooksCss.progressChapter}>chapter 17</div>
                <button className={BooksCss.progressUpdate} >update progress</button>
            </div>
        </div>
        ))}
        <BookFrom />             
        </>
    )
}

export default Books;