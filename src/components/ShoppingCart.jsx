import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import Header from "./Header";


export default function ShoppingCart() {
    
    const [articles, setArticles] = useState([]);
    const {cart} = useContext(CartContext);
    
    return (
        <div className="shoppingCart">
            <h2>Shopping Cart</h2>
            <div>
            {articles.map(article => (
                <section key={ article.id }>
                    <h3>{ article.name }</h3>
                    <div>
                        <img src={ article.photo } alt="" />
                    </div>
                    <div>{ article.price }€</div>
                    </section>
            ))}
            </div>
        </div>
        
        
    )
}