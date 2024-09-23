import CategoryItem from '../assets/img/menu.svg'
import {Link} from "react-router-dom"

function Header(props) {
    return (
       
            <div class="header_menu">
                <div class="container">
                    <div class="header_menu__block">
                        <Link to="/" class="menu-button">
                            <img src={CategoryItem } alt="меню"/>
                        </Link>
                        <div class="header_menu__greeting">
                            {props.title}
                        </div>
                        <div></div> 
                    </div>
                </div>
            </div>

    )
}

export default Header;