import React,{useContext} from 'react'

import LandingPageTitle from '../common/landingPageTitle'
import Card from '../common/Card'
import Button from '../common/Button'
import {UiContext} from '../../contexts/UiContext'

import card3Image from '../../assets/images/card3.svg'
import card2Image from '../../assets/images/card2.svg'
import card1Image from '../../assets/images/card1.svg'


function OurJob(props){
  const {isMobile} = useContext(UiContext)

    return (
        <>
         {isMobile?
            <>
            <div className="container ourjob-container landing-page-container" id="our-job">
                <LandingPageTitle text={["امکانات","جامع", "ما"]} importantIndex={1}/>

                
            <div className="row ourjob-cards justify-content-center">
               <div className="col-6">
                <Card text="مدیریت هوشمند و تخصصی کلاس‌های مجازی برنامه نویسی" imageSrc={card3Image}/>

                </div>
               <div className="col-6">
                <Card text="ایجاد و تصحیح تکالیف و آزمون‌های تشریحی برنامه نویسی" imageSrc={card2Image}/>

                </div>

               <div className="col-6">
                <Card text="ارایه سرویس ارزیابی هوشمندانه سورس کدهای برنامه نویسی" imageSrc={card1Image}/>
                </div>
            </div>
             
            <div className="ourjob-btns-wrapper">
                <Button isPrimary={true} text="بیشتر" url="#"/>
                <Button isPrimary={false} text="دانلود کاتالوگ" url="#"/>
            </div>
            </div>
            </>
         :
        <div className="container ourjob-container landing-page-container" id="our-job">
            <LandingPageTitle text={["امکانات","جامع", "ما"]} importantIndex={1}/>

            <div className="ourjob-text">
                <span>شما بی‌نیاز می‌شوید...</span>
            </div>

            <div className="row ourjob-cards justify-content-center">
               <div className="col-xl-3">
                <Card text="مدیریت هوشمند و تخصصی کلاس‌های مجازی برنامه نویسی" imageSrc={card3Image}/>

                </div>
               <div className="col-xl-3">
                <Card text="ایجاد و تصحیح تکالیف و آزمون‌های تشریحی برنامه نویسی" imageSrc={card2Image}/>

                </div>

               <div className="col-xl-3">
                <Card text="ارایه سرویس ارزیابی هوشمندانه سورس کدهای برنامه نویسی" imageSrc={card1Image}/>
                </div>
            </div>
 
            <div className="ourjob-btns-wrapper">
                <Button isPrimary={true} text="بیشتر" url="#"/>
                <Button isPrimary={false} text="دانلود کاتالوگ" url="#"/>
            </div>




        </div>
         }
        </>
    )    
}

export default OurJob;