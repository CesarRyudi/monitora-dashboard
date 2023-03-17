import { useState } from 'react';
import Select from 'react-select';

const SelectComp = () => {

//   const [options, setOptions] = useState([
//                                     'Endereço 1',
//                                     'Endereço 2',
//                                     'Endereço 3',
//                                     'Endereço 4',
//                                     'Endereço 5'
//                                 ])

const options = [
  { value: 'Endereço 1', label: 'Endereço 1' },
  { value: 'Endereço 2', label: 'Endereço 2' },
  { value: 'Endereço 3', label: 'Endereço 3' },
  { value: 'Endereço 4', label: 'Endereço 4' },
  { value: 'Endereço 5', label: 'Endereço 5' },
  { value: 'Endereço 6', label: 'Endereço 6' }
]

    return (

        <div style={{color:"black"}}>
            <Select
            isMulti
            options={ options }
            selectionLimit={2}
            isClearable={true}
            placeholder={"Endereços"}
            showCheckbox
            />
        </div>




    )};

export default SelectComp;
