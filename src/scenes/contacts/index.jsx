import { Box } from "@mui/material";
import { DataGrid, GridToolbar} from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/MockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

const Tabela = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [data, setData] = useState();

      useEffect(() => {
        axios.get(
          "https://sheet.best/api/sheets/edf54132-8e64-4312-a5de-236a3368aafb"
        ).then((dados) => {
            console.log(dados.data);
            setData(dados.data);
        })
      }, []);

    const columns = [ 
        {field: "id", headerName: "ID", flex: 0.5},
        {field: "registrarId", headerName: "Registrar ID" }, 
        {field: "name", headerName:"Name" , flex:1, cellClassName: "name-column-cell"},
        {field: "age", headerName:"Age" , type:"number", headerAlign: "left", align: "left"},
        {field: "phone", headerName:"Phone Number" , flex:1},
        {field: "email", headerName:"Email" , flex:1},
        {field: "address", headerName:"Address" , flex:1},
        {field: "city", headerName:"City" , flex:1},
        {field: "zipCode", headerName:"ZipCode" , flex:1},
    ];

    return (
        <Box m="20px">
            <Header title="LEITURAS" subtitle="Tabela com a leituras de todos os pontos selecionados" />
            <Box
            m="40px 0 0 0"
            height="75vh" sx={{
                "& .MuiDataGrid-root": {
                    border: "none"
                },
                "& .MuiDataGrid-columnHeader" : {
                    backgroundColor: colors.blueAccent[700]
                  },
                "& .MuiDataGrid-cell":{
                    borderBottom: "none !important"
                },
                "& .name-column-cell":{
                    color: colors.greenAccent[300]
                },
                 "& .MuiDataGrid-columnsHeader": {
                    backgroundColor: colors.blueAccent[700],
                    borderBottom: "none"
                 },
                  "& .MuiDataGrid-virtualScroller" : {
                    backgroundColor: colors.primary[400]
                  },
                   "& .MuiDataGrid-footerContainer": {
                    borderTop: "none",
                    backgroundColor: colors.blueAccent[700],
                   },
                   "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                    color: `${colors.grey[100]} !important`
                }      
            }}
            >
                <DataGrid 
                rows={mockDataContacts} 
                columns={columns} 
                components={{ Toolbar: GridToolbar }}
                />
            </Box>
        </Box>
    )
};

export default Tabela;
