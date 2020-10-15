import React from 'react'
import "./NotFoundStyles.scss";
const NotFound=(props) => {
    return (
        <div className="not-found">
            {props.message}
        </div>
    )
}

export default NotFound;
