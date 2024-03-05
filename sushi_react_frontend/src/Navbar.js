import logo from "./images/logo192.png";

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
                          <button type="button" className="btn btn-success mx-1">Ordina</button>
                          <button type="button" className="btn btn-warning mx-1">Aggiungi</button>
                      </span>

                    </ul>
                </div>
            </nav>
        </>
    )
}