import React from "react"
import "./style.css"

function Score(props) {
    return (
        <div className="score-wrapper btn-group text-center" role="group">
            <button type="button" className={"btn " + (props.score === 12 ? 'btn-success' : 'btn-score')}>
                Score <span className="badge badge-light">{props.score}</span>
            </button>
            <button type="button" className={"btn " + (props.topScore === 12 ? 'btn-success' : 'btn-topScore')}>
                Top Score <span className="badge badge-light">{props.topScore}</span>
            </button>
        </div>
    )
}

export default Score