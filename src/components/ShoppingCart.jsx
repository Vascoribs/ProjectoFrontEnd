import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";


export default function ShoppingCart() {
    
    const {cart} = useContext(CartContext);
    const { subtractArticle } = useContext(CartContext);
    const { addArticle } = useContext(CartContext);
    
    return (
        <div className="shoppingCart">
            <h2>Shopping Cart</h2>
            <div>
            {cart.map(article => (
                <section key={ article.id }>
                    <h3>{ article.name }</h3>
                    <div>
                        <img src={ article.photo } alt="" />
                    </div>
                    <div>{ article.price }€</div>
                    <div> Quantity:{article.quantity} </div>
                    <button type="button" onClick={()=>subtractArticle(article)}>-</button>
                    <button type="button" onClick={()=>addArticle(article)}>+</button>
                </section>
            ))}
            </div> 
        </div>   
    )
}