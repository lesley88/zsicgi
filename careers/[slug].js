import * as React from 'react'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'

import Layout from '../../layout'
import Head from 'next/head'
import styled from 'styled-components';

const HeroWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0;
  top: 0px;
  height: 500px;
  padding: 100px;
  background-image: url('/static/images/logo-generali.png');
  background-size: auto;
  background-position: center center;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    content: '';
    width: 100%;
    height: 500px;
    background: rgba(204, 163, 82, 0.6);
  }
`;


const Text = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  font-weight: 700;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: #fff;
  font-size: 70px;

  h1 {
    font-weight: 700;
    font-family: 'Lato', sans-serif;
    font-size: 70px;
    text-decoration: underline;
  }

  h2 {
    font-weight: bold;
    font-family: 'Lato', sans-serif;
  }
  div {
    font-size: 22px;
    font-weight: 300;
  }
`;

const ProductWrapper = styled.div`
padding-top: 0px;
display: flex;
justify-content:center;
aling-items:center;
font-size: 18px;
margin: 10%;
@media (max-width: 620px) {
  padding: 15px;
  margin:15px;
 
}
ol li {
  display: block;
  text-align: left;
  position: relative;
  display: block;
  font-size: 18px;
  font-weight: 200;
  list-style: none;
  text-align: left;
  text-underline: none;
    &:hover {
      border-bottom: 3px solid #cca352;
      border: none;
      }
    }

}
@media (max-width: 1020px) {
  flex-direction: column;
}
`;
const Product = styled.div`
width: 100%;
margin-left: 5%;
margin-right: 5%;
padding-left: 100px;
padding-right: 100px;
text-align: justify;
z-index: 1;
@font-face {
  font-family: 'FontAwesome';
  src: url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.ttf)
}
font-size: 18px;
h1{
  font-weight: 300;
}
div{
  h1{
    text-align: center;
  }
}
ul li {
  display: block;
  text-align: left;
  position: relative;
  display: block;
  font-size: 18px;
  font-weight: 200;
  list-style: none;
  text-align: left;
  text-underline: none;
    &:hover {
      border-bottom: 3px solid #cca352;
      border: none;
      }
    }

}
ul li::before{
  font-family: FontAwesome;;
        text-decoration: none;
        content: '\f00c';
        position: relative;
        padding: 13px;
        font-size: 18px;
        color: #cca352;
        
}

div {
  margin: 60px;
  text-align: justify;
}
@media (max-width: 620px) {
  margin: 10px;
  padding:0
 
}
`;

const ImageProduct = styled.div`
  width: 100%;
  height: auto;
`;

const BannerWrapper = styled.div`
  padding-top: 20px;
  padding-right: 11%;
  padding-left: 11%;
  display: flex;
  color: #fff;
  font-size: 14px;
  background: #cca352;
  h1 {
    font-size: 18px;
  }
  @media (max-width: 948px) {
    flex-direction: column;
  }
`;

const Body = styled.div`
margin-left: 50px Important;
padding: 100px Important;
@media(min-width: 920px){
    margin: 25px;
    padding: 2px;
}
`;

export default function BlogTemplate({jobs, job, frontmatter}) {

  function reformatDate(fullDate) {
    const date = new Date(fullDate)
    return date.toDateString().slice(4)
  }

  /*
   ** Odd fix to get build to run
   ** It seems like on first go the props
   ** are undefined — could be a Next bug?
   */

  

  return (
    <Layout>
      <Head>
        <title> {job.title} </title>
      </Head>
      <div className="page-title-area bg-17" style={{background:`url(${frontmatter.image})`, backgroundSize:"cover"}}>
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
     

      <Body className="container">
        <div className="row">
        <div className="col-md-4">
            <h1>Other Jobs</h1>
            <div>
              <ul class="list-group">
                {jobs.map((item) => (
                  <li class="list-group-item">
                    <Link
                      key={item.slug}
                      href={{ pathname: `/careers/${item.slug}` }}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-md-8">
            <ReactMarkdown source={job.details} />
          </div>
         
        </div>
      </Body>
    </Layout>
  );
}


export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch('http://localhost:1337/jobs')
    const jobs = await res.json()
  
    // Get the paths we want to pre-render based on posts
    const paths = jobs.map((job) => ({
      params: { slug: job.slug },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }
  
  // This also gets called at build time
  export async function getStaticProps({ params }) {
    const content = await import(`../../data/careers.md`)
    const data = matter(content.default)
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`http://localhost:1337/jobs?slug=${params.slug}`)
    const postdata = await res.json()
    const responce = await fetch('http://localhost:1337/jobs?_limit=3')
    const jobs = await responce.json()
    // Pass post data to the page via props
    return { props: {
      frontmatter: data.data,
       job: postdata[0], 
       jobs, 
        } }
  }