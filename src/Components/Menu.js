/* eslint-disable */
import { Link } from 'react-router-dom';
import MenuCss from './Menu.module.css'
const Menu =()=> {
    return (
        <div className={MenuCss.navContainer}>
            <ul className={MenuCss.navElements}>
                <li className={MenuCss.BookstoreCMS}>
                    <Link to="/" > Bookstore CMS </Link>
                </li>
                <li className={MenuCss.Books}>
                    <Link to="/" >Books</Link>
                </li>
                <li className={MenuCss.Categories}>
                    <Link to="/Categories" >Categories</Link>
                </li>
            </ul>

            <div className={MenuCss.Logo}>Logo</div>
        </div>
    )
}

export default Menu;