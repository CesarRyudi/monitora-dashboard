import { Box, IconButton, Select, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import  InputBase  from "@mui/material/InputBase";
import  LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import  DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import  NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import  SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import  PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import DateRangePickerComp from "../../components/DateRangePicker";
import SelectComp from "../../components/DropDown";
import SelectPonto from "../../components/DropDownPontos";
import Cookies from 'js-cookie';

const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    function ApagaCookie(){
        Cookies.remove('meu_app_token')
        console.log("Cookie apagado")
    } 

    return ( 
    <Box display="flex" justifyContent="space-between" p={0} mb="20px">

        {/* Calendário */}
        
        <Box display="flex" justifyContent="space-between" p={2} mb="-20px" backgroundColor={colors.primary[500]}>
            <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="6px"  >
                <DateRangePickerComp />
            </Box>
            <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="6px" ml={2} >
                    <SelectComp />
            </Box>
            <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="6px" ml={2} >
                    <SelectPonto />
            </Box>
        </Box>

        {/* Select */}
        {/* <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="6px"  >
            
        </Box> */}

        {/* ICONS */}
        <Box display="flex" >
            <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === "dark" ? (
                    <DarkModeOutlinedIcon />
                ) : (
                    <LightModeOutlinedIcon />
                )}
            </IconButton>

            <IconButton>
                <NotificationsOutlinedIcon />
            </IconButton>

            <IconButton>
                <SettingsOutlinedIcon />
            </IconButton>

            <IconButton>
                <PersonOutlinedIcon onClick={ApagaCookie} />
            </IconButton>
        </Box>
    </Box>
    );
};

export default Topbar;