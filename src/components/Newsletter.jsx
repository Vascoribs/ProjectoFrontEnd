import { useState } from "react"

export default function Newsletter(){

    const [newsLetter, setNewsLetter] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault()   
        setNewsLetter(event.target.email.value)
    }


    return(
        <div className="newsLetterWrapper">
            {!newsLetter && 
                <div className="newsLetter">
                <h3>Subscribe our Newsletter</h3>
                <form onSubmit={handleSubmit}>
                    <input type="email" name="email" placeholder="Email" aria-label="Email" onSubmit={(event) => setNewsLetter(event.target.value)} required/>
                    <button type="submit">Subscribe</button>
                </form>
                </div>
            } 
            {newsLetter && 
                <p className="submitOk" role="alert">You're ON for news from the West!</p>
            }
        </div>

       
        
    )
}
