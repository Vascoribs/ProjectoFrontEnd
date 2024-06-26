import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";

export default function Shop() {

    const [articles, setArticles] = useState([]);

    useEffect(() => {

        fetch("articles.json")
        .then(response => response.json())
        .then(articles => setArticles(articles)); 
    }, []);
     
    return(
        <div className="shop">
            <h2>Shop</h2>
            <ol className="shopProducts">
                {articles.map(article => (
                    <section key={ article.id }>
                        <li>
                            <figure>
                                <NavLink to={"/Articles/" + article.id}>
                                    <img src={ article.photo} alt="" />
                                </NavLink>
                                <NavLink to={"/Articles/" + article.id}>
                                    <figcaption>{ article.name }</figcaption>
                                </NavLink>
                            </figure>
                        </li>
                    </section>
                ))}
            </ol>     
        </div>
    )
}