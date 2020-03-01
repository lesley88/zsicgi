const Header = () =>(
    <section className="insurance-details-area ptb-100">
    <div className="container">
        <div className="insurance-details-header">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                    <div className="content">
                        <h3>Business policy is a multiple-line insurance policy</h3>

                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Randomised words which don't slightly believable.</p>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some for.</p>
                    </div>
                </div>

                <div className="col-lg-6 col-md-12">
                    <div className="image text-center">
                        <img src="assets/img/services-image/2.jpg" alt="image"/>
                    </div>
                </div>
            </div>
        </div>

        <div className="insurance-details-desc">
            <h3>Four major elements that we offer:</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>

            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <ul className="features-list">
                        <li><i className="fas fa-check"></i> Scientific Skills For getting a better result</li>
                        <li><i className="fas fa-check"></i> Communication Skills to getting in touch</li>
                        <li><i className="fas fa-check"></i> A Career Overview opportunity Available</li>
                        <li><i className="fas fa-check"></i> A good Work Environment For work</li>
                    </ul>
                </div>

                <div className="col-lg-6 col-md-6">
                    <ul className="features-list">
                        <li><i className="fas fa-check"></i> Scientific Skills For getting a better result</li>
                        <li><i className="fas fa-check"></i> Communication Skills to getting in touch</li>
                        <li><i className="fas fa-check"></i> A Career Overview opportunity Available</li>
                        <li><i className="fas fa-check"></i> A good Work Environment For work</li>
                    </ul>
                </div>
            </div>

            <h3>Setting the mood with incense</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>

            <ul className="wp-block-gallery columns-3">
                <li className="blocks-gallery-item">
                    <figure>
                        <img src="assets/img/services-image/1.jpg" alt="image"/>
                    </figure>
                </li>

                <li className="blocks-gallery-item">
                    <figure>
                        <img src="assets/img/services-image/2.jpg" alt="image"/>
                    </figure>
                </li>

                <li className="blocks-gallery-item">
                    <figure>
                        <img src="assets/img/services-image/3.jpg" alt="image"/>
                    </figure>
                </li>
            </ul>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>

            <blockquote className="wp-block-quote">
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

                <cite>Tom Cruise</cite>
            </blockquote>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>

            <div className="pearo-post-navigation">
                <div className="prev-link-wrapper">
                    <div className="info-prev-link-wrapper">
                        <a href="#">
                            <span className="image-prev">
                                <img src="assets/img/services-image/1.jpg" alt="image"/>
                                <span className="post-nav-title">Prev</span>
                            </span>

                            <span className="prev-link-info-wrapper">
                                <span className="prev-title">Agriculture Insurance</span>
                                <span className="meta-wrapper">
                                    <span className="date-post">January 21, 2020</span>
                                </span>
                            </span>
                        </a>
                    </div>
                </div>

                <div className="next-link-wrapper">
                    <div className="info-next-link-wrapper">
                        <a href="#">
                            <span className="next-link-info-wrapper">
                                <span className="next-title">Home Insurance</span>
                                <span className="meta-wrapper">
                                    <span className="date-post">January 21, 2020</span>
                                </span>
                            </span>

                            <span className="image-next">
                                <img src="assets/img/services-image/3.jpg" alt="image"/>
                                <span className="post-nav-title">Next</span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
)

export default Header