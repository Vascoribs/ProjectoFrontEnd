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
            <p>Olá</p>
            {
                <div> 
                    <h2>{ article.name }</h2>
                    <img src={article.photo} alt="" />
                    <p> {article.description} </p> 
                </div>
            }
        </main>     
    ); 
}
