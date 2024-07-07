import { useState } from "react"

export default function Newsletter(){

    const [newsLetter, setNewsLetter] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault()   
        alert("You're ON for all the news from the West")
        setNewsLetter("")
    }
    return(
        <div className="newsLetter">
            <h3>Subscribe our Newsletter</h3>
            <form onSubmit={handleSubmit}>
                <input type="email" id="Email" placeholder="Email" value={newsLetter} onChange={(event) => setNewsLetter(event.target.value)} required></input>
                <button type="submit">Subscribe</button>
            </form>
        </div>
    )
}
