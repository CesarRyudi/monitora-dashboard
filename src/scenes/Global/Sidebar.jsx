import { useState } from "react";
import {ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import  HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import  ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import  PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import  TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import  MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import  MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import  HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
// import  BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
// import  PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import  PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import { useLocation } from "react-router-dom";


const Item = ({title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <MenuItem active={selected === title} style={{ color: colors.grey[100]}} onClick={() => setSelected(title)} icon={icon}>

        <Typography>{title}</Typography>
        <Link to={to}/>
        </MenuItem>
    )

}





const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");
    const location = useLocation();

    if(location.pathname === "/login"){
        return
    }else{
    return (
        <Box sx={{
            "& .pro-sidebar-inner": {
                background: `${colors.primary[400]} !important`
            },
            "& .pro-icon-wrapper": {
                backgroundColor: "transparent !important"
            },
            "& .pro-inner-item": {
                padding: "5px 35px 5px 20px !important"
            },
            "& .pro-inner-item:hover": {
                color: "#868dfb !important"
            },
            "& .pro-menu-item.active": {
                color: "#6870fa !important"
            },
            
        }}
        >
            <ProSidebar collapsed={isCollapsed} 
                        // style={{ height:"100%" }}
            >
                <Menu iconShape="square">
                    {/* Logo and menu Icon  */}
                    <MenuItem onClick={() => setIsCollapsed(!isCollapsed)} 
                    icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                    style={{
                        margin: "10px 0 20px 0",
                        color: colors.grey[100],
                    }}
                    >
                    {!isCollapsed && (
                        <Box display="flex" justifyContent="space-between" alignItems="center" ml="15px"> 
                          <Typography variant="h3" color={colors.grey[100]}>ADMINIS</Typography>
                          <IconButton onClick={() => setIsCollapsed(!isCollapsed)} >
                            <MenuOutlinedIcon />
                          </IconButton>
                        </Box>
                    )}
                    </MenuItem>
                    {/* USER  */}
                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <img 
                                alt="profile-user"
                                width="100px"
                                height="100px"
                                src={`../../assets/user.png`}
                                style={{ cursor: "pointer", borderRadius:"50%"}}
                                />
                            </Box>
                            
                            <Box textAlign="center">
                                <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{ m: "10px 0 0 0"}}>Cesar Fusco</Typography>
                                <Typography variant="h4" color={colors.greenAccent[600]}> React developper</Typography>
                            </Box>
                        </Box>
                    )}

                    {/* Menu Itens  */}
                    <Box paddingLeft={isCollapsed? undefined : "10%"}> 
                        <Item title="Dashboard" 
                        to="/" 
                        icon={<HomeOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                        />

                        <Typography variant="h6" color={colors.grey[300]} sx={{m: "15px 0 5px 20px" }}>Tabelas</Typography>

                        <Item title="Tabela de Leituras " 
                        to="/tabela" 
                        icon={<ContactsOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                        />

                        <Typography variant="h6" color={colors.grey[300]} sx={{m: "15px 0 5px 20px" }}>Cadastro</Typography>
                        
                        <Item title="Cadastro de Locais" 
                        to="/cadastro" 
                        icon={<MapOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                        />
                        {/* <Item title="Calendar " 
                        to="/calendar" 
                        icon={<CalendarTodayOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                        />*/}

                        {/* <Item title="FAQ " 
                        to="/map" 
                        icon={<HelpOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                        />  */}

                        <Typography variant="h6" color={colors.grey[300]} sx={{m: "15px 0 5px 20px" }}>Gráficos</Typography>
                        
                        <Item title="Gráfico de Linhas" 
                        to="/line" 
                        icon={<TimelineOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                        />

                        <Item title="Gráfico de Pizza" 
                        to="/pie" 
                        icon={<PieChartOutlineOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                        />

                        {/* <Item title="Bar Chart " 
                        to="/bar" 
                        icon={<BarChartOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                        /> */}

                        {/* <Item title="Geography Chart " 
                        to="/geography" 
                        icon={<MapOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                        /> */}
                        

                    </Box>
                </Menu>

            </ProSidebar>
        </Box>
    );
                    }
};

export default Sidebar;