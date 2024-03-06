import express, {request, response} from "express";//mjs supporta gli import
import cors from "cors"; //questa roba serve per la sicurezza
import data from "./sushi_data.json" assert {type: "json"};
import bodyParse from "body-parser"

const app = express();
const port = 4000;//la 3000 e occupata da react

app.use(bodyParse.json()) //bisogna abilitare per trovare il body
app.use(cors({
        origin: 'http://localhost:3000' //BISOGNAVA SPECIFICARE LE ORIGINE CONSENTITE OTTIMO
}))

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
app.get("/sushi_data",(request,response) =>{
    const sushi_response = data.sushi
    response.send(JSON.stringify(sushi_response))
})

app.post("/add_data",(request,response) =>{
        console.log("dati ricevuti:")
        console.log(request.body)
        //
});

