import styled from 'styled-components'
import matter from 'gray-matter'

import Layout from '../layout'
import HomeHero from '../components/HomeHero'
import About from '../components/Home/About'
import WhyUs from '../components/Home/WhyUs'
import Services from '../components/Home/Services'
import Quote from '../components/Home/Quote'
import Head from 'next/head'

import { getSortedPostsData } from '../lib/data'
import Blog from '../components/Home/Blog'

export default function Home(props) {
    const item = props.frontmatter

    
  return (
    <Layout data={props.frontmatter}>
      <Head>
        <title> {item.title} </title>
      </Head>
      <HomeHero data={props.frontmatter} />
      <About data={props.frontmatter}/>
      {/* <WhyUs data={props.frontmatter}/> */}
      <Services data={props.frontmatter} />
      <Quote data={props.allPostsData} frontmatter={props.frontmatter} />
      <Blog data={props.posts} frontmatter={props.frontmatter}/>
    </Layout>
  );
}

export async function getStaticProps() {
     const content = await import(`../data/home.md`)
     const data = matter(content.default)
     const allPostsData = getSortedPostsData()
     const res = await fetch('https://dashboard.zsicgi.co.zm/news?_limit=3&_sort=createdAt:DESC')
  const posts = await res.json()
   
     return {
       props: {
         frontmatter: data.data,
         allPostsData,
         posts
        
       },
     }
   }
