/* eslint-disable */
import BooksCss from './Books.module.css';

const bookData = [
    {
        Genre: 'Action',
        Title: 'The Hunger Games',
        Author: 'Suzanne Collins',
        percentage: '64%',
    },
    {
        Genre: 'Science',
        Title: 'Dune',
        Author: 'Frank Herbert',
        percentage: '8%',
    },
    {
        Genre: 'Economy',
        Title: 'Capital in Twenty ',
        Author: 'Suzanne Collins',
        percentage: '0%',
    }
]

const Books =()=> {
    return (
        <>
        {bookData.map((bookInfo)=> (
            <div className={BooksCss.bookContainer}>
            <div className={BooksCss.bookDetails}>
                <div className={BooksCss.bookGenre}> {bookInfo.Genre}</div>
                <div className={BooksCss.bookTitle}> {bookInfo.Title}</div>
                <div className={BooksCss.bookAuthor}> {bookInfo.Author}</div>
                <div>
                    <ul className={BooksCss.bookActionList}>
                        <li className={BooksCss.bookAction}>Comment</li>
                        <li className={BooksCss.bookAction}>Remove</li>
                        <li className={BooksCss.bookAction}>Edit</li>
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
                <button className={BooksCss.progressUpdate}>update progress</button>
            </div>
        </div>
        ))}

        <div>
            <div>Add New Book</div>
            <form className={BooksCss.formContainer}>
                <input></input>
                <input></input>
                <button>Add Book</button>
            </form>
        </div>
        </>
    )
}

export default Books;