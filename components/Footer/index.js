import React from 'react'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="footer-top-area pt-100 pb-70" >
        <div className="container" >
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="single-widget ">
                <a href="/" >
                  <img src="assets/images/logo-generali.png" alt="Image" className="text-center" />
                </a>
                <p>ZSIC GI is a subsidiary of the Industrial Development Corporation (IDC), which is a holding company wholly owned by the Government of the Republic of Zambia. A pioneer in the Zambian Insurance Industry, ZISC General is a leader in the provision of world-class risk management solutions, exemplifying service excellence, professionalism and integrity. We have consistently been ranked among the topmost preferred insurance companies in Zambia. Contact us or visit any of our branches countrywide.</p>
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
                <h3>Organisation</h3>
                <ul>
                <li>
                   <Link href="/about-us">
                   <a>
                      About
                    </a>
                   </Link>

                  </li>
                  <li>
                   <Link href="/jobs">
                   <a>
                      Jobs
                    </a>
                   </Link>
                  </li>
                  <li>
                   <Link href="/tenders">
                   <a>
                     Tenders
                    </a>
                   </Link>
                  </li>
                  <li>
                   <Link href="/blog">
                   <a>
                      Blog
                    </a>
                   </Link>
                  </li>
                  <li>
                   <Link href="/downloads">
                   <a>
                     Downloads
                    </a>
                   </Link>
                  </li>
                  <li>
                   <Link href="/faqs">
                   <a>
                    FAQs
                    </a>
                   </Link>
                  </li>
                </ul>
              </div>
           
            </div>
            <div className="col-lg-3 col-md-6">
              {/* <div className="single-widget">
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
              </div> */}
            </div>
          </div>
        </div>
      </footer>
      
    )
}
