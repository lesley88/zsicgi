/**
 *
 * DownloadsTags
 *
 */

import React from 'react';
import Helmet from 'next/head';
import styled from 'styled-components';
import DefaultLayout from '../../layout';

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

const REQ_URL = 'http://dashboard.zsicgi.co.zm/tags'
/* eslint-disable react/prefer-stateless-function */
export class DownloadsTags extends React.Component {


  renderTableHeader(){
    let header = ["Form Title", "Downloads"]
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
 }
  
 renderTitle(){

    return(
      <div>
        <h1>{this.props.item.name}</h1>
      </div>
    )
 }
  renderDownloads(){
      return this.props.item.downloads.map((item, index) =>{
        
        return(
          
        <tr key={item.id}>
          <td><b>{item.title}</b></td>
          <td><b><a href={`http://dashboard.zsicgi.co.zm/${item.file.url}`}>Download File</a></b></td>
          
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
            <DownloadsWrapper>
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
                <Title>{this.renderTitle()}</Title>
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

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('http://dashboard.zsicgi.co.zm/tags')
  const posts = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`http://dashboard.zsicgi.co.zm/tags/${params.id}`)
  const data = await res.json()
  // Pass post data to the page via props
  return { props: { item: data } }
}



 

export default DownloadsTags;