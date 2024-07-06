export default function Contact(){
    
    const[name, setName] = useState ("Name");
    const[email, setEmail] = useState ("Email");
    const[country, setCountry] = useState ("Country");
    const[comments, setComments] = useState ("Comments");

    return(
        <div className="contactUs">
            <h2>Contact Us</h2>
            <form method="post" action="">
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