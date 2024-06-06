export default function Home(){
    return (
        <main>
            <div className="join">
                <h2>Join OnWest</h2>
                <img src="img/club2.png" alt="" />
            </div>
            <div className="trending">
                <h2>Trending</h2>
                <ul classname="mainImgs">
                    <li>
                        <figure>
                            <img src="img/cap1.png" alt="Cap" />
                            <figcaption>Cap - 25€</figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src="img/tanktop1.png" alt="Pro Tank" />
                            <figcaption>Pro Tank - 30€</figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src="img/shorts1.png" alt="Shorts" />
                            <figcaption>Shorts - 20€</figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src="img/socks1.png" alt="Socks" />
                            <figcaption>Socks - 10€</figcaption>
                        </figure>
                    </li>
                </ul>
            </div>
        </main>
    )
}