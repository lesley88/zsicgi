const Sidebar =()=>(
    <div className="sidebar-modal">
    <div className="sidebar-modal-inner">
        <div className="sidebar-about-area">
            <div className="title">
                <h2>About Us</h2>
                <p>We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services. The customer is king, their lives and needs are the inspiration.</p>
            </div>
        </div>

        {/* <div className="sidebar-instagram-feed">
            <h2>Instagram</h2>

            <ul>
                <li><a href="#"><img src="assets/img/blog-image/1.jpg" alt="image"></a></li>
                <li><a href="#"><img src="assets/img/blog-image/2.jpg" alt="image"></a></li>
                <li><a href="#"><img src="assets/img/blog-image/3.jpg" alt="image"></a></li>
                <li><a href="#"><img src="assets/img/blog-image/4.jpg" alt="image"></a></li>
                <li><a href="#"><img src="assets/img/blog-image/5.jpg" alt="image"></a></li>
                <li><a href="#"><img src="assets/img/blog-image/6.jpg" alt="image"></a></li>
                <li><a href="#"><img src="assets/img/blog-image/7.jpg" alt="image"></a></li>
                <li><a href="#"><img src="assets/img/blog-image/8.jpg" alt="image"></a></li>
            </ul>
        </div> */}

        <div className="sidebar-contact-area">
            <div className="sidebar-contact-info">
                <div className="contact-info-content">
                    <h2>
                        <a href="tel:+0881306298615">+088 130 629 8615</a>
                        <span>OR</span>
                        <a href="mailto:pearo@gmail.com">pearo@gmail.com</a>
                    </h2>

                    <ul className="social">
                        <li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#" target="_blank"><i className="fab fa-youtube"></i></a></li>
                        <li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
                        <li><a href="#" target="_blank"><i className="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>

        <span className="close-btn sidebar-modal-close-btn"><i className="flaticon-cross-out"></i></span>
    </div>
</div>
)