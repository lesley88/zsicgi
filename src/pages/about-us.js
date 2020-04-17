import Link from "next/link";
import matter from "gray-matter";
import DefaultLayout from "../layout";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import Quote from "../components/Quote";
import styled from 'styled-components';

const Leadership = styled.div`
overflow-x:auto;
width: 100%;
text-align: center;
padding-bottom: 100px;
table{
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
th{
    color: #fff
}
`;

const AboutUS =(props)=>{
    const frontmatter = props.data
    const markdownBody = props.content
    return(
        <DefaultLayout>
            <Head>
                <title> {frontmatter.seo_title} </title>
            </Head>
             <div class="page-title-area page-title-bg3" style={{backgroundImage:`url(${frontmatter.image})`}}>
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container">
                        <div class="page-title-content">
                            <h2>{frontmatter.title}</h2>
                            <ul>
                            <li><Link href="/"><a>Home</a></Link></li>
                                <li>{frontmatter.title}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
             <section class="about-area ptb-100 bg-f8f8f8">
                 <div class="container">
                     <div class="row align-items-center">
                         <div class="col-lg-6 col-md-12" style={{alignItems:"center"}}>
                             <div class="about-image">
                                 <img src={`${frontmatter.image}`} alt={frontmatter.seo_title} height="auto" width="100%"/>
                                
                             </div>
                         </div>
     
                         <div class="col-lg-6 col-md-12">
                             <div class="about-content">
                                 <span> {frontmatter.title} </span>
                                 <h2>{frontmatter.heading} </h2>
                                 <p> {frontmatter.description} </p>
                             </div>
                         </div>
                     </div>
                        <div className="container" style={{marginTop:"0px"}}>
                            <div className="row">
                                <div className="col-md-7 about-content">
                                <ReactMarkdown source={markdownBody} />
                                </div>
                                <div className="col-md-5">
                 
                        <div className="tab quote-list-tab" style={{marginTop:100}}>
                          
                            <div className="tab_content">

                                <div className="tabs_item">
                                    <p>Our experts will reply you with a quote very soon</p>
                                    <form>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Your Name"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Your Email"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Your Phone"/>
                                        </div>
                                        <div className="form-group">
                                            <textarea type="text" className="form-control" placeholder="Details" style={{textTransform:"capitalize"}}/>
                                        </div>
                                        <div className="form-group">
                                            <select>
                                                <option value="1">Property Used For</option>
                                                {props.allInsurances.map(item=>(
                                                <option key={props.allInsurances.slug} style={{textTransform:"capitalize"}}>{item.document.data.title} </option>
                                                ))}
                                            </select>
                                        </div>
                                        <button type="submit" className="default-btn">Get A Free Quote <span></span></button>
                                    </form>
                                </div>

                             
                                   
                            
                        </div>
                    </div>
                                </div>

                            </div>
                        </div>
                     <div class="about-inner-area">
                         <div class="row">
                             <div class="col-lg-4 col-md-6 col-sm-6">
                                 <div class="about-text-box">
                                     <h3>Vission</h3>
                                     <p> {frontmatter.vision} </p>
                                 </div>
                             </div>
     
                             <div class="col-lg-4 col-md-6 col-sm-6">
                                 <div class="about-text-box">
                                     <h3>Our Mission</h3>
                                     <p> {frontmatter.mission} </p>
                                 </div>
                             </div>
     
                             <div class="col-lg-4 col-md-6 offset-lg-0 offset-md-3 offset-sm-3 col-sm-6">
                                 <div class="about-text-box">
                                     <h3>Values</h3>
                                     <p> {frontmatter.values.map(item=>(
                                         <ul className="about-us">
                                             <li> {item.items} </li>
                                         </ul>
                                     ))} </p>
                                 </div>
                             </div>
                             <Leadership>
        <h1>Our Leadership</h1>
      <table style={{width:"70%"}}>
  <tr>
    <th>Name</th>
    <th>Position</th> 
 
  </tr>
  <tr>
    <td>Charles Kapoma Nakhoze</td>
    <td>Managing Director</td> 
  </tr>
  <tr>
    <td>Lloyd Chembo</td>
    <td>Director-Finance & Administration.</td> 
   
  </tr>
  <tr>
    <td>Conrad Sichande</td>
    <td>Director Legal & Corporate Services</td>
  </tr>
  <tr>
    <td>Sylvia K. Nguluwe </td>
    <td>Director-Technical Operations </td>
  </tr>
  <tr>
    <td>Mizinga Masinja</td>
    <td>Director – Branches Operations</td>
  </tr>
  <tr>
    <td>Yvonne Kamana
Nyirongo
</td>
    <td>Assistant Director-Reinsurance</td>
  </tr>
  <tr>
    <td>Priscilla Machobani</td>
    <td>Manager Human Capital</td>
  </tr>
  <tr>
    <td>Kuda Ngoma</td>
    <td>Assistant Director  Marketing</td>
  </tr>
  <tr>
    <td>Gertrude Mwanza</td>
    <td>Assistant Director
Enterprise Risk
</td>
  </tr>
</table>
      </Leadership>
                         </div>
                     </div>
                 </div>
             </section>
        </DefaultLayout>
     )
}

AboutUS.getInitialProps = async function() {
    const content = await import(`../data/about.md`)
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

export default AboutUS