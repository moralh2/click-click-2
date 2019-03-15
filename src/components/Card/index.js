import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div className="card col-sm-4">
            <img src={props.imageSrc} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <p className="card-text">Dexterino</p>
            </div>
        </div>
    ) 
}

export default Card;