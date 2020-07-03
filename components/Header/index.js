import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

const HeaderLeft = styled.div`

 a{
     margin: 5px;
     &::before {
        content: "";
        margin: 2px;
        font-family: "Font Awesome 5 Pro";
        font-weight: 400;
        content: "\f101";
      }
     
 }
 
`;

export default function Header() {
    return (
     <header className="header-area fixed-top">
      <div className="top-header-area">
       <div className="container">
        <div className="row align-items-center">
         <div className="col-lg-6">
          <HeaderLeft className="header-content-left">
          <Link href="">
              <a>
              Agency & Broker Portal
              </a>
          </Link>
          <Link href="">
              <a>
              Special Offers
              </a>
          </Link>
          <Link href="/salvages">
              <a>
               Salvages
              </a>
          </Link>
          </HeaderLeft>
         </div>
         <div className="col-lg-6">
          <ul className="header-content-right">
         
           <li>
            <a href="tel:+260762325932">
             <i className="bx bx-phone-call" />
             Call :    +260 762 325 932
            </a>
           </li>
           <li>
            <a href="tel:+260762325932">
             <i className="bx bx-phone-call" />
             Call : +260 770 704 465
            </a>
           </li>
           <li>
            <a href="tel:+260762325932">
             <i className="bx bx-phone-call" />
             WhatsApp : +260 762 024 645
            </a>
           </li>
           <li>
            <a href="mailto:info@zsicgi.co.zm">
             <i className="bx bx-envelope" />
             Email :info@zsicgi.co.zm
            </a>
           </li>
          </ul>
         </div>
        </div>
       </div>
      </div>
      {/* Start Navbar Area */}
      <div className="nav-area">
       <div className="navbar-area">
        {/* Menu For Mobile Device */}
        <div class="mobile-nav">
         <Link href="/">
          <a class="logo">
           <img src="/assets/images/logo-generali.png" alt="Logo" width="100" />
          </a>
         </Link>
        </div>
        {/* Menu For Desktop Device */}
        <div className="main-nav">
         <nav className="navbar navbar-expand-md navbar-light ">
          <div className="container">
           <Link href="/">
            <a className="navbar-brand">
             <img
              src="/assets/images/logo-generali.png"
              alt="Logo"
              width="100"
             />
            </a>
           </Link>
           <div
            className="collapse navbar-collapse mean-menu menu-white"
            id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
             <li className="nav-item">
              <Link href="/">
               <a className="nav-link dropdown-toggle">Home</a>
              </Link>
             </li>

             <li className="nav-item">
              <Link href="/about-us">
               <a class="nav-link dropdown-toggle">
                About
                <i className="bx bx-plus" />
               </a>
              </Link>
              <ul className="dropdown-menu">
               <li className="nav-item">
                <Link href="/about-us#story">
                 <a className="nav-link">Our Story</a>
                </Link>
               </li>
               <li className="nav-item">
                <Link href="/about-us#management">
                 <a className="nav-link">Management</a>
                </Link>
               </li>
               <li className="nav-item">
                <Link href="/downloads">
                 <a className="nav-link">Downloads</a>
                </Link>
               </li>
               <li className="nav-item">
                <Link href="/careers">
                 <a className="nav-link">Jobs</a>
                </Link>
               </li>
               <li className="nav-item">
                <Link href="/tenders">
                 <a className="nav-link">Tenders</a>
                </Link>
               </li>
               <li className="nav-item">
                <Link href="/faq">
                 <a className="nav-link">FAQs</a>
                </Link>
               </li>
               <li className="nav-item">
                <Link href="/contact#otherlocations">
                 <a className="nav-link">Branch Network</a>
                </Link>
               </li>
              </ul>
             </li>

             <li class="nav-item">
             <Link href="#">
             <a href="about.html#" class="nav-link dropdown-toggle">
               Individual
               <i class="bx bx-plus"></i>
              </a>
             </Link>

              <ul class="dropdown-menu">
               <li class="nav-item">
              <Link href="#">
              <a href="about.html#" class="nav-link dropdown-toggle">
                 My Accounts
                 <i class="bx bx-plus"></i>
                </a>
              </Link>

                <ul class="dropdown-menu">
                 <li class="nav-item">
                 <Link href="#">
                 <a href="log-in.html" class="nav-link">
                   Create Account
                  </a>
                 </Link>
                 </li>
                 <li class="nav-item">
                 <Link href="#">
                 <a href="sign-in.html" class="nav-link">
                   Sign In
                  </a>
                 </Link>
                 </li>
                </ul>
               </li>
               <li class="nav-item">
              <Link href="#">
              <a href="about.html#" class="nav-link dropdown-toggle">
                 Products
                 <i class="bx bx-plus"></i>
                </a>
              </Link>

                <ul class="dropdown-menu">
                 <li class="nav-item">
                <Link href="/motor-vehicle-insurance">
                <a href="log-in.html" class="nav-link">
                   {' '}
                   Car Insurance
                  </a>
                </Link>
                 </li>
                 <li class="nav-item">
                <Link href="/personal-insurance">
                <a href="sign-in.html" class="nav-link">
                   House and Home Insurance
                  </a>
                </Link>
                 </li>
                 <li class="nav-item">
                <Link href="/accident-insurance">
                <a href="recover-password.html" class="nav-link">
                   Accident Insurance
                  </a>
                </Link>
                 </li>
                 {/* <li>
                  <Link href="">
                   <a>Travel Insuranc</a>
                  </Link>
                 </li> */}
                </ul>
               </li>
               <li class="nav-item">
              <Link href="#">
              <a href="about.html#" class="nav-link dropdown-toggle">
                 Services
                 <i class="bx bx-plus"></i>
                </a>
              </Link>

                <ul class="dropdown-menu sub-menu">
                 <li class="nav-item">
                <Link href="/contact">
                <a href="log-in.html" class="nav-link">
                   {' '}
                   Get Quote
                  </a>
                </Link>
                 </li>
                 <li class="nav-item">
                  <Link href="#">
                  <a href="sign-in.html" class="nav-link">
                   Download The App
                  </a>
                  </Link>
                 </li>
                 <li class="nav-item">
                 <Link href="/rtsa">
                 <a href="recover-password.html" class="nav-link">
                   RTSA
                  </a>
                 </Link>
                 </li>
                 <li>
                  {/* <a>Help</a> */}
                 </li>
                </ul>
               </li>
              </ul>
             </li>
             <li class="nav-item">
              <a href="about.html#" class="nav-link dropdown-toggle">
               Corporate
               <i class="bx bx-plus"></i>
              </a>

              <ul class="dropdown-menu">
               <li class="nav-item">
               <Link href="/business-insurance">
               <a class="nav-link">
                 Business Insurance
                </a>
               </Link>
             
               </li>
               <li class="nav-item">
               <Link href="/agricultural-insurance">
                   <a className="nav-link">
                   Agricultural Insurance
                   </a>
               </Link>
               </li>
             
               <li class="nav-item">
               <Link href="/accident-insurance">
                   <a className="nav-link">
                  Accident Insurance
                   </a>
               </Link>
               </li>
               <li class="nav-item">
               <Link href="/burglary">
                   <a className="nav-link">
                  Theft Insurance
                   </a>
               </Link>
               </li>
               <li class="nav-item">
               <Link href="/aviation-insurance">
                   <a className="nav-link">
                  Marine
                   </a>
               </Link>
               </li>
               <li class="nav-item">
               <Link href="/motor-vehicle-insurance">
                   <a className="nav-link">
                  Motor Vehicle Insurance
                   </a>
               </Link>
               </li>
               <li class="nav-item">
               <Link href="/equipment-insurance">
                   <a className="nav-link">
                  Equipment Insurance
                   </a>
               </Link>
               </li>
               <li class="nav-item">
               <Link href="/parkaged-insurance">
                   <a className="nav-link">
                  Packaged
                   </a>
               </Link>
               </li>
              </ul>
             </li>
             <li className="nav-item">
              <Link href="/about-us">
               <a className="nav-link">Customer Portal</a>
              </Link>
             </li>
             <li className="nav-item">
              <Link href="/about-us">
               <a className="nav-link">Claims</a>
              </Link>
             </li>
             <li className="nav-item">
              <Link href="/blog">
               <a className="nav-link">Blog</a>
              </Link>
             </li>
            </ul>
            {/* Start Other Option */}
            <div className="others-option">
             <div className="subscribe">
              <a href="index.html#subscribe" className="default-btn">
               Get A Quote
              </a>
             </div>
            </div>
            {/* End Other Option */}
           </div>
          </div>
         </nav>
        </div>
       </div>
      </div>
      {/* End Navbar Area */}
     </header>
    );
}
