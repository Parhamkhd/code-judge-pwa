
import {useState} from 'react'
function Button(props){

    const [hovered, setHovered] = useState(false);

    function hoverHandler(){
        if(hovered){
            setHovered(false)
        }else{
            setHovered(true)
        }
    }
    return (
        // + " " + (hovered&& "hovered")} href={props.url} onMouseEnter={()=>hoverHandler()} onMouseLeave={()=>hoverHandler()}
        <>
                <a className={"cbtn" + " " + (props.isPrimary ? "primary-btn" : (props.variant ? "variant" : "secondary-btn"))} href={props.url}>
                    {props.isPrimary && <div className="primary-btn-hover"></div>}
                    {props.variant && <div className="primary-btn-hover-variant"></div>}

                    {props.text}
                </a>
        </>
    )
}

export default Button;