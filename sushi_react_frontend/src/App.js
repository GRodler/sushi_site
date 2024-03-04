import './style.css';
import Card from './Card'
import {useState,useEffect} from "react";
import logo from './images/logo192.png'
import {GetImmagine} from "./util";


export function CardGrid({data}){
    const sushi = data.map(dato =>
            <div className="col-3 mt-3">
                <Card
                    nome = {dato.nome}
                    immagine={GetImmagine(dato.immagine)}
                    prezzo={dato.prezzo}
                ></Card>

            </div>
        );
    return (
      <div className="container ">
          <div className="row">{sushi}</div>

      </div>
  );
            }

export function NavBar(){
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
                      <button type="button" className="btn btn-warning">Login</button>
                  </ul>
              </div>
          </nav>
      </>
  )
}

function App() {
    const [sushi,setSushi] =useState([]) //inizializziamo la variabile vuota con useState e mettiamo il metodo per riempirla
    useEffect(() =>{ //per eseguire la chiamata rest appena l'applicazione parte
        fetch('http://localhost:4000/sushi_data',//facciamo la richiesta alla endpoint della api
        )
            .then(response =>
                response.json()
            )//sto affare ritorna una promessa nice
            .then((data) =>{
                console.log(data)
                setSushi(data);
                console.log(sushi)
            })
            .catch((err) => {
                console.log(err)
            });
    })


    return (
        <>
            <NavBar></NavBar>
            <CardGrid
                data = {sushi}
            ></CardGrid>
      </>
  );
}

export default App;
