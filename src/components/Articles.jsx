import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

export default function Articles() {

    const { addToCart } = useContext(CartContext);

    const params = useParams();
    const [article, setArticle] = useState({});
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {

        fetch("/articles.json")
        .then(response => response.json())
        .then(articles => {

            const articleFound = articles.find( item => item.id == params.id );
            

            if(articleFound) {
                setArticle(articleFound);
            }
            else {
                setArticle({
                    "description": "Please check another page",
                    "photo":"https://www.hostpapa.com/blog/app/uploads/2019/05/image5.png"
                })
            }

        })

    }, [params.id]);

    return (
        
        <main>
            { article &&
                <div className="articlesPage"> 
                    <h2>{ article.name }</h2>
                        <div className="articleDisplay">
                            <img src={article.photo} alt="" />
                            <div className="articleDetails">
                                <p> {article.name} </p>
                                    <ol>
                                        {article.features && article.features.map((feature, index) => (
                                                <li key={index}>
                                                    {feature}
                                                </li>
                                        ))}
                                    </ol> 
                                    <label htmlFor="quantity">Quantity:</label>
                                    <input type="number" value={ quantity } id="quantity" name="quantity" min="1" max="99" onChange={(event) => setQuantity(event.target.value)}/>
                                    <button type="button" onClick={()=>addToCart(article, quantity)}>Add to Cart</button>
                            </div>   
                        </div>
                </div>
            }
        </main>     
    ); 
}
