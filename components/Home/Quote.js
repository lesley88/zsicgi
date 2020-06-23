import React from 'react'

export default function Quote() {
    return (
        <section className="get-quat-area get-quat-area-three ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="get-quat-content">
                <div className="section-title">
                  <h2>Get A Free Quote</h2>
                  <p></p>
                </div>
                <ul>
                  <li>
                    <i className="flaticon-maps-and-flags" />
                    <h3>Head Office Address</h3>
                    <p>ZSIC General Insurance Limited
Premium House
P.O.BOX 30894
LUSAKA</p>
                  </li>
                  <li>
                    <i className="flaticon-call" />
                    <h3>Call</h3>
                    <p>+260 211 229345 / 57</p>
                  </li>
                  <li>
                    <i className="flaticon-email" />
                    <h3>Contact US</h3>
                    <p> info@zsicgi.co.zm</p>
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
                      <p>Start with your zip code to compare car insurance</p>
                      <div className="form">
                        <div className="form-group">
                          <input type="text" className="form-control" id="Name" placeholder="Your Name" />
                        </div>
                        <div className="form-group">
                          <input type="email" className="form-control" id="Email" placeholder="Your Email" />
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" id="Number" placeholder="Your Number" />
                        </div>
                        <div className="form-group">
                          <div className="select-box">
                            <i className="flaticon-avatar" />
                            <select className="form-control" style={{display: 'none'}}>
                              <option value={5}>Property Type</option>
                              <option value={1}>Home Property</option>
                              <option value={2}>Health Insurance</option>
                              <option value={0}>Car Insurance</option>
                              <option value={3}>Life Insurance</option>
                              <option value={4}>Home Insurance</option>
                            </select><div className="nice-select form-control" tabIndex={0}><span className="current">Property Type</span><ul className="list"><li data-value={5} className="option selected">Property Type</li><li data-value={1} className="option">Home Property</li><li data-value={2} className="option">Health Insurance</li><li data-value={0} className="option">Car Insurance</li><li data-value={3} className="option">Life Insurance</li><li data-value={4} className="option">Home Insurance</li></ul></div>
                          </div>
                        </div>
                        <button type="submit" className="default-btn">
                          Start Saving Today
                        </button>
                        <ul className="ratings">
                          <li>45 Ratings</li>
                          <li className="right">
                            Already Member? 
                            <a href="sign-in.html">SIGN IN</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <div className="tabs_item" style={{display: 'none'}}>
                      <p>Start with your zip code to compare home insurance</p>
                      <div className="form">
                        <div className="form-group">
                          <input type="text" className="form-control" id="Name2" placeholder="Your Name" />
                        </div>
                        <div className="form-group">
                          <input type="email" className="form-control" id="Email2" placeholder="Your Email" />
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" id="Number2" placeholder="Your Number" />
                        </div>
                        <div className="form-group">
                          <div className="select-box">
                            <i className="flaticon-avatar" />
                            <select className="form-control" style={{display: 'none'}}>
                              <option value={5}>Home Property</option>
                              <option value={1}>Property Type </option>
                              <option value={2}>Health Insurance</option>
                              <option value={0}>Car Insurance</option>
                              <option value={3}>Life Insurance</option>
                              <option value={4}>Home Insurance</option>
                            </select><div className="nice-select form-control" tabIndex={0}><span className="current">Home Property</span><ul className="list"><li data-value={5} className="option selected">Home Property</li><li data-value={1} className="option">Property Type </li><li data-value={2} className="option">Health Insurance</li><li data-value={0} className="option">Car Insurance</li><li data-value={3} className="option">Life Insurance</li><li data-value={4} className="option">Home Insurance</li></ul></div>
                          </div>
                        </div>
                        <button type="submit" className="default-btn">
                          Start Saving Today
                        </button>
                        <ul>
                          <li>45 Ratings</li>
                          <li className="right">
                            Already Member? 
                            <a href="sign-in.html">SIGN IN</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="tabs_item" style={{display: 'none'}}>
                      <p>Start with your zip code to compare life insurance</p>
                      <div className="form">
                        <div className="form-group">
                          <input type="text" className="form-control" id="Name3" placeholder="Your Name" />
                        </div>
                        <div className="form-group">
                          <input type="email" className="form-control" id="Email3" placeholder="Your Email" />
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" id="Number3" placeholder="Your Number" />
                        </div>
                        <div className="form-group">
                          <div className="select-box">
                            <i className="flaticon-avatar" />
                            <select className="form-control" style={{display: 'none'}}>
                              <option value={5}>Life Insurance</option>
                              <option value={1}>Home Property</option>
                              <option value={2}>Health Insurance</option>
                              <option value={0}>Car Insurance</option>
                              <option value={3}>Property Type</option>
                              <option value={4}>Home Insurance</option>
                            </select><div className="nice-select form-control" tabIndex={0}><span className="current">Life Insurance</span><ul className="list"><li data-value={5} className="option selected">Life Insurance</li><li data-value={1} className="option">Home Property</li><li data-value={2} className="option">Health Insurance</li><li data-value={0} className="option">Car Insurance</li><li data-value={3} className="option">Property Type</li><li data-value={4} className="option">Home Insurance</li></ul></div>
                          </div>
                        </div>
                        <button type="submit" className="default-btn">
                          Start Saving Today
                        </button>
                        <ul>
                          <li>45 Ratings</li>
                          <li className="right">
                            Already Member? 
                            <a href="sign-in.html">SIGN IN</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="tabs_item" style={{display: 'none'}}>
                      <p>Start with your zip code to compare health insurance</p>
                      <div className="form">
                        <div className="form-group">
                          <input type="text" className="form-control" id="Name4" placeholder="Your Name" />
                        </div>
                        <div className="form-group">
                          <input type="email" className="form-control" id="Email4" placeholder="Your Email" />
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" id="Number4" placeholder="Your Number" />
                        </div>
                        <div className="form-group">
                          <div className="select-box">
                            <i className="flaticon-avatar" />
                            <select className="form-control" style={{display: 'none'}}>
                              <option value={5}>Property Health</option>
                              <option value={1}>Home Property</option>
                              <option value={2}>Health Insurance</option>
                              <option value={0}>Car Insurance</option>
                              <option value={3}>Life Insurance</option>
                              <option value={4}>Home Insurance</option>
                            </select><div className="nice-select form-control" tabIndex={0}><span className="current">Property Health</span><ul className="list"><li data-value={5} className="option selected">Property Health</li><li data-value={1} className="option">Home Property</li><li data-value={2} className="option">Health Insurance</li><li data-value={0} className="option">Car Insurance</li><li data-value={3} className="option">Life Insurance</li><li data-value={4} className="option">Home Insurance</li></ul></div>
                          </div>
                        </div>
                        <button type="submit" className="default-btn">
                          Start Saving Today
                        </button>
                        <ul>
                          <li>45 Ratings</li>
                          <li className="right">
                            Already Member? 
                            <a href="sign-in.html">SIGN IN</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    )
}
