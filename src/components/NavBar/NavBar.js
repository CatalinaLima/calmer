import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import {NavLink, Link} from "react-router-dom"

const NavBar = () => {
    return (
        <nav>
            <ul className="nav-menu">
                <h2 className="logo">
                    <li>
                        <NavLink to="/">
                            <img src={'calmer.png'} alt="Logo" />
                        </NavLink>
              </li>
            </h2>
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/books">
                books
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/menu">
                menu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/about">
                about us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/contact">
                contact
              </NavLink>
            </li>
            <li className="cart-widget">
              <CartWidget />
            </li>
          </ul>
        </nav>
      );
    }
    

export default NavBar










