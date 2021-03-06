import React from "react"
import "./style.css"

function Card(props) {
    return (
        <div className={"card " + props.name} onClick={() => props.handleClicky(props.id)}>
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
        </div>
    )
}

export default Card