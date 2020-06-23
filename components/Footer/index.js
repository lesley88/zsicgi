import React from 'react'

export default function Footer() {
    return (
        <footer className="footer-top-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-widget">
                <a href="index.html">
                  <img src="assets/images/logo-generali.png" alt="Image" />
                </a>
                <p>Lorem ipsum dolor sitamet,cons adipiscing elit, sed do eiusmod te incididunt ut labore et dolore Lorem ipsum dolor sitamet,cons adipiscing dolore Lorem ipsum dolor.</p>
                <div className="social-area">
                  <ul>
                    <li>
                      <a href="index.html#"><i className="bx bxl-facebook" /></a>
                    </li>
                    <li>
                      <a href="index.html#"><i className="bx bxl-twitter" /></a>
                    </li>
                    <li>
                      <a href="index.html#"><i className="bx bxl-linkedin" /></a>
                    </li>
                    <li>
                      <a href="index.html#"><i className="bx bxl-youtube" /></a>
                    </li>
                    <li>
                      <a href="index.html#"><i className="bx bxl-instagram" /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-widget contact">
                <h3>Contact Us</h3>
                <ul>
                  <li className="pl-0">
                    <a href="tel:Phone:+822456974">
                      <i className="flaticon-call" />
                      <span>Call:</span> 
                      +260 211 229345 / 57
                    </a>
                  </li>
                  <li className="pl-0">
                    <a href="mailto:info@zsicgi.co.zm">
                      <i className="flaticon-email" />
                      <span>Email:</span> 
                      info@zsicgi.co.zm
                    </a>
                  </li>
                  <li>
                    <i className="flaticon-maps-and-flags" />
                    <span>Address:</span> 
                    ZSIC General Insurance Limited
Premium House
P.O.BOX 30894
LUSAKA
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-widget">
                <h3>Service Links</h3>
                <ul>
                  <li>
                    <a href="index.html#">
                      Insurance
                    </a>
                  </li>
                  <li>
                    <a href="index.html#">
                      Car Insurance
                    </a>
                  </li>
                  <li>
                    <a href="index.html#">
                      Home Insurance
                    </a>
                  </li>
                  <li>
                    <a href="index.html#">
                      Investment
                    </a>
                  </li>
                  <li>
                    <a href="index.html#">
                      Health Insurance
                    </a>
                  </li>
                  <li>
                    <a href="index.html#">
                      Business 
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-widget">
                <h3>Newsletter</h3>
                <p className="newsletter-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
                <div className="subscribe-wrap">
                  <form className="newsletter-form" data-toggle="validator">
                    <input type="email" className="form-control" placeholder="Enter Your Email" name="EMAIL" required autoComplete="off" />
                    <button className="default-btn" type="submit">
                      Subscribe
                    </button>
                    <div id="validator-newsletter" className="form-result" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
    )
}
