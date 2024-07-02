import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";


export default function ShoppingCart() {
    
    const {cart} = useContext(CartContext);
    const { subtractArticle } = useContext(CartContext);
    const { addArticle } = useContext(CartContext);
    const { removeArticle } = useContext(CartContext);
    const [cartTotal, setCartTotal] = useState(0)
    
    useEffect(() => {
        let total = 0;

        for(let article of cart){

            total = (article.price * article.quantity) + total; 
        }
        setCartTotal(total);
    },[cart])

    return (
        <div className="shoppingCart">
            <h2>Shopping Cart</h2>
            <div className="shoppingArticles">
            {cart.map(article => (
                <section key={ article.id }>
                    <h3>{ article.name }</h3>
                    <div>
                        <img src={ article.photo } alt="" />
                    </div>
                    <div>{ article.price } € </div>
                    <div> Quantity:{article.quantity} </div>
                    <div>
                        <button type="button" onClick={()=>subtractArticle(article)} aria-label="subtrair artigo">-</button>
                        <button type="button" onClick={()=>addArticle(article)} aria-label="adicionar artigo">+</button>
                        <button type="button" onClick={()=>removeArticle(article)} aria-label="remover artigo">Remove</button>
                    </div>
                    <div className="subTotal">{article.price * article.quantity} €</div>
                </section>
            ))}
            </div> 
            <div className="grandTotal">Value: {cartTotal} €</div>
        </div>   
    )
}