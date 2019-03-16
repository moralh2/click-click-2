import React from "react"
import "./style.css"

function Score(props) {
    return (
        <div className="score-wrapper btn-group text-center" role="group">
            <button type="button" className={"btn " + (props.score === 12 ? 'btn-success' : 'btn-score')}>
                Score <span className="badge badge-light">{props.score}</span>
            </button>
            <button type="button" className='btn btn-title align-middle'>
                {/* <i class="fas fa-info-circle fa-2x"></i> */}
                {/* <i class="fas fa-arrow-circle-left fa-2x"></i>
                <i class="fas fa-arrow-circle-right fa-fw"></i> */}
                (<i class="fas fa-mouse-pointer"></i>
                <i class="fas fa-mouse-pointer"></i>
                <i class="fas fa-times fa-fw"></i>12
                <i class="fas fa-images fa-fw"></i>
                <i class="fas fa-arrows-alt-h fa-fw"></i>
                (
                    <i class="fas fa-image fa-fw"></i>
                    <i class="fas fa-times fa-fw"></i>1
                ))
                <i class="fas fa-equals fa-fw"></i>
                <i class="fas fa-trophy fa-fw"></i>
            </button>
            <button type="button" className={"btn " + (props.topScore === 12 ? 'btn-success' : 'btn-topScore')}>
                Top Score <span className="badge badge-light">{props.topScore}</span>
            </button>
        </div>
    )
}

export default Score