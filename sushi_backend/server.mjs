import express, {request, response} from "express";//mjs supporta gli import
import cors from "cors"; //questa roba serve per la sicurezza
import data from "./sushi_data.json" assert {type: "json"};
import bodyParse from "body-parser"
import mysql from "mysql"

//nodemon per farselo piu comodo

const app = express();
const port = 4000;//la 3000 e occupata da react

//database connessione
const db = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '',
        database : 'sushi'
});
db.connect();

app.use(bodyParse.json()); //bisogna abilitare per trovare il body

app.use(cors({
        origin: 'http://localhost:3000' //BISOGNAVA SPECIFICARE LE ORIGINE CONSENTITE OTTIMO
}))

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
app.get("/sushi_data",(request,response) =>{
    const sushi_response = data.sushi;

    db.query('SELECT * FROM `sushi_type` WHERE 1',(error, results) => {
        if (error) {
            console.error("Errore nella query al database:", error);
            return;
        }
        const db_result = JSON.stringify(results);
        response.send(db_result);
    });


})
app.post("/add_data",(request,response) =>{
        console.log("dati ricevuti:")
        console.log(request.body.nome)
        db.query("INSERT INTO `sushi_type`(`nome`, `immagine`, `prezzo`) VALUES ('+ +','[value-3]','[value-4]')");

});

