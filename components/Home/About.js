import React from 'react'

export default function About(props) {
  const data = props.data
    return (
        <section className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-content">
                <span>About Us</span>
                <h2> {data.aboutHeading} </h2>
                <p>
                  {data.aboutBody}
                </p>
                <div className="about-list">
                  <ul>
                    <li>
                      <i className="flaticon-checked" />
                      Save Money
                    </li>
                    <li>
                      <i className="flaticon-checked" />
                      Over 19 branches Countrywide
                    </li>
                    <li>
                      <i className="flaticon-checked" />
                      Client Testimonials
                    </li>
                  </ul>
                  <ul className="ml-30">
                    <li>
                      <i className="flaticon-checked" />
                      Flexible Payment Plans
                    </li>
                    {/* <li>
                      <i className="flaticon-checked" />
                      Investment Planning
                    </li>
                    <li>
                      <i className="flaticon-checked" />
                      Professional Advisor
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-img wow fadeInRight" data-wow-delay=".2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInRight'}}>
                <img src="assets/img/about-img.jpg" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
    )
}
