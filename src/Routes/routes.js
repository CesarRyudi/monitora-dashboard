import React from "react";
import Login from "../scenes/Login";
import DashboardContent from "../scenes/dashboard";
import ProtectedRoutes from "./ProtectedRoutes"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Routering = () => {
    return ( 
    <Router>
        <Routes>
            <Route path="*" element={<Login/>}/>
            {/* <Route path="/cadastrar" element={<Cadastro/>}/> */}
            <Route path="/dashboard" element={
                <DashboardContent/>
            }/>
        </Routes>
    </Router>
     );
}
 
export default Routering;