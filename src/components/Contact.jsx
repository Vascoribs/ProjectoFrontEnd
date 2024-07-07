import { useState } from "react";


export default function Contact(){
    
    const [name, setName] = useState ("");
    const [email, setEmail] = useState ("");
    const [country, setCountry] = useState ("");
    const [comments, setComments] = useState ("");

    const handleSubmit = (event) => {
        event.preventDefault()   
        setEmail(event.target.email.value)
    }

    return(
        <div className="contactUsWrapper">
            {!email &&
                <div className="contactUs">
                    <h2>Contact Us</h2>
                    <form onSubmit={handleSubmit}>
                        <div><input type="text" name="name" placeholder="Full Name" aria-label="Name"onSubmit={(event) => setName(event.target.value)} /></div>
                        <div><input type="email" name="email" placeholder="Email *" aria-label="Email" onSubmit={(event) => setEmail(event.target.value)} required/></div>
                        <div><input type="text" name="country" placeholder="Country" aria-label="Country" onSubmit={(event) => setCountry(event.target.value)} /></div>
                        <div className="comments"><textarea placeholder="Comment *" onSubmit={(event) => setComments(event.target.value)} required></textarea></div>
                        <p>* required field</p>
                        <button type="submit">Contact Us</button>
                    </form>
                </div>
            }
            {email &&
                <p className="contactUsOk" role="alert">Thank you! You'll be hearing from us!</p>
            }
        </div>
    )
}