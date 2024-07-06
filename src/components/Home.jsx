import { NavLink } from "react-router-dom";

export default function Home(){

    return (
        <main>
            <div className="join">
                <h2>Join OnWest</h2>
                <img src="/img/club2.png" alt="" />
            </div>
            <div className="trending">
                <h2>Trending</h2>
                <ul className="mainImgs">
                    <li>
                        <figure>
                            <NavLink to={"/Articles/2"}>
                                <img className="visible" src="/img/cap1.jpeg" alt="" />
                                <img className="hidden" src="/img/cap2.jpeg" alt="" />
                            </NavLink>      
                            <figcaption>Cap - 25€</figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <NavLink to={"Articles/5"}>
                                <img className="visible"src="/img/tanktop1.jpeg" alt="" />
                                <img className="hidden"src="/img/tanktop2.jpeg" alt="" />
                            </NavLink>
                            <figcaption>Pro Tank - 30€</figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <NavLink to={"Articles/6"}>
                                <img className="visible" src="/img/shorts1.jpeg" alt="" />
                                <img className="hidden" src="/img/shorts2.jpeg" alt="" />
                            </NavLink>
                            <figcaption>Shorts - 20€</figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <NavLink to={"Articles/7"}>
                                <img className="visible" src="/img/socks1.jpeg" alt="" />
                                <img className="hidden" src="/img/socks2.jpeg" alt="" />
                            </NavLink>
                            <figcaption>Socks - 10€</figcaption>
                        </figure>
                    </li>
                </ul>
            </div>
        </main>
    )
}