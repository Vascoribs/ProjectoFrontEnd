import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Articles() {

    const params = useParams();
    const [article, setArticle] = useState({});

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
            {
                <div className="articlesPage"> 
                    <h2>{ article.name }</h2>
                        <div className="articleDisplay">
                            <img src={article.photo} alt="" />
                            <div className="articleDetails"></div>
                            <p> {article.name} </p>
                            <p> {article.description} </p> 
                            <label for="quantity">Quantity:</label>
                            <input type="number" id="quantity" name="quantity" min="1" max="99"/>
                            <button type="submit" formMethod="">Add to Cart</button>
                        </div>
                </div>
            }
        </main>     
    ); 
}