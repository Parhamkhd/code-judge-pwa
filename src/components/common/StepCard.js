


function StepCard(props){
    return(
        <>
        <div className="step-card-container">
            <div className="step-card-num text-center">
                <div className="step-card-num-content"  style={{backgroundColor:props.color,boxShadow:`0px 2px 16px ${props.color}`}}>
                {props.num}

                </div>
            </div>

            <div className="step-card-text text-center">
                {props.text}
            </div>
        </div>
        </>
    )
}

export default StepCard;