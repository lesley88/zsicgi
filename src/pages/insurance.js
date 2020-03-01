import matter from 'gray-matter'

import Layout from "../layout";
import InsuranceList from "../components/Services/InsuranceList";

const Index = (props) => {
  return (
    <Layout pathname="/" siteTitle={props.title} siteDescription={props.description}>
         <div class="page-title-area page-title-bg3">
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container">
                        <div class="page-title-content">
                            <h1 style={{color:"#fff"}}>Insurance Services</h1>
                            <ul style={{color:"#fff"}} >
                                <li>Home</li>
                                <li>Business Insurance</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
      <section>
        <InsuranceList allInsurances={props.allInsurances}/>
      </section>
    </Layout>
  );
};

export default Index;

Index.getInitialProps = async function() {
  
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
    
  }
}