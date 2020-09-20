import { MONTHS } from "../constants";
export const setNotesContent=(header="untitled",content=null)=>{
    let date=new Date();
    let currentDate=date.getDate();
    let currentYear=date.getFullYear();
    let currentMonth=MONTHS[date.getMonth()];
    return {header:header,content:content,footer:`${currentDate} ${currentMonth}`};
}