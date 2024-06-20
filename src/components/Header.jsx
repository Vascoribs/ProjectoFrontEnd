import { useState } from "react"
import { NavLink } from "react-router-dom"


export default function Header(){
    
    const [country, setCountry] = useState("Portugal")

    return(
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
                        <button type="button" aria-label="Shopping Cart">
                            <i className="fa-solid fa-cart-shopping" ></i>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}