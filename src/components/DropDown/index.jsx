import { green, red } from '@mui/material/colors';
import { color } from '@mui/system';
import Multiselect from 'multiselect-react-dropdown';
import { useState } from 'react';
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

const SelectComp = () => {
    
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

  const [options, setOptions] = useState([
                                    'Endereço 1',
                                    'Endereço 2',
                                    'Endereço 3',
                                    'Endereço 4',
                                    'Endereço 5'
                                ])
    const style = {
    searchBox: {
            border: "none",
            "fontSize": "10px",
            "minHeight": "30px",
            width: "100%"
        },
    chips: { 
        color: "white",
        background: colors.blueAccent[500],
        backgronudColor: "red",
    },
    multiselectContainer: { 
        width: "100%"
    }
  }

    return (

        <div style={{color:"black", margin:"0px 10px 0px 10px" }}>
            <Multiselect
            isObject={ false }
            options={ options }
            selectionLimit={3}
            placeholder={"Endereços"}
            avoidHighlightFirstOption={true}
            hidePlaceholder={true}
            showCheckbox
            style={style}
            />
        </div>




    )};

export default SelectComp;



