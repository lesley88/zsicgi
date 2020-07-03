import React from 'react'
import Link from 'next/link'
export default function Quote(props) {
    return (
        <section className="get-quat-area get-quat-area-three ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="get-quat-content">
                <div className="section-title">
                  <h2>Contact Us</h2>
                  <p></p>
                </div>
                <ul>
                  <li>
                    <Link href="//www.google.com/maps/place/ZSIC+General+Insurance+Limited/@-15.4231651,28.2886421,15z/data=!4m5!3m4!1s0x0:0xd1f51979b5ed5607!8m2!3d-15.4232065!4d28.2885134">
                    <a><i className="flaticon-maps-and-flags" /></a>
                    </Link>
 
                    <h3>Head Office Address</h3>
                    <p>ZSIC General Insurance Limited <br/>
                    Independence Avenue
                    </p>
                  </li>
                  <li>
                    <i className="flaticon-call" />
                    <h3>Call</h3>
                    <p>+260 762 325 932</p>
                    <p>+260 770 704 465</p>
                  </li>
                  <li>
                    <i className="flaticon-call" />
                    <h3>WhatsApp</h3>
                    <p>+260 762 024 645</p>
                  
                  </li>
                  <li>
                    <i className="flaticon-email" />
                    <h3>Contact US</h3>
                    <p>  customerservice@zsicgi.co.zm</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="quat-form">
                <div className="tab">
                  <ul className="">
                    {/* <li className="">
                     
                        <div className="text-center" >Car</div>
                    
                    </li> */}
                    {/* <li className>
                      <a href="#">
                        <div className="dot" />Home
                      </a>
                    </li>
                    <li className>
                      <a href="index-3.html#">
                        <div className="dot" />Life
                      </a>
                    </li>
                    <li className>
                      <a href="index-3.html#">
                        <div className="dot" />Health
                      </a>
                    </li> */}
                  </ul>
                  <div className="tab_content">
                    <div className="tabs_item" style={{display: 'block'}}>
                      {/* <p>Start with your zip code to compare car insurance</p> */}
                      <div className="form">
                        <div className="form-group">
                          <input type="text" className="form-control" id="Name" placeholder="FullName" />
                        </div>
                        <div className="form-group">
                          <input type="email" className="form-control" id="Email" placeholder="Email" />
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" id="Number" placeholder="Mobile Number" />
                        </div>
                        <div className="form-group">
                          <textarea type="text" className="form-control" id="Number" placeholder="Message" />
                        </div>
                        <div className="form-group">
                          {/* <div className="select-box">
                            <i className="flaticon-avatar" />
                            <select className="form-control" style={{display: 'none'}}>
                            
                            
                            </select>
                            <div className="nice-select form-control" tabIndex={0}><span className="current">Property Type</span><ul className="list"><li data-value={5} className="option selected">Property Type</li><li data-value={1} className="option">Home Property</li><li data-value={2} className="option">Health Insurance</li><li data-value={0} className="option">Car Insurance</li><li data-value={3} className="option">Life Insurance</li><li data-value={4} className="option">Home Insurance</li></ul></div>
                          </div> */}
                        </div>
                        <button type="submit" className="default-btn">
                          Submit
                        </button>
                      
                      </div>
                    </div>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    )
}
