import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartContextProvider(props) {

    const [cart,setCart] = useState([]);

    function addToCart(article, quantity) {
        setCart(prevState => {
            const cartCopy = [...prevState];

            const existingProduct = cartCopy.findIndex(item => item.id == article.id);

            if(existingProduct < 0) {
                article.quantity = parseInt(quantity);
                cartCopy.push(article);
            }
            else{
                cartCopy[existingProduct].quantity = parseInt(quantity)
            }
            return cartCopy;
        });
    }

    function subtractArticle(article, quantity) {
        setCart(prevState => {
            const cartCopy = [...prevState];

            const existingProduct = cartCopy.findIndex(item => item.id == article.id);

            if(existingProduct < 0) {
                article.quantity = article.parseInt(quantity--);
                cartCopy.push(article);
            }
            else{
                cartCopy[existingProduct].quantity = parseInt(quantity)
            }
            return cartCopy;
        })
    }
    
    function addArticle(article, quantity) {
        setCart(prevState => {
            const cartCopy = [...prevState];

            const existingProduct = cartCopy.findIndex(item => item.id == article.id);

            if(existingProduct < 0) {
                article.quantity = parseInt(quantity)++;
            }
            else{
            
            }
            return cartCopy;
        })
    }
    
    function removeArticle(article, quantity) {
        setCart(prevState => {
            const cartCopy = [...prevState];

            const existingProduct = cartCopy.findIndex(item => item.id == article.id);

            if(existingProduct < 0) {
                
            }
            else{
                
            }
            return cartCopy;
        })
    }

    return (
        <CartContext.Provider value={{addToCart, subtractArticle, addArticle, removeArticle, cart}}>{ props.children }
        </CartContext.Provider>
    );
}