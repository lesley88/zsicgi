import React from 'react'
import ReactMarkdown from 'react-markdown'
import Layout from '../layout'

import { getAllPostIds, getPostData } from '../lib/data'
import Head from 'next/head'
import Link from 'next/link'

export default function Insureance({postData}) {
    // console.log(postData)
    const frontmatter = postData
    return (
      <Layout>
        <Head>
          <title> {postData.seoTitle}</title>
        </Head>
        <div class="page-title-area bg-17" style={{background:`url(${frontmatter.hero_image})`, backgroundSize:"cover"}}>
          <div class="container">
            <div class="page-title-content">
              <h2 style={{textTransform: 'capitalize'}}> {postData.title} </h2>
              <ul>
                <li>
                  <a href="index.html">Home</a>
                </li>

                <li>Insurance</li>

                <li style={{textTransform: 'capitalize'}}>{postData.title}</li>
              </ul>
            </div>
          </div>
        </div>

        <section className="insurance-details-area ptb-100">
    <div className="container">
        
       
        <div className="insurance-details-desc">
        <div className="container" style={{marginLeft:"-15px"}}>
            <div className="row">
            <div className="col-md-8">

            <ReactMarkdown source={postData.contentHtml}
                    escapeHtml={false}
                  
                />
            </div>
            



            
            <div className="col-md-4" style={{marginTop:"150px"}}>
            <div className="tab_content">
                                <div className="tabs_item">
                                    <h3>Get a {frontmatter.title} quotation</h3>
                                    <form>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Your Name"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Your Email"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Your Phone"/>
                                        </div>
                                        <div className="form-group">
                                            <textarea type="text" className="form-control" placeholder="Details" style={{textTransform:"capitalize"}}/>
                                        </div>
                                        <div className="form-group">
                                        <input type="text" className="form-control" value={`${frontmatter.title}`}/>
                                        </div>
                                        <button type="submit" className="default-btn">Get A Free Quote <span></span></button>
                                    </form>
                                </div>
                </div>
                {/* <div className="all-services" style={{marginTop:"100px", textAlign:"left"}}>
                    <h4 style={{fontWeight:"bold", marginBottom:"10px", padding:"10px", textTransform:"uppercase"}}>All Insurance Services</h4>
                    <ul className="list-group">
                        { props.allInsurances.map(item=>(
                            <li className="list-group-item active" key={item.slug}>
                                
                                <Link href={{ pathname: `/insurance/${item.slug}` }}><a>{item.document.data.title} </a></Link></li>
                        ))
                        
                        }
                    </ul>
                </div> */}
                    </div>
                    </div>
            
        </div>
               
{/* 
            <h3 style={{marginTop:"", color:"#333"}}>Some Selling Points</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>

            <ul className="wp-block-gallery columns-3">
                <li className="blocks-gallery-item">
                    <figure>
                        <img src="/assets/img/services-image/1.jpg" alt="image"/>
                    </figure>
                </li>

                <li className="blocks-gallery-item">
                    <figure>
                        <img src="/assets/img/services-image/2.jpg" alt="image"/>
                    </figure>
                </li>

                <li className="blocks-gallery-item">
                    <figure>
                        <img src="/assets/img/services-image/3.jpg" alt="image"/>
                    </figure>
                </li>
            </ul>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>

            <blockquote className="wp-block-quote">
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

                <cite>Tom Cruise</cite>
            </blockquote>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p> */}

            {/* <div className="pearo-post-navigation">
                <div className="prev-link-wrapper">
                    <div className="info-prev-link-wrapper">
                        <a href="#">
                            <span className="image-prev">
                                <img src="assets/img/services-image/1.jpg" alt="image"/>
                                <span className="post-nav-title">Prev</span>
                            </span>

                            <span className="prev-link-info-wrapper">
                                <span className="prev-title">Agriculture Insurance</span>
                                <span className="meta-wrapper">
                                    <span className="date-post">January 21, 2020</span>
                                </span>
                            </span>
                        </a>
                    </div>
                </div>

                <div className="next-link-wrapper">
                    <div className="info-next-link-wrapper">
                        <a href="#">
                            <span className="next-link-info-wrapper">
                                <span className="next-title">Home Insurance</span>
                                <span className="meta-wrapper">
                                    <span className="date-post">January 21, 2020</span>
                                </span>
                            </span>

                            <span className="image-next">
                                <img src="assets/img/services-image/3.jpg" alt="image"/>
                                <span className="post-nav-title">Next</span>
                            </span>
                        </a>
                    </div>
                </div>
            </div> */}
        
        </div>
    </div>
</section>
    
        <div></div>
        {/* <div className="achievement-area pt-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="video-img">
                  <img src="assets/img/video-img.jpg" alt="Image" />
                  <div className="video">
                    <a
                      href="https://www.youtube.com/watch?v=IhQt_fxGOcw"
                      className="video-btn popup-youtube">
                      <i className="flaticon-play-button" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="achievement-content">
                  <span>Achievement</span>
                  <h2>We have Achieved Many National Award For Our Success</h2>
                  <p>
                    Lorem ipsum dolor commod sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. ipsum suspendisse ultrices gravida. Risus
                    commod o viverra maecenas.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <a href="insurance-details.html#" className="default-btn">
                    Be Connected
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
         */}
        
        <section className="agent-now-area ptb-100">
  <div className="container">
    <div className="section-title">
      <h2>Get {postData.title} <br /> </h2>
    </div>
    <div className="row">
      <div className="col-lg-6">
        <div className="call-now">
          <i className="flaticon-call" />
          <p>Call Us</p>
          <span> +260 211 229345</span>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="subscribe-wrap">
          <p className="text-center">Get a Free Quotation</p>
          {/* <form className="newsletter-form" data-toggle="validator" noValidate="true">
            <input type="email" className="form-control" placeholder="Enter Your Email" name="EMAIL" required autoComplete="off" />
            <button className="default-btn disabled" type="submit" style={{pointerEvents: 'all', cursor: 'pointer'}}>
              Subscribe
            </button>
            <div id="validator-newsletter-1" className="form-result" />
          </form> */}
          <div className="text-center">
            <Link href="/contact">
              <a className="btn default-btn">Get a Quote</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <div className="agent-shape">
    <img src="/assets/img/agent-shape.png" alt="Image" />
  </div> */}
</section>

      </Layout>
    );
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
  }
  
  export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
      props: {
        postData
      }
    }
  }