import React from "react"
import "./style.css"

function Score(props) {
    return (
        <div className="score-wrapper text-center">
            <button type="button" className="mr-4 btn btn-warning">
                Score <span className="badge badge-light">{props.score}</span>
            </button>
            <button type="button" className={"ml-4 btn " + (props.score === 12 ? 'btn-success' : 'btn-primary')}>
                Top Score <span className="badge badge-light">{props.topScore}</span>
            </button>
        </div>
    )
}

export default Score