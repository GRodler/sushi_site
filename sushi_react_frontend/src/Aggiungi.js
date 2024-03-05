import NavBar from "./Navbar";
import {useState} from "react";


function sendData({dati}){
    fetch('http://localhost:4000/add_data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dati)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Errore durante l\'invio dei dati.');
            }
            console.log('Dati inviati con successo!');
        })
        .catch(error => {
            console.error('Errore durante l\'invio dei dati:', error);
        });
}

export function Form(){
    const [nomeSushi, setNomeSushi] = useState('');
    const [prezzoSushi, setPrezzoSushi] = useState('');
    const [immagineSushi, setImmagineSushi] = useState('california');

    const handleNomeChange = (event) => {
        setNomeSushi(event.target.value);
    };

    const handlePrezzoChange = (event) => {
        setPrezzoSushi(event.target.value);
    };

    const handleImmagineChange = (event) => {
        setImmagineSushi(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Puoi gestire il submit del form qui
        const min = 7;
        const max =100;
        const dati ={
            "id":Math.floor(Math.random() * (max - min + 1)) + min,
            "nome":nomeSushi,
            "immagine":immagineSushi,
            "prezzo": prezzoSushi
        }

        // Esegui altre azioni come invio dei dati al server, ecc.
    };

    return (
        <div className="container mt-5">
            <h2>Inserisci un nuovo sushi</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nomeSushi">Nome Sushi:</label>
                    <input type="text" className="form-control" id="nomeSushi" value={nomeSushi} onChange={handleNomeChange} placeholder="Inserisci il nome del sushi" required />
                </div>
                <div className="form-group">
                    <label htmlFor="prezzoSushi">Prezzo:</label>
                    <input type="number" step="0.01" className="form-control" id="prezzoSushi" value={prezzoSushi} onChange={handlePrezzoChange} placeholder="Inserisci il prezzo del sushi" required />
                </div>
                <div className="form-group">
                    <label htmlFor="immagineSushi">Immagine:</label>
                    <select className="form-control" id="immagineSushi" value={immagineSushi} onChange={handleImmagineChange}>
                        <option value="california">California</option>
                        <option value="dragon">Dragon</option>
                        <option value="dynamite">Dynamite</option>
                        <option value="philadelphia">Philadelphia</option>
                        <option value="rainbow">Rainbow</option>
                        <option value="shrimp">Shrimp</option>
                    </select>
                </div>
                <button type="button" className="btn btn-primary" onClick={handleSubmit}>Invia</button>
            </form>
        </div>
    );


}

export default function Aggiungi() {
    return (
        <>
            <NavBar></NavBar>
            <br></br>
            <Form></Form>
        </>
    )
}