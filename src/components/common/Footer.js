import {useContext} from 'react'

import NewsLetter from '../common/NewsLetter'
import {UiContext} from '../../contexts/UiContext'

import footerLogo from '../../assets/images/footer-logo.svg'

import samandehi from '../../assets/images/samandehi-logo.svg'
import isfahan1 from '../../assets/images/isfahan1.svg'
import iran1 from '../../assets/images/iran1.svg'
import addressImage from '../../assets/images/address-icon.svg'
import supportImage from '../../assets/images/support-icon.svg'
import githubImage from '../../assets/images/github.svg'
import whatsappImage from '../../assets/images/whatsapp.svg'
import twitterImage from '../../assets/images/twitter.svg'
import instagramImage from '../../assets/images/instagram.svg'
import linkedinImage from '../../assets/images/linkedin.svg'


function Footer(props){
    const {isMobile} = useContext(UiContext)
    return (
        <>  
        {isMobile?
            <>
               <div className="footer-wrapper">
                <div className="footer-newsletter-wrapper">
                    <NewsLetter/>
                </div>
                <div className="container ">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="footer-container">
                            <div className="pink-circle footer">

                            </div>
                        <div className="purple-circle footer">

                        </div>
                        <div className="orange-circle footer">

                        </div>
                              <div className="footer-item">
                                    <div className="d-flex">
                            <div className="">
                                <div className="footer-logo">
                                    <img src={footerLogo} alt="" />
                                </div>
                                <div className="footer-logo-description">
            اولین و تنها سامانه تمرین و آزمون آنلاین در ایران
                                </div>

                                <div className="footer-aboutus">
کدجاج یک ارزیاب هوشمند و داینامیک
پلتفرمی تخصصی برای مدیریت هوشمندانه‌ی
.کلاس‌های مجازی برنامه‌نویسی است
                                </div>
                                <div className="footer-links">
                                        <div className="footer-links-navigation">
                                            <div className="footer-links-title">
                                                کد جاج
                                            </div>
                                                <ul>
                                                    <li className="footer-link">
                                                <a href="">داستان ما</a>

                                                    </li>
                                                    <li className="footer-link">
                                                <a href="">ارتباط با ما</a>

                                                    </li>
                                                    <li className="footer-link">
                                                <a href="">راهنمای راهبردی</a>

                                                    </li>
                                                    <li className="footer-link">
                                                <a href="">وبلاگ</a>

                                                    </li>
                                                </ul>



                                        </div>

                                        <div className="footer-links-useful-links">
                                            <div className="footer-links-title">
                                                لینک های مفید
                                            </div>
                                                                                     <ul>
                                                    <li className="footer-link">
                                                <a href="">شرکت میزان گستر علم و دانش</a>

                                                    </li>
                                                    <li className="footer-link">
                                                <a href="">شرکت علمی و تحقیقاتی اصفهان</a>

                                                    </li>
                                                    <li className="footer-link">
                                                <a href="">دانشگاه صنعتی اصفهان</a>

                                                    </li>
                                         
                                                </ul>
                                        </div>
                            </div>

                       

                        </div>
                            <div className="">
                                <div className="footer-honors">
                                        <div className="footer-honor">
                                            <a href="">
                                            <img src={samandehi} alt="" />
                                            </a>
                                        </div>

                                         <div className="footer-honor">
                                            <a href="">

                                            <img src={isfahan1} alt="" />
                                            </a>
                                            
                                        </div>

                                         <div className="footer-honor">
                                            <a href="">

                                            <img src={iran1} alt="" />
                                            </a>
                                            
                                        </div>
                                </div>
                            </div>
                    </div>
                </div>
 <div className="footer-item bottom">
                        <div className="d-flex">
                                <div className="footer-address flex-even">
                                    <div className="footer-title">
                                        <div className="footer-address-icon">
                                            <img className="address-icon-img"src={addressImage} alt="" />
                                        </div>
                                        <div className="footer-title-text">
دفتر مرکزی :

                                        </div>
                                    </div>
                                    <div className="footer-address-text">
اصفهان -شهرک علمی و تحقیقاتی اصفهان - ساختمان ابوریحان - واحد 135
                                    </div>
                                </div>

                              <div className="flex-even">
                                <div className="footer-support">
                                    <div className="footer-title">
                                        <div className="footer-support-icon">
                                            <img src={supportImage} alt="" />
                                        </div>
                                        <div className="footer-title-text">
پشتیبانی ۷ روز هفته
                                        </div>
                                    </div>
                                    <div className="footer-support-text">
                                       <a href="">۰۳۱۳۳۳۹۳۲۲۴۰</a> 
                                       <a href="">۰۹۱۳۰۳۹۴۵۲۷</a> 

                                    </div>
                                </div>
                            </div>



                    </div>
                            <div className="col-xl-4">
                                <div className="footer-socials">
                                     <div className="footer-title">
                                        <div className="footer-title-text">
ما را در شبکه‌های اجتماعی دنبال کنید
                                        </div>
                                        </div>
                                        <div className="footer-social-icons">
                                            <ul className="socials-list">
                                                <li>
                                                    <a href="">
                                                        <img src={githubImage} alt="" />
                                                    </a>
                                                </li>
                                                <li>
                                                         <a href="">
                                                        <img src={whatsappImage} alt="" />
                                                    </a>
                                                </li>
                                                <li>
                                                         <a href="">
                                                        <img src={linkedinImage} alt="" />
                                                    </a>
                                                </li>
                                                <li>
                                                         <a href="">
                                                        <img src={twitterImage} alt="" />
                                                    </a>
                                                </li>
                                                <li>
                                                         <a href="">
                                                        <img src={instagramImage} alt="" />
                                                    </a>
                                                </li>
                                            </ul>
                                    </div>
                                </div>
                            </div>
                  <div className="made-by">
                  کلیه حقوق این سایت متعلق به CodeJudge می‌باشد. پرهام خردمند
                </div>
                </div>
              
                        </div>
                    </div>
                </div>

                </div>
            </div>
            </>
            :
            <div className="footer-wrapper">
                <div className="footer-newsletter-wrapper">
                    <NewsLetter/>
                </div>
                <div className="container ">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="footer-container">
                            <div className="pink-circle footer">

                            </div>
                        <div className="purple-circle footer">

                        </div>
                        <div className="orange-circle footer">

                        </div>
                              <div className="footer-item">
                    <div className="container">
                                    <div className="row">
                            <div className="col-xl-4">
                                <div className="footer-logo">
                                    <img src={footerLogo} alt="" />
                                </div>
                                <div className="footer-logo-description">
            اولین و تنها سامانه تمرین و آزمون آنلاین در ایران
                                </div>

                                <div className="footer-aboutus">
کدجاج یک ارزیاب هوشمند و داینامیک
پلتفرمی تخصصی برای مدیریت هوشمندانه‌ی
.کلاس‌های مجازی برنامه‌نویسی است
                                </div>
                            </div>

                            <div className="col-xl-4">
                                <div className="footer-links">
                                        <div className="footer-links-navigation">
                                            <div className="footer-links-title">
                                                کد جاج
                                            </div>
                                                <ul>
                                                    <li className="footer-link">
                                                <a href="">داستان ما</a>

                                                    </li>
                                                    <li className="footer-link">
                                                <a href="">ارتباط با ما</a>

                                                    </li>
                                                    <li className="footer-link">
                                                <a href="">راهنمای راهبردی</a>

                                                    </li>
                                                    <li className="footer-link">
                                                <a href="">وبلاگ</a>

                                                    </li>
                                                </ul>



                                        </div>

                                        <div className="footer-links-useful-links">
                                            <div className="footer-links-title">
                                                لینک های مفید
                                            </div>
                                                                                     <ul>
                                                    <li className="footer-link">
                                                <a href="">شرکت میزان گستر علم و دانش</a>

                                                    </li>
                                                    <li className="footer-link">
                                                <a href="">شرکت علمی و تحقیقاتی اصفهان</a>

                                                    </li>
                                                    <li className="footer-link">
                                                <a href="">دانشگاه صنعتی اصفهان</a>

                                                    </li>
                                         
                                                </ul>
                                        </div>
                                </div>
                            </div>

                            <div className="col-xl-4">
                                <div className="footer-honors">
                                        <div className="footer-honor">
                                            <a href="">
                                            <img src={samandehi} alt="" />
                                            </a>
                                        </div>

                                         <div className="footer-honor">
                                            <a href="">

                                            <img src={isfahan1} alt="" />
                                            </a>
                                            
                                        </div>

                                         <div className="footer-honor">
                                            <a href="">

                                            <img src={iran1} alt="" />
                                            </a>
                                            
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
 <div className="footer-item bottom">
                    <div className="container ">
                        <div className="row">
                            <div className="col-xl-4">
                                <div className="footer-address">
                                    <div className="footer-title">
                                        <div className="footer-address-icon">
                                            <img src={addressImage} alt="" />
                                        </div>
                                        <div className="footer-title-text">
دفتر مرکزی :

                                        </div>
                                    </div>
                                    <div className="footer-address-text">
اصفهان -شهرک علمی و تحقیقاتی اصفهان - ساختمان ابوریحان - واحد 135
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4">
                                <div className="footer-support">
                                    <div className="footer-title">
                                        <div className="footer-support-icon">
                                            <img src={supportImage} alt="" />
                                        </div>
                                        <div className="footer-title-text">
پشتیبانی ۷ روز هفته
                                        </div>
                                    </div>
                                    <div className="footer-support-text">
                                       <a href="">۰۳۱۳۳۳۹۳۲۲۴۰</a> 
                                       <a href="">۰۹۱۳۰۳۹۴۵۲۷</a> 

                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4">
                                <div className="footer-socials">
                                     <div className="footer-title">
                                        <div className="footer-title-text">
ما را در شبکه‌های اجتماعی دنبال کنید
                                        </div>
                                        </div>
                                        <div className="footer-social-icons">
                                            <ul className="socials-list">
                                                <li>
                                                    <a href="">
                                                        <img src={githubImage} alt="" />
                                                    </a>
                                                </li>
                                                <li>
                                                         <a href="">
                                                        <img src={whatsappImage} alt="" />
                                                    </a>
                                                </li>
                                                <li>
                                                         <a href="">
                                                        <img src={linkedinImage} alt="" />
                                                    </a>
                                                </li>
                                                <li>
                                                         <a href="">
                                                        <img src={twitterImage} alt="" />
                                                    </a>
                                                </li>
                                                <li>
                                                         <a href="">
                                                        <img src={instagramImage} alt="" />
                                                    </a>
                                                </li>
                                            </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="made-by">
                  کلیه حقوق این سایت متعلق به CodeJudge می‌باشد. پرهام خردمند
                </div>
                        </div>
                    </div>
                </div>
               

                </div>
            </div>
}
        </>
    )
}

export default Footer;