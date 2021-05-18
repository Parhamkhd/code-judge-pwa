


function Card(props){
    return(
        <>
        <div className="card-container">
            <div className="card-image text-center">
                <img src={props.imageSrc} alt="" />
            </div>

            <div className="card-text text-center">
                {props.text}
            </div>
        </div>
        </>
    )
}

export default Card;