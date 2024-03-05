import './style.css';
import {Route, Routes} from 'react-router-dom';
import Homepage from "./Homepage";

function App() {
    return (
        <>
            <Routes>
                <Route path ="/" element = {<Homepage />}></Route>
                <Route path="/orders" ></Route>
            </Routes>
        </>
        );


}
export default App;
