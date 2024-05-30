export default function Contact(){
    
    return(
        <div className="contactUs">
            <h2>Contact Us</h2>
            <form method="post" action="">
                <div><input type="text" name="name" placeholder="Full Name"/></div>
                <div><input type="email" name="email" placeholder="Email"/></div>
                <div><input type="text" name="country" placeholder="Country"/></div>
                <div><input type="text" name="comments"
                placeholder="Comment" /></div>
                <div><button type="submit">Contact Us</button></div>
            </form>
        </div>
    )
}