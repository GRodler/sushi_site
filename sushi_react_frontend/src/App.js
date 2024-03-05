import './style.css';
import {Route, Routes} from 'react-router-dom';
import Homepage from "./Homepage";
import Aggiungi from "./Aggiungi";

function App() {
    return (
        <>
            <Routes>
                <Route path ="/" element = {<Homepage />}></Route>
                <Route path="/aggiungi" element={<Aggiungi/>} ></Route>
            </Routes>
        </>
        );


}
export default App;
