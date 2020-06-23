import React from 'react'
import Head  from 'next/head';
import Link from 'next/link'
import matter from 'gray-matter'
import styled from 'styled-components';
import DefaultLayout from '../layout';

const HeroWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0;
  top: 0px;
  height: 400px;
  padding: 100px;
  background-image: url('/images/person.jpg');
  background-size: cover;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    content: '';
    width: 100%;
    height: 400px;
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

const List = styled.ul`
  margin:10px;
  padding: 10px;
  margin-top: 10px !important;
  li{
      list-style-type:decimal;
      margin: 20px;
      
  }
`;
export default function Vacancies(props) {
    console.log(props.frontmatter)
    const frontmatter = props.frontmatter
    return (
      <DefaultLayout>
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
     


        <div className="container" style={{ top: 50, margin: 100 }}>
          <div className="row">
            <div className="col-md-8">
              {props.jobs.map((item) => {
                return (
                  <List>
                    <li>
                      {" "}
                      <Link
                        key={item.slug}
                        href={{ pathname: `/careers/${item.slug}` }}
                      >
                        <a> {item.title} </a>
                      </Link>
                    </li>
                  </List>
                );
              })}
            </div>
            <div className="col-md-4">
              <ul class="list-group">
                <h2> Services</h2>
                <li class="list-group-item">
                  <Link href="/agricultural-insurance">
                    <a>Agricultural Insurance</a>
                  </Link>
                </li>
                <li class="list-group-item">
                  <Link href="/personal-insurance">
                    <a>Personal Insurance</a>
                  </Link>
                </li>
                <li class="list-group-item">
                  <Link href="/business-insurance">
                    <a>Business Insurance</a>
                  </Link>
                </li>
                <li class="list-group-item">
                  <Link href="/aviation-insurance">
                    <a>Aviation Insurance</a>
                  </Link>
                </li>
                <li class="list-group-item">
                  <Link href="/accident-insurance">
                    <a>Accident Insurance</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </DefaultLayout>
    );
}

export async function getStaticProps() {
  const content = await import(`../data/careers.md`)
  const data = matter(content.default)
  const res = await fetch('http://localhost:1337/jobs')
const jobs = await res.json()

  return {
    props: {
      frontmatter: data.data,
      jobs
     
    },
  }
}
 