import Button from '../common/Button'

function NewsLetter(){

    return(
        <>
            <div className="newsletter-container">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-4 col-11">
                            <div className="newsletter-content">
                                <div className="newsletter-title">
                                    <span>برای دریافت پیشنهادات ویژه ایمیل خود را وارد کنید.</span>
                                </div>
                                <label htmlFor="
                                " className="newsletter-label">
                                <input type="email" className="newsletter-input"/>
                                <div className="newsletter-btn-wrapper">
                                        <button className="primary-submit">
                                            <div className="primary-submit-hover"></div>
                                            ارسال
                                            </button>
                                </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default NewsLetter;