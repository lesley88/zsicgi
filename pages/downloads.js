// 

/**
 *
 * Dowloads
 *
*/

import React from 'react';
import Helmet from 'next/head';
import Link from 'next/link'
import styled from 'styled-components';
import matter from 'gray-matter'
import DefaultLayout from '../layout';
import Banner from '../components/Banner';

const HeroWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 100px;
  top: 100px;
  height: 300px;
  padding: 100px;
  background: #000;
  background-size: cover;
  background-position: center center;
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
    font-weight: 400;
    font-family: 'Lato', sans-serif;
    font-size: 50px;
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
font-size: 18px;
justify-content: center;
align-items: center;
width: 100%;
margin: 0;
padding: 0;
text-align: center;
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
align-text: justify: center;
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
ul{
  padding: 0px;
}
ul li {
  display: block;
  text-align: left;
  position: relative;
  display: block;
  font-size: 16px;
  font-weight: 200;
  list-style: none;
  text-align: left;
  text-underline: none;
    &:hover {
      border-bottom: 3px solid #cca352;
      border: none;
      }
    }
  button{
    &:hover{
      color: #ff0022;
      cursor: grab;
    }
  }

}
ul li::before{
  font-family: FontAwesome;;
        text-decoration: none;
        content: '\f1c1';
        position: relative;
        padding: 8px;
        font-size: 18px;
        color: #cca352;
        
}

div {
  margin: 60px;
  text-align: justify;
}
`;

const ImageProduct = styled.div`
  width: 100%;
  height: auto;
 
  @media(max-width:620px){
    height: 300px;
  }
`;

const ImageProductMobile = styled.div`
  width: 100%;
  height: auto;
  @media(min-width:1020px){
    display: none;
  }
`;
const ImageProductMobileSecond = styled.div`
  width: 100%;
  height: auto;
  @media(max-width:1020px){
    display: none;
  }
`;

const PDFView = styled.div`
  width: 100px;
  height: 50px;
`;

const DownloadsWrapper = styled.div`
overflow-x:auto;
width: 100%;
text-align: center;
padding-bottom: 100px;
table{
  padding-bottom: 100px;
  top: 50px;
  margin: 0 auto;
  text-align: center;
  th, td {
    padding: 15px;
  }

}
table, th, td {

}

  tr{
    th{
     background-color: #cca352;
     
    }
}
tr:hover {background-color: #f5f5f5;}
tr:nth-child(even) {background-color: #f2f2f2;}
`;



const Title = styled.h1`
  padding-top: 60px;
  margin-top: 100px;
  flex-direction: row;
  margin: 10px;
`;

/* eslint-disable react/prefer-stateless-function */
export class Dowloads extends React.PureComponent {
  
   constructor(props){
       super(props);
       this.state ={
           frontmatter:[],
       }
   }

  renderTableHeader(){
    let header = ["Form Category", "Downloads"]
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
 }
  
  renderDownloads(){
      return this.props.downloads.map((item, index) =>{
        
        return(
          
        <tr key={item.id}>
          <td><b>{item.name}</b></td>
          <td><b><Link href={`/downloads/${item.id}`} as={`/downloads/${item.id}`} ><a>Downloads</a></Link></b></td>
          
            {/* <ListItem >
                 {/*  <DocumentWrapper
                    file={{url: `http://dashboard.zsicgi.co.zm/${item.file.url}`}}
                    onLoadSuccess={this.onDocumentLoadSuccess}
                    height="50"
                    width="30"
                  >
                  
                    <PDFView>
                    <Page pageNumber={pageNumber} />
                    </PDFView>
                  </DocumentWrapper> */}
                  {/* <a href={`http://dashboard.zsicgi.co.zm/${item.file.url}`}>
                    Download
                  </a> 
            </ListItem> */}
        </tr>
        )
      })
  }




  render() {
    return(
        <DefaultLayout>
               {/* <HeroWrapper>
                <Text id='name'>ZSIC General Inusrance Files</Text>
                </HeroWrapper> */}
                 <div class="page-title-area bg-17" style={{background:"#000"}}>
        <div class="container">
          <div class="page-title-content">
            <h2 style={{textTransform: 'capitalize'}}>ZSIC General Inusrance Files </h2>
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>

              <li>Insurance</li>

              <li style={{textTransform: 'capitalize'}}>Downloads</li>
            </ul>
          </div>
        </div>
      </div>
            <DownloadsWrapper>
           
                <Title>Forms and File Downloads</Title>
                <table style={{padding:"200px"}}>
                <tbody>
                <tr>{this.renderTableHeader()}</tr>
                {this.renderDownloads()}
            
                </tbody>
                </table>
            </DownloadsWrapper>
        </DefaultLayout>
    );
  }
}

export async function getStaticProps(){
    const content = await import(`../data/home.md`)
    const data = matter(content.default)
    const res = await fetch(`https://dashboard.zsicgi.co.zm/tags`)
    const downloads = await res.json()
    // console.log(downloads)
    return{
        props:{
            frontmatter: data.data,
            downloads
        }
    }
}
export default (Dowloads);