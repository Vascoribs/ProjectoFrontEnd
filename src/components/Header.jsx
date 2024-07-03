import { useContext, useState } from "react"
import { NavLink } from "react-router-dom"
import { CartContext } from "../contexts/CartContext";


export default function Header(){
    
    const {cart} = useContext(CartContext);
    const [country, setCountry] = useState("Portugal")
    
    const [isHambMenuOpen, setIsHambMenuOpen] = useState(false);

    function openHambMenu() {
        setIsHambMenuOpen (prevState => !prevState)
    }

    return(
        <div className="wrapper">
            <nav> 
                <h1>
                    <NavLink className="h1" to="/">
                        <img src="/img/logo_onwest/120x85/OnwestPrancheta1.png" alt="OnWest Track Club" />
                    </NavLink>
                </h1>
                <div className="topLeft">
                    <ul>
                        <li><NavLink className="navbarLink" to="/aboutus">About Us</NavLink></li>
                        <li><NavLink className="navbarLink" to="/shop">Shop</NavLink></li>
                        <li><NavLink className="navbarLink" to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
                <div className="hamburgerMenu">
                    <button type="button" name="hamburguerBtn" aria-label="Menu" onClick={()=>openHambMenu()}>
                        <i className="fa-solid fa-bars"></i>
                    </button>
                    {isHambMenuOpen &&
                        <ul>
                            <li><NavLink className="navbarLink" to="/aboutus">About Us</NavLink></li>
                            <li><NavLink className="navbarLink" to="/shop">Shop</NavLink></li>
                            <li><NavLink className="navbarLink" to="/contact">Contact</NavLink></li>
                        </ul>
                    }
                </div>   
                <div className="topRight">    
                    <select value={ country } onChange={ event => setCountry(event.target.value) }>
                            <option value="Portugal">Portugal</option>
                            <option value="Spain">Spain</option>
                            <option value="France">France</option>
                            <option value="Italy">Italy</option>
                            <option value="Netherlands">Netherlands</option>
                            <option value="UK">UK</option>
                            <option value="USA">USA</option>
                    </select>
                    <ul className="navButtons">
                        <li>
                            <NavLink className="shoppingCartLink" to="/shoppingcart">
                            <button type="button" name="cartBtn" aria-label="Shopping Cart">
                                    <i className="fa-solid fa-cart-shopping" ></i>
                            </button>
                            <div className="cartLength">{cart.length}</div>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}