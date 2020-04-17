import Link from "next/link";

const AboutUS =()=>(
    <section className="about-area ptb-100 bg-f8f8f8">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
                <div className="about-title">
                    <span style={{color:"#333"}}>About Us</span>
                    <h2 style={{color:"#333"}}>We are An Award winning company</h2>
                </div>
            </div>

            <div className="col-lg-6 col-md-12">
                <div className="about-text">
                    <p>
                    ZISC General is a leader in the provision of world class risk management solutions, exemplifying service excellence, professionalism and integrity. We have consistenly beeen ranked amoung the topmost preferred insurance companies in Zambia. Contact us or visit any of our branches country wide.
                    </p>

                    <Link href="/about-us"><a className="read-more-btn">More About Us <i className="flaticon-right-chevron"></i></a></Link>
                </div>
            </div>
        </div>

        <div className="about-boxes-area" >
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-about-box">
                        <div className="icon">
                            <i className="flaticon-care"></i>
                        </div>

                        <h3>Trustworthy company</h3>
                        <p>Over 50 years in Business</p>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-about-box">
                        <div className="icon">
                            <i className="flaticon-policy"></i>
                        </div>

                        <h3>100% money back guarantee</h3>
                        <p></p>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3 offset-sm-3 col-sm-6">
                    <div className="single-about-box">
                        <div className="icon">
                            <i className="flaticon-like"></i>
                        </div>

                        <h3>Flexible Payment Plans</h3>
                        <p>Flexible Payment Plans</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
)


export default AboutUS