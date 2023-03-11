/* eslint-disable */
import { Link } from 'react-router-dom';
import MenuCss from './Menu.module.css'
const Menu =()=> {
    return (
        <div className={MenuCss.navContainer}>
            <ul className={MenuCss.navElements}>
                <li>
                    <Link to="/" className={MenuCss.BookstoreCMS}> Bookstore CMS </Link>
                </li>
                <li>
                    <Link to="/" className={MenuCss.Books}>Books</Link>
                </li>
                <li>
                    <Link to="/Categories" className={MenuCss.Categories} >Categories</Link>
                </li>
            </ul>

            <div className={MenuCss.Logo}>Logo</div>
        </div>
    )
}

export default Menu;