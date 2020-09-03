import React,{useState,useEffect} from 'react'
import './ScssTextArea.scss';
import $ from "jquery";
function ViewTextArea(props) 
{   const [html, setHtml] = useState(null);
    useEffect(()=>{
        var editable=document.getElementById("textArea");
        editable.addEventListener('input',(e)=>{
            console.log("object");
        })
        
    })
    return (
        <div 
         contentEditable 
         className="card"
         id="textArea"
         >   
        </div>
    )
}
export default ViewTextArea