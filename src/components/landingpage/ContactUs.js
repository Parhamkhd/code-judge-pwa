
import LandingPageTitle from '../common/landingPageTitle'
import StepCard from '../common/StepCard'
import Button from '../common/Button'

import cloudLeft from '../../assets/images/contactus-cloud-left.svg'
import cloudRight from '../../assets/images/right-cloud.svg'


function ContactUs(props){

    return (
        <>


        <div className="landing-page-container" id="why-us">
            <div className="container contact-us-wrapper">
                <div className="row justify-content-center">
                    <div className="col-12 ">
                        <div className="contact-us-content">

                             <div className="our-customers-cloud contactus left">
                    <img className="contact-us-cloud-img" src={cloudLeft} alt="" />
                </div>

                <div className="our-customers-cloud contactus right">
                    <img className="contact-us-cloud-img" src={cloudRight} alt="" />
                </div>
                        <div className="contact-us-title">
                            <h4>سرویس گیرنده ما باشید</h4>
                        </div>

                            <span className="contact-us-text">
                               
                               اگر شما ارائه‌دهنده سامانه‌های مدیریت دروس هستید یا قبلا سامانه‌های مشابه را تهیه کرده‌اید
                                <br/>
می‌توانید جهت مشاوره‌ی افزودن این امکان به سامانه خود و یکپارچه‌سازی آن با ما در تماس باشید
</span> 
<div className="contact-us-btn-wrapper">
<Button text="تماس بگیرید" variant={true}/>

</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        </>
    )
}


export default ContactUs;