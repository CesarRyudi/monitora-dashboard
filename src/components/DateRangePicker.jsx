import { useEffect, useRef, useState } from "react";
import { DateRange } from "react-date-range";
import format from "date-fns/format";
import { addDays } from "date-fns";
import { tokens } from '../theme';
import { Icon, useTheme } from '@mui/material'; 
import  InputBase  from "@mui/material/InputBase";
import * as locales from 'react-date-range/dist/locale';
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { ref } from "yup";


const DateRangePickerComp = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [range, setRange] = useState([
        {
            startDate: addDays(new Date(), -7),
            endDate: new Date(),
            color: colors.blueAccent[500],
            locale: 'Portuguese',
            key: 'selection',
        
        }
    ])

    const [open, setOpen] = useState(false)

    const modalRef = useRef();
  const calendarRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        calendarRef.current &&
        !calendarRef.current.contains(event.target)

      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef, calendarRef]);


    const customStyles = {
    content: {    
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


  return (
    <div>

        <InputBase
        sx={{ ml:.5, mt:0, flex:1, input: { cursor: 'pointer' }}}
        placeholder="Data"
        value={ ` ${format(range[0].startDate, "dd/MM/yyyy")} a ${format(range[0].endDate, "dd/MM/yyyy")} ` }
        readOnly
        onClick={ () => setOpen(open => !open)}
        
        />
        
        {open && (
          <div className="modal" ref={modalRef}> 
        <Modal
        isOpen={open}
        style={customStyles}
        contentLabel="Example Modal"
        >
          <div className="calendar" ref={calendarRef}>
        <DateRange
          onChange = { item => setRange([item.selection]) }
          editableDateInputs={true}
          moveRangeOnFirstSelection={false}
          ranges={range}
          months={2}
          direction="horizontal"
          preventSnapRefocus={true}
          color = {colors.redAccent[700]}
          calendarFocus="backwards"
          className="calendarElement"
          locale = {locales.pt}
          icon={<CalendarTodayOutlinedIcon />}
          style = {{
            fromDot: {backgroundColor: 'rgb(100, 0, 34)'},
            toDot: {backgroundColor: 'rgb(0, 135, 255)'},
            fromDate: {color: 'rgb(0, 255, 100)', backgroundColor: 'rgb(255, 100, 100)'},
            toDate: {backgroundColor: 'rgb(40, 90, 75)'},
            betweenDates: {color: 'rgb(200, 0, 34)', backgroundColor: 'rgb(200, 150, 100)'},
            hoverCell: {color: 'rgb(200, 0, 34)'},
            customRangeButtons: {backgroundColor: 'rgb(40, 90, 75)'},
            customRangeSelected: {backgroundColor: 'rgb(100, 90, 200)'},
            standaloneLayout:{display:'flex', maxWidth:'fit-content'}
            
        }}
        />
        </div>
        </Modal>
        </div>
        )
        }

    </div>
  )
}

export default DateRangePickerComp;