
import 'bootstrap/dist/css/bootstrap.css';
import {useState} from "react";


export default function Card({nome,immagine,prezzo}){

    const [quantity, setQuantity] = useState(1);//hook di react

    const handleIncrement = () => {
        setQuantity(prevQuantity => (prevQuantity < 15) ? prevQuantity + 1 : prevQuantity); //prevUse fa parte degli hook di react
    };

    const handleDecrement = () => {
        setQuantity(prevQuantity => (prevQuantity > 1) ? prevQuantity - 1 : prevQuantity);
    };

    return (
        <div className="card text-center">
            <img className="card-img-top" src={immagine} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{nome}</h5>
                <p className="card-text">Prezzo: {prezzo} $</p>
                <div className="wrapper">
                    <span className="minus" onClick={handleDecrement}>-</span>
                    <span className="num">{quantity < 10 ? `0${quantity}` : quantity}</span>
                    <span className="plus" onClick={handleIncrement}>+</span>
                </div>
            </div>
        </div>

    )
}