import React, { Component } from 'react'
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import matter from 'gray-matter'
import Layout from '../layout'
import Hero from '../components/Hero';
import AboutUS from '../components/AboutUS';
import Service from '../components/Services/HomeServices';
import WhyUs from '../components/WhyUS';
import Quote from '../components/Quote';
import CAT from '../components/CTA';
import HomeBlog from '../components/Blog/Home';

// const News =(props)=>(
//   <ul>
//     {props.data.map(show => (
//       <li key={show.id}>
//         <Link href={`/news?uid=${show.uid}`} as={`/news?uid=${show.uid}`}  passHref>
//           <a>{show.title}</a>
//         </Link>
//       </li>
//     ))}
//   </ul>
// )

const Index = props => (
  <Layout allInsurances={props.allInsurances}>
   <Hero data={props.data}/>
   <AboutUS data={props.data}/>
   <Service data={props.data}/>
   <WhyUs data={props.data}/>
  
   <Quote allInsurances={props.allInsurances}/>
   <HomeBlog data={props.data}/>
   <CAT data={props.data}/>
  </Layout>
);

// Index.getInitialProps = async function() {
//   const res = await fetch(' http://localhost:3002/news');
//   const data = await res.json();

//   console.log(`Show data fetched. Count: ${data.Title}`);

//   return {
//     data
//   };
// };

Index.getInitialProps = async function() {
  const content = await import(`../data/home.md`)
  const data = matter(content.default)

  //get posts & context from folder
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
 })(require.context("../services", true, /\.md$/));

 return {
   allInsurances: posts,
   ...data
 }
}

export default Index;