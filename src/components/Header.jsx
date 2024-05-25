import { useState } from "react"
import { NavLink } from "react-router-dom"


export default function Header(){
    
    const [country, setCountry] = useState("Portugal")

    return(
        <nav>
            <div className="topLeft">
                <h1>
                    <NavLink to="/">
                        <img src="/img/logo_onwest/120x85/OnwestPrancheta1.png" alt="OnWest Track Club" />
                    </NavLink>
                </h1>
                <ul>
                    <li><NavLink to="/aboutus">About US</NavLink></li>
                    <li><NavLink to="/shop">Shop</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>    
                <select value={ country } onChange={ event => setCountry(event.target.value) }>
                        <option value="Portugal">Portugal</option>
                        <option value="Spain">Spain</option>
                        <option value="France">France</option>
                        <option value="Italy">Italy</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="UK">UK</option>
                        <option value="USA">USA</option>
                </select>
            <div className="topRight">
                <ul>
                    <li>
                        <button type="button" aria-label="Search">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </li>
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