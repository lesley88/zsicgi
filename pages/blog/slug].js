import React from 'react'
import Head from 'next/head'
import Layout from '../../layout'
import ReactMarkdown from 'react-markdown'
import { parseISO, format } from 'date-fns'
import Link from 'next/link'

import Date from '../../components/Date'


export default function Blog({post, recent}) {
  const seo = post.seo
  // const content = post.body.map(
  //   item=>{
  //     return item.body
  //   }
  // )
 
  
    return (
    <Layout>
      <Head>
        <title> {seo.title || post.title} </title>
      </Head>
      <div className="page-title-area bg-13" style={{background:`url(http://localhost:1337${post.cover.url})`, backgroundSize:"cover", backgroundPosition: "center center"}}>
  <div className="container">
    <div className="page-title-content">
      <h2> {post.title} </h2>
      <ul>
        <li>
          <a href="/">
            Home 
          </a>
        </li>
        <li>Blog</li>
    <li> {post.slug}</li>
      </ul>
    </div>
  </div>
</div>

          <section className="blog-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details-desc">
                {/* <div className="article-image">
                  <img src="assets/img/blog-details/blog-details.jpg" alt="image" />
                </div> */}
                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li><span>Posted On:</span> <a href="blog-details.html#"><Date dateString={post.createdAt} /></a></li>
                      {/* <li><span>Posted By:</span> <a href="blog-details.html#">John Anderson</a></li> */}
                    </ul>
                  </div>
    <h3>{post.title}</h3>
                 <ReactMarkdown  source={post.body} />
                </div>
                <div className="article-footer">
                  <div className="article-tags">
                    <span><i className="bx bx-share-alt" /></span>
                    <a href="blog-details.html#">Share</a>
                  </div>
                  <div className="article-share">
                    <ul className="social">
                      <li>
                        <a href="blog-details.html#" target="_blank">
                          <i className="bx bxl-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="blog-details.html#" target="_blank">
                          <i className="bx bxl-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="blog-details.html#" target="_blank">
                          <i className="bx bxl-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href="blog-details.html#" target="_blank">
                          <i className="bx bxl-pinterest-alt" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="post-navigation">
                  <div className="navigation-links">
                    <div className="nav-previous">
                      <a href="blog-details.html#"><i className="bx bx-left-arrow-alt" /> Prev Post</a>
                    </div>
                    <div className="nav-next">
                      <a href="blog-details.html#">Next Post <i className="bx bx-right-arrow-alt" /></a>
                    </div>
                  </div>
                </div>
                {/* <div className="comments-area">
                  <h3 className="comments-title">2 Comments:</h3>
                  <ol className="comment-list">
                    <li className="comment">
                      <div className="comment-body">
                        <footer className="comment-meta">
                          <div className="comment-author vcard">
                            <img src="assets/img/blog-details/comment-img-1.jpg" className="avatar" alt="image" />
                            <b className="fn">John Jones</b>
                            <span className="says">says:</span>
                          </div>
                          <div className="comment-metadata">
                            <a href="blog-details.html#">
                              <span>April  24, 2020 at 10:59 am</span>
                            </a>
                          </div>
                        </footer>
                        <div className="comment-content">
                          <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.</p>
                        </div>
                        <div className="reply">
                          <a href="blog-details.html#" className="comment-reply-link">Reply</a>
                        </div>
                      </div>
                      <ol className="children">
                        <li className="comment">
                          <div className="comment-body">
                            <footer className="comment-meta">
                              <div className="comment-author vcard">
                                <img src="assets/img/blog-details/comment-img-2.jpg" className="avatar" alt="image" />
                                <b className="fn">Steven Smith</b>
                                <span className="says">says:</span>
                              </div>
                              <div className="comment-metadata">
                                <a href="blog-details.html#">
                                  <span>April  24, 2020 at 10:59 am</span>
                                </a>
                              </div>
                            </footer>
                            <div className="comment-content">
                              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim</p>
                            </div>
                            <div className="reply">
                              <a href="blog-details.html#" className="comment-reply-link">Reply</a>
                            </div>
                          </div>
                        </li>
                      </ol>
                    </li>
                    <li className="comment">
                      <div className="comment-body">
                        <footer className="comment-meta">
                          <div className="comment-author vcard">
                            <img src="assets/img/blog-details/comment-img-3.jpg" className="avatar" alt="image" />
                            <b className="fn">John Doe</b>
                            <span className="says">says:</span>
                          </div>
                          <div className="comment-metadata">
                            <a href="blog-details.html#">
                              <span>April  24, 2020 at 10:59 am</span>
                            </a>
                          </div>
                        </footer>
                        <div className="comment-content">
                          <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.</p>
                        </div>
                        <div className="reply">
                          <a href="blog-details.html#" className="comment-reply-link">Reply</a>
                        </div>
                      </div>
                    </li>
                  </ol>
                  <div className="comment-respond">
                    <h3 className="comment-reply-title">Leave a Reply</h3>
                    <form className="comment-form">
                      <p className="comment-notes">
                        <span id="email-notes">Your email address will not be published.</span>
                        Required fields are marked 
                        <span className="required">*</span>
                      </p>
                      <p className="comment-form-author">
                        <label>Name <span className="required">*</span></label>
                        <input type="text" id="author" name="author" required="required" />
                      </p>
                      <p className="comment-form-email">
                        <label>Email <span className="required">*</span></label>
                        <input type="email" id="email" name="email" required="required" />
                      </p>
                      <p className="comment-form-url">
                        <label>Website</label>
                        <input type="url" id="url" name="url" />
                      </p>
                      <p className="comment-form-comment">
                        <label>Comment</label>
                        <textarea name="comment" id="comment" cols={45} rows={5} maxLength={65525} required="required" defaultValue={""} />
                      </p>
                      <p className="form-submit">
                        <input type="submit" name="submit" id="submit" className="submit" defaultValue="Post A Comment" />
                      </p>
                    </form>
                  </div>
                </div>
               */}
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <aside className="widget-area" id="secondary">
                {/* <div className="widget widget_search">
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
                */}
                <section className="widget widget-peru-posts-thumb">
                  <h3 className="widget-title">Recent Post</h3>
                  <div className="post-wrap">
                  {recent.map(item=>(
                      <article className="item">
                      <Link href="/blog/[slug]" as={`/blog/${item.slug}`}>
                      <a className="thumb" >
                         <span className="fullimage cover bg1" role="img" style={{background:`url(http://localhost:1337${post.cover.url})`, backgroundSize:"cover", backgroundPosition: "center center"}}  />
                       {/* <div style={{background:`url(http://localhost:1337${post.cover.url})`, backgroundSize:"cover", backgroundPosition: "center center"}}>
                         
                       </div> */}
                       </a>
                      </Link>
                       <div className="info">
                         <time dateTime="2020-06-30"><Date dateString={item.createdAt} /></time>
                         <h4 className="title usmall">
                          <Link href="/blog/[id]" as={`/blog/${item.slug}`}>
                          <a >
                             {item.title}
                             </a>
                          </Link>
                         </h4>
                       </div>
                       <div className="clear" />
                     </article>
                    
                  ))}
                  </div>
                </section>
                {/* <section className="widget widget_categories">
                  <h3 className="widget-title">Archives</h3>
                  <div className="post-wrap">
                    <ul>
                      <li>
                        <a href="blog-details.html#">January <span>2020</span></a>
                      </li>
                      <li>
                        <a href="blog-details.html#">February <span>2020</span></a>
                      </li>
                      <li>
                        <a href="blog-details.html#">March <span>2020</span></a>
                      </li>
                      <li>
                        <a href="blog-details.html#">April <span>2020</span></a>
                      </li>
                      <li>
                        <a href="blog-details.html#">May <span>2020</span></a>
                      </li>
                      <li>
                        <a href="blog-details.html#">June <span>2020</span></a>
                      </li>
                    </ul>
                  </div>
                </section>
                <section className="widget widget_categories">
                  <h3 className="widget-title">Categories</h3>
                  <div className="post-wrap">
                    <ul>
                      <li>
                        <a href="blog-details.html#">Auto Insurance <span>(10)</span></a>
                      </li>
                      <li>
                        <a href="blog-details.html#">Home Insurance <span>(20)</span></a>
                      </li>
                      <li>
                        <a href="blog-details.html#">Car Insurance <span>(10)</span></a>
                      </li>
                      <li>
                        <a href="blog-details.html#">Health Insurance <span>(12)</span></a>
                      </li>
                      <li>
                        <a href="blog-details.html#">Life Insurance <span>(16)</span></a>
                      </li>
                      <li>
                        <a href="blog-details.html#">Help Insurance <span>(17)</span></a>
                      </li>
                    </ul>
                  </div>
                </section>
                <section className="widget widget_meta">
                  <h3 className="widget-title">Meta</h3>
                  <div className="post-wrap">
                    <ul>
                      <li><a href="log-in.html">Log in</a></li>
                      <li><a href="blog-details.html#">Entries <abbr title="Really Simple Syndication">RSS</abbr></a></li>
                      <li><a href="blog-details.html#">Comments <abbr title="Really Simple Syndication">RSS</abbr></a></li>
                      <li><a href="blog-details.html#">WordPress.org</a></li>
                    </ul>
                  </div>
                </section>
                 */}
                
                {/* <section className="widget widget_tag_cloud">
                  <h3 className="widget-title">Tags</h3>
                  <div className="post-wrap">
                    <div className="tagcloud">
                      <a href="blog-details.html#">Auto (3)</a>
                      <a href="blog-details.html#">Home (3)</a>
                      <a href="blog-details.html#">Car (2)</a>
                      <a href="blog-details.html#">Health (2)</a>
                      <a href="blog-details.html#">Life (1)</a>
                      <a href="blog-details.html#">Help </a>
                    </div>
                  </div>
                </section>       
               */}
              </aside>
            </div>
          </div>
        </div>
      </section>
     
    </Layout>
     
    )
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://dashboard.zsicgi.co.zm/news')
  const posts = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`https://dashboard.zsicgi.co.zm/news?slug=${params.slug}`)
  const data = await res.json()
  const responce = await fetch('https://dashboard.zsicgi.co.zm/news?_limit=3')
  const recent = await responce.json()
  // Pass post data to the page via props
  return { props: { post: data[0], recent } }
}