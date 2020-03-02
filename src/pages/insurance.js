import matter from 'gray-matter'

import Layout from "../layout";
import InsuranceList from "../components/Services/InsuranceList";
import Head from 'next/head';

const Index = (props) => {
  const data = props.data
  return (
    <Layout pathname="/" siteTitle={props.title} siteDescription={props.description}>
      <Head>
        <title> {data.title} </title>
      </Head>
         <div class="page-title-area page-title-bg3" style={{backgroundImage:`url(${data.image})`}}>
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container">
                        <div class="page-title-content">
                            <h1 style={{color:"#fff"}}> {data.title} </h1>
                            <ul style={{color:"#fff"}} >
                           
                                <li>
                                  <h2 style={{fontSize:"26px", color:"#cca352"}}> {data.intro} </h2>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
      <section>
        <InsuranceList 
        
        allInsurances={props.allInsurances}/>
      </section>
    </Layout>
  );
};

export default Index;

Index.getInitialProps = async function() {
  const content = await import(`../data/services.md`)
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
      }
    });
    return data;
  })(require.context("../services", true, /\.md$/,5));

  return {
    allInsurances: posts,
    ...data
    
  }
}