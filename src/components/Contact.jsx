import { useState } from "react";


export default function Contact(){
    
    const [name, setName] = useState ("");
    const [email, setEmail] = useState ("");
    const [country, setCountry] = useState ("");
    const [comments, setComments] = useState ("");

    const handleSubmit = (event) => {
        event.preventDefault()   
        alert("Thank you! You'll be hearing from us.")
        setName("")
        setEmail("")
        setCountry("")
        setComments("")
    }

    return(
        <div className="contactUs">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div><input type="text" name="name" placeholder="Full Name" value={name} onChange={(event) => setName(event.target.value)} /></div>
                <div><input type="email" name="email" placeholder="Email *"  value={email} onChange={(event) => setEmail(event.target.value)} required/></div>
                <div><input type="text" name="country" placeholder="Country" value={country} onChange={(event) => setCountry(event.target.value)} /></div>
                <div className="comments"><textarea placeholder="Comment *"  value={comments} onChange={(event) => setComments(event.target.value)} required></textarea></div>
                <p>* required field</p>
                <button type="submit">Contact Us</button>
            </form>
        </div>
    )
}