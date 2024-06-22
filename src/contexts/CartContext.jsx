import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartContextProvider(props) {

    const [cart,setCart] = useState([]);

        function addToCart(article) {
            console.log("funciona", article);
            setCart(prevState => {
                const cartCopy = [...prevState, article];
                console.log(cartCopy)

                const repeated = cartCopy.find(item => item.id == article.id);

                if(!repeated) {
                    cartCopy.push(article);
                }

                return cartCopy;
            });
        }

    return (
        <CartContext.Provider value={{addToCart, cart}}>{ props.children }
        </CartContext.Provider>
    );
}