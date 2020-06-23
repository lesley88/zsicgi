import React from 'react'
import Link from 'next/link';

export default function HomeHero(props) {
    const data = props.data
    return (
     <div
      className="main-banner-area-two jarallax"
      data-jarallax='{"speed": 0.3}'
     >
      <div className="container-fluid">
       <div className="row">
        <div className="col-lg-6">
         <div className="banner-text">
          <span className="wow fadeInUp" data-wow-delay=".2s">
           General Insurance
          </span>
          <h1 className="wow fadeInUp" data-wow-delay=".4s">
          {data.title}
          </h1>
          <p className="wow fadeInUp" data-wow-delay=".6s">
          {data.sub_title}
          </p>
          <div className="banner-btn wow fadeInUp" data-wow-delay=".9s">
              <Link href="/contact">
              <a className="default-btn active">
            Get Started
           </a>
              </Link>
          <Link href="/">
          <a className="default-btn active">
            Agent
           </a>
          </Link>
          </div>
         </div>
        </div>
        <div className="col-lg-6 pr-0">
         <div className="banner-img wow fadeInRight" data-wow-delay=".2s" />
        </div>
       </div>
      </div>
     </div>
    );
}
