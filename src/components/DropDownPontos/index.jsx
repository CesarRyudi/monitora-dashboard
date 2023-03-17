import { green, red } from '@mui/material/colors';
import { color } from '@mui/system';
import Multiselect from 'multiselect-react-dropdown';
import { useState } from 'react';
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";


const SelectPonto = () => {
    
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

//   const [options, setOptions] = useState([
    const options = [
    {
      cat: 'Endereço 1',
      ponto: 'Ponto 1'
    },
    {
      cat: 'Endereço 1',
      ponto: 'Ponto 2'
    },
    {
      cat: 'Endereço 1',
      ponto: 'Ponto 3'
    },
    {
      cat: 'Endereço 2',
      ponto: 'Ponto 1'
    },
    {
      cat: 'Endereço 2',
      ponto: 'Ponto 2'
    },
    {
      cat: 'Endereço 2',
      ponto: 'Ponto 3'
    },
    {
      cat: 'Endereço 2',
      ponto: 'Ponto 4'
    }
  ]

  const style = {
    searchBox: {
            border: "none",
            "font-size": "10px",
            "min-height": "30px",
            width: "100%"
        },
    chips: { 
        color: "white",
        background: colors.blueAccent[500],
        backgronudColor: "red",
    },
    multiselectContainer: { 
        width: "100%"
    },
  }

    return (

        <div style={{color:"black", margin:"0px 0px 0px 10px "}}>
            <Multiselect 
            displayValue="key"
            groupBy="cat"
            selectionLimit={3}
            placeholder={"Pontos"}
            avoidHighlightFirstOption={true}
            hidePlaceholder={true}
            showCheckbox
            style={style}
            options={  [
                {
                cat: 'Endereço 1',
                key: 'Ponto 1'
                },
                {
                cat: 'Endereço 1',
                key: 'Ponto 2'
                },
                {
                cat: 'Endereço 1',
                key: 'Ponto 3'
                },
                {
                cat: 'Endereço 2',
                key: 'Ponto 4'
                },
                {
                cat: 'Endereço 2',
                key: 'Ponto 5'
                },
                {
                cat: 'Endereço 2',
                key: 'Ponto 6'
                },
                {
                cat: 'Endereço 2',
                key: 'Ponto 7'
                }
            ] }
            />
        </div>




    )};

export default SelectPonto;



