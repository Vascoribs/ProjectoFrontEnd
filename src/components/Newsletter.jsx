export default function Newsletter(){
    return(
        <div className="newsLetter">
            <h3>Subscribe our Newsletter</h3>
            <form type="submit" method="POST">
                <input type="text" id="Email" placeholder="Email" required></input>
                <button type="submit">Subscribe</button>
            </form>
        </div>
    )
}