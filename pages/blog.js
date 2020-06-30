import React from 'react'
import Link from 'next/link'
import matter from 'gray-matter'
import TextTruncate from 'react-text-truncate'


import Layout from '../layout'
import Banner from "../components/Banner";
import Date from '../components/Date';

export default function blog({posts, frontmatter}) {
  const data = frontmatter
    return (
       <Layout>
          <Banner data={frontmatter}/>
          <section className="blog-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="single-blogs-area">
                <div className="row">
                  {posts.map(item=>{
                    return(
                      <div className="col-lg-6 col-md-6" key={item.id}>
                      <div className="single-blog wow fadeInUp" data-wow-delay=".2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp'}}>
                        <a href="blog-details.html">
                          <img src={`https://dashboard.zsicgi.co.zm/news/${item.cover.url}`} alt={item.cover.alternativeText} />
                        </a>
                        <div className="blog-content">
                          <ul>
                            <li>
                              <Date dateString={item.createdAt} />
                            </li>
                            {/* <li>
                              <a href="blog-right-sidebar.html#">By Admin</a>
                            </li> */}
                          </ul>
                          <a >
                            <h3> {item.title} </h3>
                          </a>
                          <p>
                          <TextTruncate
    line={3}
    element="span"
    truncateText="…"
    text={item.body}
    textTruncateChild={<Link href="/blog/[slug]" as={`/blog/${item.slug}`}>
    <a className="read-more">Read More <i className="bx bx-plus" /></a>
    </Link>}
/>
                          </p>
                          {/* <a href="blog-details.html" >
                            Read More
                            
                          </a> */}
                        </div>
                      </div>
                    </div>
                   
                    )
                  })}
                
                  
                  {/* <div className="col-lg-12">
                    <div className="page-navigation-area">
                      <nav>
                        <ul className="pagination">
                          <li className="page-item">
                            <a className="page-link page-links" href="blog-right-sidebar.html#">
                              <i className="bx bx-chevrons-left" />
                            </a>
                          </li>
                          <li className="page-item active">
                            <a className="page-link" href="blog-right-sidebar.html#">1</a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="blog-right-sidebar.html#">2</a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="blog-right-sidebar.html#">3</a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="blog-right-sidebar.html#">
                              <i className="bx bx-chevrons-right" />
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                 */}
                
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              {/* <aside className="widget-area" id="secondary">
                <div className="widget widget_search">
                  <h3 className="widget-title">Search Now</h3>
                  <div className="post-wrap">
                    <form className="search-form">
                      <label>
                        <span className="screen-reader-text">Search for:</span>
                        <input type="search" className="search-field" placeholder="Search..." />
                      </label>
                      <button type="submit"><i className="bx bx-search" /></button>
                    </form>
                  </div>
                </div>
                {/* <section className="widget widget-peru-posts-thumb">
                  <h3 className="widget-title">Popular Posts</h3>
                  <div className="post-wrap">
                    <article className="item">
                      <a href="blog-details.html" className="thumb">
                        <span className="fullimage cover bg1" role="img" />
                      </a>
                      <div className="info">
                        <time dateTime="2020-06-30">April 20, 2020</time>
                        <h4 className="title usmall">
                          <a href="blog-details.html">
                            Where And How To Watch Live Stream Today
                          </a>
                        </h4>
                      </div>
                      <div className="clear" />
                    </article>
                    <article className="item">
                      <a href="blog-details.html" className="thumb">
                        <span className="fullimage cover bg2" role="img" />
                      </a>
                      <div className="info">
                        <time dateTime="2020-06-30">April 21, 2020</time>
                        <h4 className="title usmall">
                          <a href="blog-details.html">
                            The Five Devices You Need To Work Anytime
                          </a>
                        </h4>
                      </div>
                      <div className="clear" />
                    </article>
                    <article className="item">
                      <a href="blog-details.html" className="thumb">
                        <span className="fullimage cover bg3" role="img" />
                      </a>
                      <div className="info">
                        <time dateTime="2020-06-30">April  22, 2020</time>
                        <h4 className="title usmall">
                          <a href="blog-details.html">
                            Blackpool Polices Hunt For David Schwinger
                          </a> 
                        </h4>
                      </div>
                      <div className="clear" />
                    </article>
                    <article className="item">
                      <a href="blog-details.html" className="thumb">
                        <span className="fullimage cover bg4" role="img" />
                      </a>
                      <div className="info">
                        <time dateTime="2020-06-30">April 23, 2020</time>
                        <h4 className="title usmall">
                          <a href="blog-details.html">
                            Do You Do The Fixing And The Execution Of Yourselves?
                          </a>
                        </h4>
                      </div>
                      <div className="clear" />
                    </article>
                  
                  
                  </div>
                </section> */}
                {/* <section className="widget widget_categories">
                  <h3 className="widget-title">Archives</h3>
                  <div className="post-wrap">
                    <ul>
                      <li>
                        <a href="blog-right-sidebar.html#">January <span>2020</span></a>
                      </li>
                      <li>
                        <a href="blog-right-sidebar.html#">February <span>2020</span></a>
                      </li>
                      <li>
                        <a href="blog-right-sidebar.html#">March <span>2020</span></a>
                      </li>
                      <li>
                        <a href="blog-right-sidebar.html#">April <span>2020</span></a>
                      </li>
                      <li>
                        <a href="blog-right-sidebar.html#">May <span>2020</span></a>
                      </li>
                      <li>
                        <a href="blog-right-sidebar.html#">June <span>2020</span></a>
                      </li>
                    </ul>
                  </div>
                </section>
                 */}
                {/* <section className="widget widget_categories">
                  <h3 className="widget-title">Categories</h3>
                  <div className="post-wrap">
                    <ul>
                      <li>
                        <a href="blog-right-sidebar.html#">Mother border <span>(10)</span></a>
                      </li>
                      <li>
                        <a href="blog-right-sidebar.html#">Tweezers <span>(20)</span></a>
                      </li>
                      <li>
                        <a href="blog-right-sidebar.html#">Cotton Swabs <span>(10)</span></a>
                      </li>
                      <li>
                        <a href="blog-right-sidebar.html#">Grounding Strap <span>(12)</span></a>
                      </li>
                      <li>
                        <a href="blog-right-sidebar.html#">Prebuilt Tool Kits <span>(16)</span></a>
                      </li>
                      <li>
                        <a href="blog-right-sidebar.html#">Hex Driver <span>(17)</span></a>
                      </li>
                    </ul>
                  </div>
                </section>
                 */}
                {/* <section className="widget widget_tag_cloud">
                  <h3 className="widget-title">Tags</h3>
                  <div className="post-wrap">
                    <div className="tagcloud">
                      <a href="blog-right-sidebar.html#">Auto (3)</a>
                      <a href="blog-right-sidebar.html#">Home (3)</a>
                      <a href="blog-right-sidebar.html#">Car (2)</a>
                      <a href="blog-right-sidebar.html#">Health (2)</a>
                      <a href="blog-right-sidebar.html#">Life (1)</a>
                      <a href="blog-right-sidebar.html#">Help </a>
                    </div>
                  </div>
                </section>        *
              </aside>
             */}
            </div>
          
          </div>
        </div>
      </section>
      
       </Layout>
    )
}


export async function getStaticProps() {
  const content = await import(`../data/blog.md`)
  const data = matter(content.default)
  const res = await fetch('https://dashboard.zsicgi.co.zm/news')
const posts = await res.json()

  return {
    props: {
      frontmatter: data.data,
      posts
     
    },
  }
}