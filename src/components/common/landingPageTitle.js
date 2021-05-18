
function LandingPageTitle(props){
    return (
        <>
        <div className="title-wrapper">
            <div className="title-content">

            <div className="small-title-box right">

            </div>
              <div className="small-title-box left">

            </div>
         {props.text.map(function(i,index){
             if(index === props.importantIndex){
               return( <div className="primary-text title-part">
                    {i}
                </div>)
             }else{
                 return(
                 <div className="title-part">{i}</div>
                 )
             }
         })}
            </div>
        </div>

        </>
    )    
}

export default LandingPageTitle;