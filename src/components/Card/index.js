import React from "react";
import "./style.css";

function Card(props) {
    return (

        <div className="card">

            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>

            <div className="content">
                <ul>
                    <li>
                        <strong>Name:</strong> {props.name}
                    </li>
                    <li>
                        <strong>Clicked:</strong> {props.clicked ? 'TRUE' : 'False'}
                    </li>
                </ul>
            </div>
            <span onClick={() => props.handleClicky(props.id)} className="add">Q</span>
        </div>

    )
}

export default Card;