import { green, red } from '@mui/material/colors';
import { color } from '@mui/system';
import Multiselect from 'multiselect-react-dropdown';
import { useState } from 'react';

const SelectComp = () => {

  const [options, setOptions] = useState([
                                    'Endereço 1',
                                    'Endereço 2',
                                    'Endereço 3',
                                    'Endereço 4',
                                    'Endereço 5'
                                ])
    const style = {
    searchBox: {
            border:"none",
            "font-size": "10px",
            "min-height": "30px",
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


