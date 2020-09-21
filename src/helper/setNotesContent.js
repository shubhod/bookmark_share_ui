import { MONTHS } from "../constants";
export const setNotesContent=(notes)=>{
    let {header,content}=notes;
    let date=new Date();
    let currentDate=date.getDate();
    let currentYear=date.getFullYear();
    let currentMonth=MONTHS[date.getMonth()];
    return {header,content,footer:`${currentDate} ${currentMonth}`};
}