import {Link} from "react-router-dom";

export default function Header() {
    return (
        <nav>
            <div className="nav-wrapper">
                <a className="brand-logo right"><Link to="/">Food-recipe</Link> </a>
                <ul id="nav-mobile" className="left">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contacts">Contacts</Link></li>
                </ul>
            </div>
        </nav>
    )
}