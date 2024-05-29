export default function Contact(){
    
    return(
        <div className="contactUs">
            <h2>Contact Us</h2>
            <form method="post" action="">
                <input type="text" name="name" placeholder="Full Name"/>
                <input type="email" name="email" placeholder="Email"/>
                <input type="text" name="country" placeholder="Country"/>
                <input type="text" name="comments"
                placeholder="Comment" />
                <button type="submit">Contact Us</button>
            </form>
        </div>
    )
}