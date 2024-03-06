import logo from "./images/logo192.png";
import {Link} from "react-router-dom";

export default function NavBar(){
    return(
        <>
            <nav className="navbar navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} width="30" height="30"
                             className="d-inline-block align-top" alt=""></img>
                        SushiPazzo
                    </a>
                    <ul className="navbar-nav mr-auto">
                      <span>
                          <button type="button" className="btn btn-warning mx-1">
                              <Link to="/aggiungi" className="link">Aggiungi</Link>
                          </button>
                          <button type="button" className="btn btn-success mx-1">
                              <Link to="/" className="link">Ordina</Link>
                          </button>

                      </span>

                    </ul>
                </div>
            </nav>
        </>
    )
}