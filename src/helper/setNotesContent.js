import { MONTHS } from "../constants";
const defaultNote={header:"untitled",content:null};
export const setNotesContent=(notes)=>{
    let date=new Date();
    let currentDate=date.getDate();
    let currentYear=date.getFullYear();
    let currentMonth=MONTHS[date.getMonth()];
    return {...defaultNote,notes,footer:`${currentDate} ${currentMonth}`};
}