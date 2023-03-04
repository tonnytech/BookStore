/* eslint-disable */
import BooksCss from './Books.module.css'

const Books =()=> {
    return (
        <div className={BooksCss.bookContainer}>
            <div className={BooksCss.bookDetails}>
                <div className={BooksCss.bookGenre}>Genre</div>
                <div className={BooksCss.bookTitle}>Title</div>
                <div className={BooksCss.bookAuthor}>Author</div>
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
                    <div className={BooksCss.statusCircle}>
                        circle
                    </div>
                </div>
                <div className='statusPercentage'>
                    <div className={BooksCss.Percentage}>100%</div>
                    <div className={BooksCss.Completed}>Completed</div>
                </div>
            </div>

            <div className="bookProgress">
                <div>current chapter</div>
                <div>my current title</div>
                <button>update progress</button>
            </div>
        </div>
    )
}

export default Books;