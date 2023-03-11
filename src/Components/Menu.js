/* eslint-disable */
import { Link } from 'react-router-dom';
import MenuCss from './Menu.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
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

            <div className={MenuCss.Logo}>
                <FontAwesomeIcon icon={faUser} className={MenuCss.userIcon}/>
            </div>
        </div>
    )
}

export default Menu;