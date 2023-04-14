import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route, useLocation, Navigate, useNavigate } from "react-router-dom";
import Topbar from "./scenes/Global/Topbar";
import Sidebar from "./scenes/Global/Sidebar";
import DashboardContent from "./scenes/dashboard";
import Contacts from "./scenes/contacts";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import Login from "./scenes/Login/index"
import fetchData from "./Funcoes/BuscaData";
import { useEffect, useState } from "react";
import Map from "./scenes/MapComponent";
import { height } from "@mui/system";
import Cookies from "js-cookie";

function App() {
  const [theme, colorMode] = useMode();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    
    const token = Cookies.get("meu_app_token");
    console.log(token)
    if(!token) {
      navigate("/login"); 
    }else {
      async function fetchDataFromAPI() {
        const data = await fetchData();
        setData(data);
        console.log(data);
      }
      fetchDataFromAPI();
    }
  }, []);


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <div style={{ display: "flex",  minHeight: "100vh" }}>
            <Sidebar />
          </div>
          <div style={{ display: "flex", width: "100%", overflowY: "auto" }}>
            <Main />
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

function Main(){
    const location = useLocation();

  return (
    <main className="content">
      {(location.pathname !== "/cadastro" && location.pathname !== "/login" )&& (
        <Topbar />  
      )}
      <Routes>
        <Route path="/" element={<DashboardContent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tabela" element={<Contacts />} />
        <Route path="/cadastro" element={<Form />} />
        <Route path="/pie" element={<Pie />} />
        <Route path="/line" element={<Line />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </main>
  );
}

export default App;
