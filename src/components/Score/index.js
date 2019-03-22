import React from "react"
import "./style.css"
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

const popover = (
    <Popover id="popover-basic" title="Las Intrucciones">
        The instructions are simple: You have to click each of the images once; once you've clicked all 12, you've won 
        <span role="img" aria-label="emoji"> 💪</span> That said, if you click the same image twice, you have to start all over! 
        Oh, and the images will shuffle after every click 
        <span role="img" aria-label="emoji"> 😈</span> Best of luck! <span role="img" aria-label="emoji"> 😘</span>
    </Popover>
)
const Instrucciones = () => (
    <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
        <button type="button" className='btn btn-title align-middle'>
            (<i class="fas fa-mouse-pointer"></i>
            <i class="fas fa-mouse-pointer"></i>
            <i class="fas fa-times fa-fw"></i>12
            <i class="fas fa-images fa-fw"></i>
            <i class="fas fa-arrows-alt-h fa-fw"></i>
            (<i class="fas fa-image fa-fw"></i>
            <i class="fas fa-times fa-fw"></i>1))
            <i class="fas fa-equals fa-fw"></i>
            <i class="fas fa-trophy fa-fw"></i>
        </button>
    </OverlayTrigger>
)

function Score(props) {
    return (
        <div className="score-wrapper btn-group text-center" role="group">
            <button type="button" className={"btn " + (props.score === 12 ? 'btn-success' : 'btn-score')}>
                Score <span className="badge badge-light">{props.score}</span>
            </button>
            <Instrucciones />
            <button type="button" className={"btn " + (props.topScore === 12 ? 'btn-success' : 'btn-topScore')}>
                Top Score <span className="badge badge-light">{props.topScore}</span>
            </button>
        </div>
    )
}

export default Score