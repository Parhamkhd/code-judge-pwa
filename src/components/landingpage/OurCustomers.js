



import React,{useContext} from 'react'

import LandingPageTitle from '../common/landingPageTitle'
import {UiContext} from '../../contexts/UiContext'

import customer2 from '../../assets/images/customer2.svg'
import customer1 from '../../assets/images/customer1.svg'

import cloudLeft from '../../assets/images/left-cloud.svg'
import cloudRight from '../../assets/images/right-cloud.svg'


function OurCustomers(props){
    const isMobile = useContext(UiContext)
    return (
        <>
         
        <div className="landing-page-container" id="our-customers">
            <LandingPageTitle text={["چه", "کسانی", "اینجا", "هستند؟"]} importantIndex={2}/>

            <div className="our-customers-content-container">
                <div className="our-customers-cloud left">
                    <img src={cloudLeft} alt="" />
                </div>

                <div className="our-customers-cloud right">
                    <img src={cloudRight} alt="" />
                </div>

      
                <div className="container responsive-container">
                    <div className={isMobile? "d-flex": "row"}>
                        
  <div className="our-customers-stats flex-even">
                    <div className="our-customers-stat">

                        <div className="stat-number">
                            ٨+
                        </div>

                        <div className="stat-text">
                            مرکز آموزشی
                        </div>

                    </div>

                    <div className="our-customers-stat">
                        
                        <div className="stat-number">
                            ٥٠+
                        </div>

                        <div className="stat-text">
                           استاد
                        </div>
                    </div>

                    <div className="our-customers-stat">
                        
                        <div className="stat-number">
                            ١٠٠٠٠+
                        </div>

                        <div className="stat-text">
                            دانشجو
                        </div>
                    </div>
                </div>
            <div className="our-customers-customers-wrapper  flex-even">
                <div className="our-customers-customers-text">
                    <h3>سرویس گیرنده های ما</h3>
                </div>
                 <div className="our-customers-customers">

                    <div className="our-customers-customer">
                        <img className="our-customers-customer-img"src={customer2} alt="" />
                    </div>

                    <div className="our-customers-customer">
                        <img className="our-customers-customer-img" src={customer1} alt="" />
                    </div>
            </div>
                  
                </div>
                    </div>
                </div>
              

            </div>
        </div>
        </>
    )    
}

export default OurCustomers;