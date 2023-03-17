import { useEffect, useRef, useState } from "react";
import { DateRange } from "react-date-range";
import format from "date-fns/format";
import { addDays } from "date-fns";
import { tokens } from '../theme';
import { Icon, useTheme } from '@mui/material'; 
import  InputBase  from "@mui/material/InputBase";
import * as locales from 'react-date-range/dist/locale';
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file




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

    const refOne = useRef(null)


    useEffect(() => {
        document.addEventListener("keydown", hideOnEscape, true)
        document.addEventListener("click", hideOnClickOutside, true)

    }, [])

    const hideOnEscape = (e) => {
        if(e.key === "Escape") setOpen(false)
    }

    const hideOnClickOutside = (e) => {

        if( refOne.current && !refOne.current.contains(e.target) ) setOpen(false)
    }


  return (
    <div className="calendarWrap">

        <InputBase
        sx={{ ml:.5, mt:0, flex:1, input: { cursor: 'pointer' }}}
        placeholder="Data"
        value={ ` ${format(range[0].startDate, "dd/MM/yyyy")} a ${format(range[0].endDate, "dd/MM/yyyy")} ` }
        readOnly
        onClick={ () => setOpen(open => !open)}
        />
        
        <div>
        {open &&
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
        }
        </div>

    </div>
  )
}

export default DateRangePickerComp;