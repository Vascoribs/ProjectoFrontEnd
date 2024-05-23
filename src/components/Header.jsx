import { useState } from "react"
import { NavLink } from "react-router-dom"



export default function Header(){
    
    const [country, setCountry] = useState("Portugal")

    return(
        <nav>
            <h1>
                <img src="C:\xampp\htdocs\projectofrontend\projecto-front-end\logo_onwest\120x85\OnwestPrancheta 1 cópia.png" alt="OnWest Track Club" />
            </h1>
            <ul>
                <li><NavLink to="/aboutus">About US</NavLink></li>
                <li><NavLink to="/shop">Shop</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>    
                    <select value={ country } onChange={ event => setCountry(event.target.value) }>
                        <option value="Portugal">Portugal</option>
                        <option value="Spain">Spain</option>
                        <option value="France">France</option>
                        <option value="Italy">Italy</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="UK">UK</option>
                        <option value="USA">USA</option>
                    </select>
            <ul>
                <li>
                    <button type="button">
                        <i class="fa-solid fa-magnifying-glass" aria-label="Search"></i>
                    </button>
                </li>
                <li>
                    <button type="button">
                        <i class="fa-solid fa-cart-shopping" aria-label="Shopping Cart"></i>
                    </button>
                </li>
            </ul>
        </nav>
    )
}