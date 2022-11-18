import { Link } from "react-router-dom";

function Navbar() {

    return(
        <nav>
        <h1>WikiCountries</h1>
        <Link className="Link" to="/">Home</Link>
        <Link className="Link" to="/countrieslist">Countries List</Link>
        </nav>
    )
}

export default Navbar;