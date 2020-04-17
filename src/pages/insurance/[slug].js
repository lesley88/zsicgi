import * as React from 'react'
import Head from 'next/head'
import Link from 'next/head'
import matter from "gray-matter";
import ReactMarkdown from "react-markdown/with-html";
const htmlParser = require('react-markdown/plugins/html-parser')
import styled from 'styled-components'

import Layout from '../../layout'
import Quote from '../../components/Quote';

const List = '<li><i class=""></i>'

const parseHtml = htmlParser({
    isValidNode: node => node.type !== 'list',
    processingInstructions: ['<li><i class=""></i>']
  })

export default function BlogTemplate(props) {
  function reformatDate(fullDate) {
    const date = new Date(fullDate)
    return date.toDateString().slice(4);
  }
  const markdownBody = props.content
  const frontmatter = props.data

  return (
    <Layout >
      <Head>
     <title>{frontmatter.title}</title>
      </Head>
      <div class="page-title-area page-title-bg3" style={{backgroundImage:`url(${frontmatter.hero_image})`}}>
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container">
                        <div class="page-title-content">
                            <h1>{frontmatter.title}</h1>
                            <ul>
                            
                                <li>{frontmatter.title}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section class="insurance-details-area ptb-100">
    <div class="container">
        <div class="insurance-details-header">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12">
                    <div class="content">
                        <h2 style={{marginTop:"", color:"#333", fontWeight:"600"}}>{frontmatter.header}</h2>

                        <p>{frontmatter.heading}</p>
                    </div>
                </div>

                <div class="col-lg-6 col-md-12">
                    <div class="image text-center">
                    <img src={frontmatter.hero_image} alt={frontmatter.title} />
                    </div>
                </div>
            </div>
        </div>
       
        <div class="insurance-details-desc">
        <div class="container" style={{marginLeft:"-15px"}}>
            <div className="row">
            <div className="col-md-8">

            <ReactMarkdown source={markdownBody}
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
                    <ul class="list-group">
                        { props.allInsurances.map(item=>(
                            <li class="list-group-item active" key={item.slug}>
                                
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

            <ul class="wp-block-gallery columns-3">
                <li class="blocks-gallery-item">
                    <figure>
                        <img src="/assets/img/services-image/1.jpg" alt="image"/>
                    </figure>
                </li>

                <li class="blocks-gallery-item">
                    <figure>
                        <img src="/assets/img/services-image/2.jpg" alt="image"/>
                    </figure>
                </li>

                <li class="blocks-gallery-item">
                    <figure>
                        <img src="/assets/img/services-image/3.jpg" alt="image"/>
                    </figure>
                </li>
            </ul>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>

            <blockquote class="wp-block-quote">
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

                <cite>Tom Cruise</cite>
            </blockquote>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p> */}

            {/* <div class="pearo-post-navigation">
                <div class="prev-link-wrapper">
                    <div class="info-prev-link-wrapper">
                        <a href="#">
                            <span class="image-prev">
                                <img src="assets/img/services-image/1.jpg" alt="image"/>
                                <span class="post-nav-title">Prev</span>
                            </span>

                            <span class="prev-link-info-wrapper">
                                <span class="prev-title">Agriculture Insurance</span>
                                <span class="meta-wrapper">
                                    <span class="date-post">January 21, 2020</span>
                                </span>
                            </span>
                        </a>
                    </div>
                </div>

                <div class="next-link-wrapper">
                    <div class="info-next-link-wrapper">
                        <a href="#">
                            <span class="next-link-info-wrapper">
                                <span class="next-title">Home Insurance</span>
                                <span class="meta-wrapper">
                                    <span class="date-post">January 21, 2020</span>
                                </span>
                            </span>

                            <span class="image-next">
                                <img src="assets/img/services-image/3.jpg" alt="image"/>
                                <span class="post-nav-title">Next</span>
                            </span>
                        </a>
                    </div>
                </div>
            </div> */}
            <Quote allInsurances={props.allInsurances}/>
        </div>
    </div>
</section>
    
    </Layout>
    );

}

BlogTemplate.getInitialProps = async function(ctx) {
  const { slug } = ctx.query
  const content = await import(`../../services/${slug}.md`)
  const config = await import(`../../data/config.json`)
  const data = matter(content.default);

  const posts = (context => {
    const keys = context.keys();
    const values = keys.map(context);
    const data = keys.map((key, index) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\\/]/, "")
        .split(".")
        .slice(0, -1)
        .join(".");
      const value = values[index];
      // Parse yaml metadata & markdownbody in document
      const document = matter(value.default);
      return {
        document,
        slug
      };
    });
    return data;
  })(require.context("../../services", true, /\.md$/));

  return {
    allInsurances: posts,
    siteTitle: config.title,
    ...data
  }
}