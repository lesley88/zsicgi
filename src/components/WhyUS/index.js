const WhyUs = () =>(
    <section className="why-choose-us-area" style={{marginBottom:"100px"}}>
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-5 col-md-12">
                <div className="why-choose-us-slides owl-theme owl-carousel">
                    <div className="why-choose-us-image bg1">
                        <img src="/assets/img/why-choose-img1.jpg" alt="image"/>
                    </div>

                    {/* <div className="why-choose-us-image bg2">
                        <img src="/assets/img/why-choose-img2.jpg" alt="image"/>
                    </div>

                    <div className="why-choose-us-image bg3">
                        <img src="/assets/img/why-choose-img3.jpg" alt="image"/>
                    </div> */}
                </div>
            </div>

            <div className="col-lg-7 col-md-12">
                <div className="why-choose-us-content">
                    <div className="content">
                        <div className="title">
                            <span className="sub-title">Your Benefits</span>
                            <h2>Why Choose Us</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>

                        <ul className="features-list">
                            <li>
                                <div className="icon">
                                    <i className="flaticon-like"></i>
                                </div>
                                <span>25 Years of experience</span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </li>

                            <li>
                                <div className="icon">
                                    <i className="flaticon-customer-service"></i>
                                </div>
                                <span>24/7 Support</span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </li>

                            <li>
                                <div className="icon">
                                    <i className="flaticon-care"></i>
                                </div>
                                <span>Service with love</span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </li>

                            <li>
                                <div className="icon">
                                    <i className="flaticon-team"></i>
                                </div>
                                <span>Clients Focused</span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </li>

                            <li>
                                <div className="icon">
                                    <i className="flaticon-policy"></i>
                                </div>
                                <span>No policy fees</span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </li>

                            <li>
                                <div className="icon">
                                    <i className="flaticon-education"></i>
                                </div>
                                <span>Growing your business</span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
)

export default WhyUs;