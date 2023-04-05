import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/MockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined"
import EmailIcon from "@mui/icons-material/Email"
import PersonAddIcon from "@mui/icons-material/PersonAdd"
import TrafficIcon from "@mui/icons-material/Traffic"
import PointOfSaleIcon from "@mui/icons-material/PointOfSale"
import LineChart from "../../components/LineChart"; 
import PieChart from "../../components/PieChart";


const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    return (
    
    <Box m="20px">
                <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="DASHBOARD" subtitle="Bem vindo ao dashboard!" />
                

            <Box>
                <Button
                  sx={{ background: colors.blueAccent[700], color: colors.grey[100], fontSize: "14px", fontWeight: "bold", padding:"10px 20px" }}>
                  <DownloadOutlinedIcon sx={{ mr: "10px"}} />
                  Baixar relatório
                </Button>
            </Box>
    </Box>

            {/* Grid and charts  */}
            <Box
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            gridAutoRows="140px"
            gap="20px"
            mt="8px"
            >
                {/* ROW 2 */}
                <Box
                borderRadius="12px"
                gridColumn="span 9"
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
                
                >
                    <Box
                    mt="25px"
                    p="0 30px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    
                    >
                        <Box>
                            <Typography variant="h4" fontWeight="600" color={colors.grey[100]}>
                                Gráfico de Linhas
                            </Typography>
                        </Box>

                    </Box>

                    <Box height="250px" >
                        <LineChart isDashboard={true} />
                    </Box>
            </Box> 

            {/* Transactiions  */}
            <Box 
            
            borderRadius="12px"
            gridColumn="span 3"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
            overflow="auto"
            >
                <Box 
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    borderBottom={`4px solid ${colors.primary[500]}`}
                    colors={colors.grey[100]}
                    p="15px"
                >
                    <Typography color={colors.grey[100]} variant="h5" fontWeight={600} >
                        Dados atuais 
                    </Typography>
                </Box>
                {mockTransactions.map(( transaction, i) => (
                    <Box 
                        key={`${transaction.txId}-${i}`}
                        display="flex"
                        justifyContent="space-between"
                        borderBottom={`4px solid ${colors.primary[500]}`}
                        colors={colors.grey[100]}
                        p="15px"
                    >
                        <Box>
                            <Typography 
                            color={colors.greenAccent[500]} 
                            variant="h5" 
                            fontWeight={600} 
                            >
                            {transaction.txId}  
                            </Typography>

                            <Typography 
                            color={colors.greenAccent[500]} 
                            variant="h6" 
                            fontWeight={600} 
                            >
                            {transaction.user}  
                            </Typography>
                        </Box>

                            <Box color={colors.grey[100]}>
                                {transaction.date}
                                </Box>
                            <Box
                                backgroundColor={colors.blueAccent[500]}
                                p="5px 10px"
                                borderRadius="12px"
                            > 
                            {transaction.cost} mca

                            </Box>

                    </Box>

                ))}
            </Box>



            {/* Pie Chart */}
             <Box
                gridColumn="span 3"
                gridRow="span 2"
                mb="35px"
                backgroundColor={colors.primary[400]}
                borderRadius="12px"
                >
                    <Box
                    mt="10px"
                    p="0 0px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    >
                        <Box>
                            <Typography variant="h4" fontWeight="600" color={colors.grey[100]}>
                            Médias ponto 1   
                            </Typography>
                        </Box>
                    </Box>

                    <Box height="250px" mt="">
                        <PieChart isDashboard={true} />
                    </Box>
                </Box>

            {/* Pie Chart 2 */}
                <Box
                gridColumn="span 3"
                gridRow="span 2"
                mb="35px"
                backgroundColor={colors.primary[400]}
                borderRadius="12px"
                >
                    <Box
                    mt="10px"
                    p="0 0px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    >
                        <Box>
                            <Typography variant="h4" fontWeight="600" color={colors.grey[100]}>
                            Médias ponto 2   
                            </Typography>
                        </Box>
                    </Box>

                    <Box height="250px" mt="">
                        <PieChart isDashboard={true} />
                    </Box>
                </Box>

                {/* Pie Chart 3 */}
                <Box
                gridColumn="span 3"
                gridRow="span 2"
                mb="35px"
                backgroundColor={colors.primary[400]}
                borderRadius="12px"
                >
                    <Box
                    mt="10px"
                    p="0 0px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    >
                        <Box>
                            <Typography variant="h4" fontWeight="600" color={colors.grey[100]}>
                            Médias ponto 3   
                            </Typography>
                        </Box>
                    </Box>

                    <Box height="250px" mt="">
                        <PieChart isDashboard={true} />
                    </Box>
                </Box>

                {/* Pie Chart 4 */}
                <Box
                gridColumn="span 3"
                gridRow="span 2"
                mb="35px"
                backgroundColor={colors.primary[400]}
                borderRadius="12px"
                >
                    <Box
                    mt="10px"
                    p="0 0px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    >
                        <Box>
                            <Typography variant="h4" fontWeight="600" color={colors.grey[100]}>
                            Médias ponto 4   
                            </Typography>
                        </Box>
                    </Box>

                    <Box height="250px" mt="">
                        <PieChart isDashboard={true} />
                    </Box>
                </Box>
            

        </Box>
    </Box>

)};

export default Dashboard;