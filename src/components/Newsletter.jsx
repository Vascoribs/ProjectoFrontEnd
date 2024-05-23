export default function Newsletter(){
    return(
        <div>
            <h3>Subscribe our Newsletter</h3>
            <form type="submit" method="POST">
                <input type="text" id="Email" placeholder="Email"></input>
                <button type="submit">Subscribe</button>
            </form>
        </div>
    )
}