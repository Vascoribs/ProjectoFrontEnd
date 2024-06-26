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

    function subtractArticle(article) {
        setCart(prevState => {
            const cartCopy = [...prevState];

            const existingProduct = cartCopy.findIndex(item => item.id == article.id);

            if(existingProduct >= 0) {
                cartCopy[existingProduct].quantity--

                if(cartCopy[existingProduct].quantity <= 0) {
                    cartCopy.splice(existingProduct, 1)
                }
            }
           
            return cartCopy;
        })
    }
    
    function addArticle(article) {
        setCart(prevState => {
            const cartCopy = [...prevState];

            const existingProduct = cartCopy.findIndex(item => item.id == article.id);

            if(existingProduct <= 0 && cartCopy[existingProduct].quantity < article.stock) {
                cartCopy[existingProduct].quantity++;
            }
        
            return cartCopy;
        })
    }
    
    function removeArticle(article) {
        setCart(prevState => {
            const cartCopy = [...prevState];

            const existingProduct = cartCopy.findIndex(item => item.id == article.id);

            if(existingProduct >= 0) {
                cartCopy.splice(existingProduct, 1)
            }
           
            return cartCopy;
        })
    }

    return (
        <CartContext.Provider value={{addToCart, subtractArticle, addArticle, removeArticle, cart}}>{ props.children }
        </CartContext.Provider>
    );
}