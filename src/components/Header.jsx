import { useState } from "react"

export default function Header(){
    
    const [country, setCountry] = useState("Portugal")

    return(
        <nav>
            <h1>
                <img src="" alt="" />
            </h1>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Shop</a></li>
                <li><a href="">Contact</a></li>
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
                <li><i class="fa-solid fa-magnifying-glass" aria-label="Search"></i></li>
                <li><i class="fa-solid fa-cart-shopping" aria-label="Shopping Cart"></i></li>
            </ul>
        </nav>
    )
}