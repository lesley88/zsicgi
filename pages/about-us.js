import React from 'react';
import Layout from '../layout';
import Link from 'next/link';
import matter from 'gray-matter';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
const htmlParser = require('react-markdown/plugins/html-parser')

const parseHtml = htmlParser({
  isValidNode: node => node.type !== 'script',
  processingInstructions: [/* ... */]
})

function flatten(text, child) {
  return typeof child === 'string'
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text)
}

function HeadingRenderer(props) {
  var children = React.Children.toArray(props.children)
  var text = children.reduce(flatten, '')
  var slug = text.toLowerCase().replace(/\W/g, '-')
  return React.createElement('h' + props.level, {id: slug}, props.children)
}
const Leadership = styled.div`
  overflow-x: auto;
  width: 100%;
  text-align: center;

  padding-bottom: 100px;
  table {
    margin: 0 auto;
    text-align: center;
    th,
    td {
      padding: 15px;
    }
  }
  table,
  th,
  td {
  }

  tr {
    th {
      background-color: #cca352;
    }
  }
  tr:hover {
    background-color: #f5f5f5;
  }
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  th {
    color: #fff;
  }
`;

export default function about(props) {
  const frontmatter = props.frontmatter;
  const markdownBody = props.markdownBody;

  return (
    <Layout>
      <Head>
        <title> {props.frontmatter.title} </title>
      </Head> <div className="page-title-area bg-17" style={{background:`url(${frontmatter.image})`, backgroundSize:"cover"}}>
        <div className="container">
          <div className="page-title-content">
            <h2>About</h2>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>About</li>
            </ul>
          </div>
        </div>
      </div>
     

      <div className="container" style={{marginTop: '0px'}}>
        <div className="row">
          <div className="col-md-8 offset-2 about-content">
            <ReactMarkdown 
             renderers={{Heading: HeadingRenderer}}
             escapeHtml={false}
             astPlugins={[parseHtml]}
            source={markdownBody} />
          </div>
          <div>
            {/* <div className="tab quote-list-tab" style={{marginTop:100}}>
                          
                            <div className="tab_content">

                                <div className="tabs_item">
                                    <p>Our experts will reply you with a quote very soon</p>
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
                                            <select>
                                                <option value="1">Property Used For</option>
                                                {props.allInsurances.map(item=>(
                                                <option key={props.allInsurances.slug} style={{textTransform:"capitalize"}}>{item.document.data.title} </option>
                                                ))}
                                            </select>
                                        </div>
                                        <button type="submit" className="default-btn">Get A Free Quote <span></span></button>
                                    </form>
                                </div>

                             
                                   
                            
                        </div>
                    </div>
                                */}
          </div>
        </div>
      </div>
      <div className="container">
        <div
          className="about-inner-area text-center"
          style={{padding: 50, marginTop: 40}}>
          {/* <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text-box">
                  <h3>Vission</h3>
                  <p> {frontmatter.vision} </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text-box">
                  <h3>Our Mission</h3>
                  <p> {frontmatter.mission} </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3 offset-sm-3 col-sm-6">
                <div className="about-text-box">
                  <h3>Values</h3>
                  <p>
                    {' '}
                    {frontmatter.values.map((item) => (
                      <ul className="about-us">
                        <li> {item.items} </li>
                      </ul>
                    ))}{' '}
                  </p>
                </div>
              </div>
            </div>
            */}
          <section className="choose-us-area pt-100 pb-70">
            <div className="container">
              {/* <div className="section-title">
                <span>Why Choose Us</span>
                <h2>We are Dedicated to Support You </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida.
                </p>
              </div> */}
              <div className="row">
                <div className="col-lg-4 col-sm-6">
                  <div
                    className="single-choose wow fadeInUp"
                    data-wow-delay=".2s"
                    style={{
                      height: '250px !important',
                      visibility: 'visible',
                      animationDelay: '0.2s',
                      animationName: 'fadeInUp',
                    }}>
                    <h3>Vission</h3>
                    <p>{frontmatter.vision}e</p>

                    <span className="choose-icon flaticon-kindness" />
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div
                    className="single-choose wow fadeInUp"
                    data-wow-delay=".3s"
                    style={{
                      height: '250px !important',
                      visibility: 'visible',
                      animationDelay: '0.3s',
                      animationName: 'fadeInUp',
                    }}>
                    <h3>Our Mission</h3>
                    <p>{frontmatter.mission}</p>

                    <span className="choose-icon flaticon-target" />
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
                  <div
                    className="single-choose wow fadeInUp"
                    data-wow-delay=".4s"
                    style={{
                      height: '250px !important',
                      visibility: 'visible',
                      animationDelay: '0.4s',
                      animationName: 'fadeInUp',
                    }}>
                    <h3>Values</h3>
                    <p>
                      {frontmatter.values.map((item) => (
                        <ul className="about-us">
                          <li> {item.items} </li>
                        </ul>
                      ))}
                    </p>
                    <span className="choose-icon flaticon-support" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="row " style={{marginTop: 100}}>
            <div className="col-md-8 offset-2">
              <Leadership>
                <h1 className="text-center">Our Leadership</h1>
                <table style={{width: '70%', margin: 'auto'}}>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                  </tr>
                  <tr>
                    <td>Charles Kapoma Nakhoze</td>
                    <td>Managing Director</td>
                  </tr>
                  <tr>
                    <td>Lloyd Chembo</td>
                    <td>Director-Finance & Administration.</td>
                  </tr>
                  <tr>
                    <td>Conrad Sichande</td>
                    <td>Director Legal & Corporate Services</td>
                  </tr>
                  <tr>
                    <td>Sylvia K. Nguluwe </td>
                    <td>Director-Technical Operations </td>
                  </tr>
                  <tr>
                    <td>Mizinga Masinja</td>
                    <td>Director – Branches Operations</td>
                  </tr>
                  <tr>
                    <td>Yvonne Kamana Nyirongo</td>
                    <td>Assistant Director-Reinsurance</td>
                  </tr>
                  <tr>
                    <td>Priscilla Machobani</td>
                    <td>Manager Human Capital</td>
                  </tr>
                  <tr>
                    <td>Kuda Ngoma</td>
                    <td>Assistant Director Marketing</td>
                  </tr>
                  <tr>
                    <td>Gertrude Mwanza</td>
                    <td>Assistant Director Enterprise Risk</td>
                  </tr>
                </table>
              </Leadership>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const content = await import(`../data/about.md`);
  const data = matter(content.default);

  return {
    props: {
      frontmatter: data.data,
      markdownBody: data.content,
    },
  };
}
