import React from 'react'
import Link from 'next/link'
import Date from '../../components/Date'
export default function Blog(props) {
  const data= props.data  
  const frontmatter= props.frontmatter
  console.log(data)
  return (
        <section className="blog-area pb-70" style={{marginTop:"50px"}}>
        <div className="container">
          <div className="section-title">
            <div className="divider"></div>
            {/* <span>Blog</span> */}
            <h2> {frontmatter.blogTitle} </h2>
            <p> {frontmatter.blogHeader} </p>
          </div>
          <div className="row">
          {
            data.map(item=>{
         function MyImageComponent() {
  const {src} = useImage({
    srcList: 'https://www.example.com/foo.jpg',
  })

  return <img src={src} />
}
              return(
                
                <div className="col-lg-4 col-md-6" key={item.id}>
                <div className="single-blog wow fadeInUp" data-wow-delay=".2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp'}}>
                <Link href="/blog/[slug]" as={`/blog/${item.slug}`}>
                <a>
                    <img src={`http://dashboard.zsicgi.co.zm/${item.image.url}`}  alt="Image" height="100" />
                  </a>
                </Link>
                  <div className="blog-content">
                    <ul>
                      <li>
                     
                        <Date dateString={item.createdAt}/>
                      </li>
                      <li>
                        {/* <a href="index.html#">By Admin</a> */}
                      </li>
                    </ul>
                   <Link href="/blog/[slug]" as={`/blog/${item.slug}`} >
                   <a >
                      <h3>{item.title}</h3>
                    </a>
                   </Link>
                 <Link href="/blog/[slug]" as={`/blog/${item.slug}`} >
                 <a  className="read-more">
                      Read More
                      <i className="bx bx-plus" />
                    </a>
                 </Link>
                  </div>
                </div>
              </div>
              )
            })
          }
            {/* <div className="col-lg-4 col-md-6">
              <div className="single-blog wow fadeInUp" data-wow-delay=".3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp'}}>
                <a href="blog-details.html">
                  <img src="assets/img/blog/2.jpg" alt="Image" />
                </a>
                <div className="blog-content">
                  <ul>
                    <li>
                      11 April 2020
                    </li>
                    <li>
                      <a href="index.html#">By Admin</a>
                    </li>
                  </ul>
                  <a href="blog-details.html">
                    <h3>Global Trends In The Life Insurance Industry</h3>
                  </a>
                  <a href="blog-details.html" className="read-more">
                    Read More
                    <i className="bx bx-plus" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
              <div className="single-blog wow fadeInUp" data-wow-delay=".4s" style={{visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp'}}>
                <a href="blog-details.html">
                  <img src="assets/img/blog/3.jpg" alt="Image" />
                </a>
                <div className="blog-content">
                  <ul>
                    <li>
                      13 April 2020
                    </li>
                    <li>
                      <a href="index.html#">By Admin</a>
                    </li>
                  </ul>
                  <a href="blog-details.html">
                    <h3>Where And How To Watch Live Stream Today</h3>
                  </a>
                  <a href="blog-details.html" className="read-more">
                    Read More
                    <i className="bx bx-plus" />
                  </a>
                </div>
              </div>
            </div>
           */}
          </div>
        </div>
      </section>
      
    )
}
