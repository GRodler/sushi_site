import Card from "./Card";
import {GetImmagine} from "./util";
import {useEffect, useState} from "react";
import NavBar from "./Navbar";



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

export default function  Homepage(){
    //chiamata alla api
    const [sushi, setSushi] = useState([]); //inizializziamo la variabile vuota con useState e mettiamo il metodo per riempirla
    useEffect(() =>{ //per eseguire la chiamata rest appena l'applicazione parte
        fetch('http://localhost:4000/sushi_data',//facciamo la richiesta alla endpoint della api
        )
            .then(response =>
                response.json()
            )
            .then((data) =>{
                setSushi(data);
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

