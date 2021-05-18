import {useContext} from 'react'

import LandingPageTitle from '../common/landingPageTitle'
import StepCard from '../common/StepCard'
import {UiContext} from '../../contexts/UiContext'

import stepArrow1 from '../../assets/images/step-arrow1.svg'
import stepArrow2 from '../../assets/images/step-arrow2.svg'
import timerImage from '../../assets/images/timer.svg'

function Roadmap(props){

  const {isMobile} = useContext(UiContext)

    return (
        <>

         {isMobile?
            <>
                        <div className="container landing-page-container">
            <LandingPageTitle text={["تنها با سه گام مدیریت کلاس خود را متحول کنید"]} importantIndex={2}/>
            <div className="roadmap-steps">

            <div className="row justify-content-center position-relative">
                <div className="col-6">
                    <StepCard text="کلاس آموزشی خود را ایجاد و فراگیران خود را به آن اضافه کنید." num="1" color="#FD829B"/>

                </div>

                <div className="step-arrow first">
                    <img className="step-arrow-img" src={stepArrow1} alt="" />
                </div>


                  <div className="col-6">
                     <StepCard text="کلاس آموزشی خود را ایجاد و فراگیران خود را به آن اضافه کنید." num="2" color="#845DFC"/>


                </div>

                    <div className="step-arrow second">
                        <img className="step-arrow-img" src={stepArrow1} alt="" />

                </div>

                  <div className="col-6">
                    <StepCard text="کلاس آموزشی خود را ایجاد و فراگیران خود را به آن اضافه کنید." num="3" color="#FC7E66"/>


                </div>
</div>
            </div>
            
            <div className="roadmap-hint">
                <div className="roadmap-hint-content">
                    <img src={timerImage} alt="" />
                    <span>بدون نیاز به آموزش اولیه در چند ثانیه</span>
                </div>
            </div>

            </div>
            </>
         :

        <div className="landing-page-container" id="roadmap">
            <LandingPageTitle text={["تنها با سه گام مدیریت کلاس خود را متحول کنید"]} importantIndex={2}/>

            <div className="roadmap-steps">


            <div className="container steps-container">

            <div className="row justify-content-center position-relative">
                <div className="col-xl-3">
                    <StepCard text="کلاس آموزشی خود را ایجاد و فراگیران خود را به آن اضافه کنید." num="1" color="#FD829B"/>

                </div>

                <div className="step-arrow first">
                    <img className="step-arrow-img" src={stepArrow1} alt="" />
                </div>

                <div className="col-xl-1"></div>

                  <div className="col-xl-3">
                     <StepCard text="کلاس آموزشی خود را ایجاد و فراگیران خود را به آن اضافه کنید." num="2" color="#845DFC"/>


                </div>

                    <div className="step-arrow second">
                        <img className="step-arrow-img" src={stepArrow2} alt="" />

                </div>
                <div className="col-xl-1"></div>

                  <div className="col-xl-3">
                    <StepCard text="کلاس آموزشی خود را ایجاد و فراگیران خود را به آن اضافه کنید." num="3" color="#FC7E66"/>


                </div>

            </div>

            </div>

            <div className="roadmap-hint">
                <div className="roadmap-hint-content">
                    <img src={timerImage} alt="" />
                    <span>بدون نیاز به آموزش اولیه در چند ثانیه</span>
                </div>
            </div>
            </div>

           

            
        </div>

}
        </>
    )
}


export default Roadmap;