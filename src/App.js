import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route, useLocation } from "react-router-dom";
import Topbar from "./scenes/Global/Topbar";
import Sidebar from "./scenes/Global/Sidebar";
import DashboardContent from "./scenes/dashboard";
import Contacts from "./scenes/contacts";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import fetchData from "./Funcoes/BuscaData";
import { useEffect, useState } from "react";
import Map from "./scenes/MapComponent";
import { height } from "@mui/system";

function App() {
  const [theme, colorMode] = useMode();
  const [data, setData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("meuTokenJWT");
    // if(!token) {
      if(!true){
      window.location.href = "https://monitora-dashboard-login.vercel.app/";
      console.log(token)
    }else {
    async function fetchDataFromAPI() {
      const data = await fetchData();
      setData(data);
    }
    fetchDataFromAPI();
  }
  }, []);

  console.log(data);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <div style={{ display: "flex", width: "20%", minHeight: "100vh" }}>
            <Sidebar />
          </div>
          <div style={{ width: "100%", overflowY: "auto" }}>
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
      {location.pathname !== "/cadastro" && location.pathname !== "/" && (
        <Topbar />
      )}
      <Routes>
        <Route path="/dashboard" element={<DashboardContent />} />
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
