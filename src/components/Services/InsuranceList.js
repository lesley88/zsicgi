import Link from "next/link";
import ReactMarkdown from "react-markdown";

const InsuranceList = (props) => {

  function truncateSummary(content) {
    return content.slice(0, 200).trimEnd();
  }

  function reformatDate(fullDate) {
    const date = new Date(fullDate)
    return date.toDateString().slice(4);
  }

  return (
      <section class="services-area ptb-100 pb-70">
            <div class="container">
                <div class="row">
                {props.allInsurances.length > 1 && props.allInsurances.map(post => (
                    <Link
                    key={post.slug}
                    href={{ pathname: `/insurance/${post.slug}` }}
                  >
                    <a class="col-lg-4 col-md-6 col-sm-6">
                   
                        <div class="services-box" style={{minHeight: "400px"}}>
                            <div class="image">
                            <img src={post.document.data.hero_image} alt={post.document.data.hero_image}
                             style={{width: "100%", height: "100%", }}
                            />
                            </div>
    
                            <div class="content">
                                <h2><Link href={{ pathname: `/insurance/${post.slug}` }}><a>{post.document.data.title}</a></Link></h2>
                                <p> {post.document.data.header} </p>

                                {/* <p style={{textTransform:"lowercase"}}> <ReactMarkdown source={truncateSummary(post.document.content)} /></p> */}
        
                                <Link href={{ pathname: `/insurance/${post.slug}` }}><a class="read-more-btn">Learn More <i class="flaticon-right-chevron"></i></a></Link>
                            </div>
                        </div>
                  
                    </a>
                    </Link>  
                        ))}
                </div>
            </div>
        </section>
  );
};

export default InsuranceList;
