import {useContext} from 'react'

import LandingPageTitle from '../common/landingPageTitle'
import StepCard from '../common/StepCard'
import whyUsData from '../../mock-data/whyUsData.json'
import {UiContext} from '../../contexts/UiContext'

import customer from '../../assets/images/customer.svg'

function WhyUs(props){
  const {isMobile} = useContext(UiContext)

    return (
        <>

         {isMobile?
            <>
             <div className="landing-page-container" id="why-us">
            <LandingPageTitle text={["چرا ما را انتخاب می‌کنند؟"]} importantIndex={2}/>

            <div className="container why-us-container-responsive">
                <div className="row">
                           <div className="col-12">
                        <div className="why-us-image-wrapper">
                            <img src={customer} alt="" />

                        </div>
                    </div>
                    <div className="col-12 why-us-responsive-container">
                        {whyUsData.rightSide.map(function(item,index){
                            if(index ===0){
                            return (
                                    <div className="why-us-item first right">
                                       <span className="why-us-item-text">{item.text}</span>
                                        <div className="why-us-item-square" style={{background:item.color,boxShadow:`0px 2px 4px ${item.color}`}}></div>
                                    </div>
                                    )
                            }else{
                                  return (
                                    <div className="why-us-item right">
                                       <span className="why-us-item-text">{item.text}</span>
                                        <div className="why-us-item-square" style={{background:item.color,boxShadow:`0px 2px 4px ${item.color}`}}></div>
                                    </div>
                                    )
                            }
                              
                        })}
                    </div>
             
                    <div className="col-12">
                       {whyUsData.leftSide.map(function(item,index){
                                if(index ===0){
                            return (
                                    <div className="why-us-item first right">
                                       <span className="why-us-item-text">{item.text}</span>
                                        <div className="why-us-item-square" style={{background:item.color,boxShadow:`0px 2px 4px ${item.color}`}}></div>
                                    </div>
                                    )
                            }else{
                                  return (
                                    <div className="why-us-item right">
                                       <span className="why-us-item-text">{item.text}</span>
                                        <div className="why-us-item-square" style={{background:item.color,boxShadow:`0px 2px 4px ${item.color}`}}></div>
                                    </div>
                                    )
                            }
                              
                        })}
                    </div>

                </div>
            </div>
        </div>
            </>
         :

        <div className="landing-page-container" id="why-us">
            <LandingPageTitle text={["چرا ما را انتخاب می‌کنند؟"]} importantIndex={2}/>

            <div className="container">
                <div className="row">
                    <div className="col-xl-4">
                        {whyUsData.rightSide.map(function(item,index){
                            if(index ===0){
                            return (
                                    <div className="why-us-item first right">
                                        <div className="why-us-item-square" style={{background:item.color,boxShadow:`0px 2px 4px ${item.color}`}}></div>
                                       <span className="why-us-item-text">{item.text}</span>
                                    </div>
                                    )
                            }else{
                                  return (
                                    <div className="why-us-item right">
                                        <div className="why-us-item-square" style={{background:item.color,boxShadow:`0px 2px 4px ${item.color}`}}></div>
                                       <span className="why-us-item-text">{item.text}</span>
                                    </div>
                                    )
                            }
                              
                        })}
                    </div>
                    <div className="col-xl-4">
                        <div className="why-us-image-wrapper">
                            <img src={customer} alt="" />

                        </div>
                    </div>
                    <div className="col-xl-4">
                       {whyUsData.leftSide.map(function(item,index){
                            if(index ===0){
                            return (
                                    <div className="why-us-item first left">
                                        <div className="why-us-item-square" style={{background:item.color,boxShadow:`0px 2px 4px ${item.color}`}}></div>
                                       <span className="why-us-item-text">{item.text}</span>
                                    </div>
                                    )
                            }else{
                                  return (
                                    <div className="why-us-item left">
                                        <div className="why-us-item-square" style={{background:item.color,boxShadow:`0px 2px 4px ${item.color}`}}></div>
                                       <span className="why-us-item-text">{item.text}</span>
                                    </div>
                                    )
                            }
                              
                        })}
                    </div>

                </div>
            </div>
        </div>

}
        </>
    )
}


export default WhyUs;