import {Route, Routes} from "react-router-dom";
import React from "react";
import Indentifier from "../indentifier";
import Challenge from "../challenge";


function Rutas(){
    return(<div>
        <Routes>
            <Route path="/login/identifier" element={<Indentifier/>} />
            <Route path="/login/challenge" element={<Challenge/>} />
        </Routes>
    </div>);
}

export default Rutas;