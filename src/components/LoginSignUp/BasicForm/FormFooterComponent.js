import React from 'react';
import "./BasicFormStyles.scss";

const FormFooter=(props) =>{
    return (
        <div className={props.className?props.className:"form-footer"}>
            <div  className="form-footer__explanation">{props.footerExplanation}</div>
            <div className="form-footer__link">{props.footerLink}</div>
        </div>
    );
}

export default FormFooter
