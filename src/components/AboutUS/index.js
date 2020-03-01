import Link from "next/link";

const AboutUS =()=>(
    <section class="about-area ptb-100 bg-f8f8f8">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6 col-md-12">
                <div class="about-title">
                    <span>About Us</span>
                    <h2>We are Award winning company</h2>
                </div>
            </div>

            <div class="col-lg-6 col-md-12">
                <div class="about-text">
                    <p>
                    ZISC General is a leader in the provision of world class risk management solutions, exemplifying service excellence, professionalism and integrity. We have consistenly beeen ranked amoung the topmost preferred insurance companies in Zambia. Contact us or visit any of our branches country wide.
                    </p>

                    <Link href="/about-us"><a class="read-more-btn">More About Us <i class="flaticon-right-chevron"></i></a></Link>
                </div>
            </div>
        </div>

        <div class="about-boxes-area">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-about-box">
                        <div class="icon">
                            <i class="flaticon-care"></i>
                        </div>

                        <h3>Trustworthy company</h3>
                        <p>Over 50 years in Business</p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-about-box">
                        <div class="icon">
                            <i class="flaticon-policy"></i>
                        </div>

                        <h3>100% money back guarantee</h3>
                        <p></p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 offset-lg-0 offset-md-3 offset-sm-3 col-sm-6">
                    <div class="single-about-box">
                        <div class="icon">
                            <i class="flaticon-like"></i>
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