import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Service = styled.div`
 ul li {
  a {
    color: #fff !important;
    &:hover{
      color: #f3e3e3
    }
  }
 }

`;

export default function Services(props) {
const items = props.data.services
const data = props.data
    return (
        <section className="services-area-three pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span>Our Service</span>
            <h2> {data.service_header} </h2>
            <p>{data.subheading} </p>
          </div>
          <div className="row">
          {items.map(item=>{
            return(
              <div className="col-lg-4 col-sm-6" key={item.id}>
              <Service className="single-choose wow fadeInLeft" data-wow-delay=".3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInLeft', height:300}}>
                <span className={`${item.icon}`} />
                <h3> {item.item} </h3>
            <p>
            <ul>
              {item.sub_services.map(item=>(
                <li>
                  {item.item}
                   {/* <Link href={`${item.link}`}>{item.item}</Link> */}
                </li>
               ))}
              </ul>
            </p>
               
                <Link href={`${item.link}`}>
                <a>
                  <i className="flaticon-right" />
                </a>
                </Link>
              </Service>
            </div>
            )
          })}
            {/* <div className="col-lg-4 col-sm-6">
              <div className="single-choose wow fadeInLeft" data-wow-delay=".2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInLeft'}}>
                <span className="flaticon-insurance" />
                <h3>Home Insurence</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                <a href="insurance-details.html">
                  <i className="flaticon-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-choose wow fadeInLeft" data-wow-delay=".1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInLeft'}}>
                <span className="flaticon-salesman" />
                <h3>Business Insurance</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                <a href="insurance-details.html">
                  <i className="flaticon-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-choose wow fadeInRight" data-wow-delay=".1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInRight'}}>
                <span className="flaticon-insurance-1" />
                <h3>Auto Insurance</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                <a href="insurance-details.html">
                  <i className="flaticon-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-choose wow fadeInRight" data-wow-delay=".2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInRight'}}>
                <span className="flaticon-life-insurance" />
                <h3>Health Insurance</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                <a href="insurance-details.html">
                  <i className="flaticon-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-choose wow fadeInRight" data-wow-delay=".3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInRight'}}>
                <span className="flaticon-travel-insurance" />
                <h3>Life Insurance</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                <a href="insurance-details.html">
                  <i className="flaticon-right" />
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      
    )
}
