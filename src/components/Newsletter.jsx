import { useState } from "react"

export default function Newsletter(){

    const [newsLetter, setNewsLetter] = useState("Email");

    const handleSubmit = (event) => {
        event.preventDefault()
        const newsletterEmail = {newsLetter};

        console.log(newsLetter)
    }

    return(
        <div className="newsLetter">
            <h3>Subscribe our Newsletter</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" id="Email" placeholder="Email" value={newsLetter} onChange={(event) => setNewsLetter(event.target.value)} required></input>
                <button type="submit">Subscribe</button>
            </form>
        </div>
    )
}