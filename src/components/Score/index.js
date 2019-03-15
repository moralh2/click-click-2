import React from "react"
import "./style.css"

function Score(props) {
    return (
        <div className="alert-wrapper">
            <div className="alert alert-warning text-center" role="alert">
                CURRENT SCORE: {props.score}
            </div>
            <div className="alert alert-warning text-center" role="alert">
                TOP SCORE: {props.topScore}
            </div>
        </div>
    )
}

export default Score