import React from "react";  
import Link from "next/link"  


const Nav = () => {  
  return (
    <header className="header-area"> 

         
            <div className="top-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12">
                            <ul className="top-header-nav">
                                <li><a href="#">Career</a></li>
                                <li><a href="#">Our Solutions</a></li>
                                <li><a href="#">Claims</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <div className="top-header-right-side">
                                <ul>
                                    <li>
                                        <div className="icon">
                                            <i className="flaticon-email"></i>
                                        </div>
                                        <span>Drop us an email:</span>
                                        <a href="#">info@zsicgi.co.zm</a>
                                    </li>

                                    <li>
                                        <div className="icon">
                                            <i className="flaticon-call"></i>
                                        </div>
                                        <span>Call us:</span>
                                        <a href="#">+260 211 229345</a>
                                    </li>

                                    <li>
                                        <a href="#" className="default-btn">Get A Quote <span></span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         
            <div className="navbar-area">
                <div className="pearo-responsive-nav">
                    <div className="container">
                        <div className="pearo-responsive-menu">
                            <div className="logo">
                                <a href="index.html">
                                    <img src="/assets/img/logo.png" alt="logo"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pearo-nav">
                    <div className="container" style={{width:"100% !important"}}>
                        <nav className="navbar navbar-expand-md navbar-light"  >
                            <Link href="/"><a className="navbar-brand">
                                <img src="/assets/img/logo.png" alt="logo"/>
                            </a>
                                </Link>
                            

                            <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    
                                    <li className="nav-item"><Link href="/"><a className="nav-link">Home</a></Link></li>

                                    <li className="nav-item"><Link href="/about-us"><a className="nav-link">About</a></Link></li>

                                    <li className="nav-item"><Link href="/insurance"><a className="nav-link">Insurance <i className="flaticon-down-arrow"></i></a></Link>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item"><Link href="/insurance/business-insurance"><a className="nav-link">Business Insurance</a></Link></li>
                                            <li className="nav-item"><Link href="/insurance/accident-insurance"><a className="nav-link">Accident Insurance</a></Link></li>
                                            <li className="nav-item"><Link href="/insurance/aviation-insurance"><a className="nav-link">Aviation Insurance</a></Link></li>
                                            <li className="nav-item"><Link href="/insurance/parkaged"><a className="nav-link">Parkaged</a></Link></li>
                                            <li className="nav-item"><Link href="/insurance/equipment-insurance"><a className="nav-link">Equipment Insurance</a></Link></li>
                                            <li className="nav-item"><Link href="/insurance/burglary"><a className="nav-link">Burglary</a></Link></li>
                                            <li className="nav-item"><Link href="/insurance/agricultural-insurance"><a className="nav-link">Agricultural Insurance</a></Link></li>
                                            <li className="nav-item"><Link href="/insurance/personal-insurance"><a className="nav-link">Personal Insurance</a></Link></li>
                                            <li className="nav-item"><Link href="/insurance/motor-vehicle-insurance"><a className="nav-link">Motor Vehicle Insurance</a></Link></li>
                                            <li className="nav-item"><Link href="/insurance/fire-insurance"><a className="nav-link">Fire Insurance</a></Link></li>
                                            <li className="nav-item"><Link href="/insurance/farm-pack-insurance"><a className="nav-link">Farm Pack Insurance</a></Link></li>
                                        </ul>
                                    </li> 
                                    
                                    <li className="nav-item"><Link href="/insurance"><a className="nav-link">Company <i className="flaticon-down-arrow"></i></a></Link>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item"><Link href="/business-insurance"><a className="nav-link">About Us</a></Link></li>
                                            <li className="nav-item"><Link href="/accident-insurance"><a className="nav-link">Vacancies</a></Link></li>
                                            <li className="nav-item"><Link href="/aviation-insurance"><a className="nav-link">Tenders</a></Link></li>
                                            <li className="nav-item"><Link href="/payment-plans"><a className="nav-link">Flexible Payment Plans</a></Link></li>
                                            <li className="nav-item"><Link href="/downloads"><a className="nav-link">Downloads</a></Link></li>
                                        </ul>
                                    </li>                                  

                                    <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
                                </ul>

                                {/* <div className="others-option">
                                    <div className="option-item">
                                        <i className="search-btn flaticon-search"></i>
                                        <i className="close-btn flaticon-cross-out"></i>
                                        
                                        <div className="search-overlay search-popup">
                                            <div className='search-box'>
                                                <form className="search-form">
                                                    <input className="search-input" name="search" placeholder="Search" type="text"/>

                                                    <button className="search-button" type="submit"><i className="flaticon-search"></i></button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="burger-menu">
                                        <i className="flaticon-menu"></i>
                                    </div>
                                </div> */}
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        

        </header>
  );
};

export default Nav;  
