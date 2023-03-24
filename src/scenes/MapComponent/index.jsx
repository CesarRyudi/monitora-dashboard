import { Box } from "@mui/material";
import Header from "../../components/Header";
import Map from "../../components/Mapa/Map";

const Mapa = () => {

    return (
        <Box m="20px">
            <Header title="Gráfico de Pizza" subtitle="Média das leituras" />
            <Box height="75vh">
                <Map />
            </Box>

        </Box>
    )

};
export default Mapa;
