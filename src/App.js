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

function App() {
  const [theme, colorMode] = useMode();

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchDataFromAPI() {
      const data = await fetchData();
      setData(data);
    }
    fetchDataFromAPI();
  }, []);

  console.log(data);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app" >
          <div style={{ height: "100%" }}>
            <Sidebar style={{ height: "100%" }} />
          </div>
          <Main />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

function Main(){
    const location = useLocation();

  return (
    <main className="content">
      {location.pathname !== "/cadastro" && <Topbar />}
      <Routes>
        <Route path="/" element={<DashboardContent />} />
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
