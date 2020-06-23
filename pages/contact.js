import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

import Layout from '../layout'
export default function contact({frontmatter, markdownBody}) {
    // const data = props.frontmatter
    return (
      <Layout>
        <Head>
          <title>{frontmatter.title} </title>
        </Head>
        <div className="page-title-area bg-14" style={{background:`url(${frontmatter.image})`, backgroundSize:"cover"}}>
          <div className="container">
            <div className="page-title-content">
              <h2>{frontmatter.title}</h2>
              <ul>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>contact</li>
              </ul>
            </div>
          </div>
        </div>
        <section className="contact-area ptb-100">
  <div className="container">
    <div className="row">
      <div className="col-lg-8">
        <div className="contact-wrap">
          <div className="contact-form">
            <div className="section-title">
              <h2></h2>
            </div>
            <form id="contactForm" noValidate="true">
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <div className="form-group">
                    <input type="text" name="name" id="name" className="form-control" required data-error="Please enter your name" placeholder="Your Name" style={{backgroundImage: 'url("data:image/png', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', backgroundSize: '16px 18px', backgroundPosition: '98% 50%'}} />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="form-group">
                    <input type="email" name="email" id="email" className="form-control" required data-error="Please enter your email" placeholder="Your Email" />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="form-group">
                    <input type="text" name="phone_number" id="phone_number" required data-error="Please enter your number" className="form-control" placeholder="Your Phone" />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="form-group">
                    <input type="text" name="msg_subject" id="msg_subject" className="form-control" required data-error="Please enter your subject" placeholder="Your Subject" />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <textarea name="message" className="form-control" id="message" cols={30} rows={5} required data-error="Write your message" placeholder="Your Message" defaultValue={""} />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <button type="submit" className="default-btn page-btn disabled" style={{pointerEvents: 'all', cursor: 'pointer'}}>
                    Send Message
                  </button>
                  <div id="msgSubmit" className="h3 text-center hidden" />
                  <div className="clearfix" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="quick-contact">
          <h3>Quick Contact </h3>
          <ul>
            <li>
              <i className="flaticon-maps-and-flags" />
              Location:
              <span>ZSIC General Insurance Limited
Premium House
P.O.BOX 30894
LUSAKA</span>
            </li>
            <li>
              <i className="flaticon-call" />
              Call Us:
              <a href="tel:+260(211)229345">+260 211 229345 / 57</a>
            </li>
            <li>
              <i className="flaticon-email" />
              Email Us:
              <a href="mailto:info@zsicgi.co.zm">
              info@zsicgi.co.zm
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
<div class="map-area">
<iframe  id="gmap_canvas" src="https://maps.google.com/maps?q=ZSIC%20General%20Insurance%20Limited%2C%20Premium%20House%2C%20Kwame%20Cl%2C%20Lusaka&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
		</div>
      </Layout>
    );
}


export async function getStaticProps() {
    const content = await import(`../data/contact.md`);
    const data = matter(content.default);
  
    return {
      props: {
        frontmatter: data.data,
        markdownBody: data.content,
      },
    };
  }
  
