import Button from '../common/Button'
import heroImage from '../../assets/images/hero-image.svg'

function Hero(props){
    
    return(
        <>
     
        <div className="container hero-container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="hero-box">
                        <div className="pink-circle">

                        </div>
                        <div className="purple-circle">

                        </div>
                        <div className="orange-circle">

                        </div>
                        <div className="hero-content flex-even">
                       
                        
                        <div className="hero-text flex-even">
                            <div className="hero-text-content">
                                <h1 className="hero-heading">کد جاج</h1>
                                <h3 className="hero-sub-text"> یک ارزیاب هوشمند و داینامیک ، پلتفرمی تخصصی برای
                                .مدیریت هوشمندانه‌ی کلاس‌های مجازی برنامه نویسی است
                                </h3>
                                <div className="hero-main-btn-wrapper">
                                    <Button text="همین حالا شروع کن!" variant={true}/>
                                </div>
                            </div>

                        </div>

                         <div className="hero-image-wrapper">
                            <img src={heroImage} alt=""/>
                        </div>

                        </div>
                        </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default Hero;