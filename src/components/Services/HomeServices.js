import Link from "next/link";

const Service = (props)=>{
    const item = props.data;
    return(
        <section className="services-area ptb-100 pb-70">
                <div className="container">
                    <div className="section-title" >
                        <h2 style={{textTransform:"capitalize"}}>{item.service_header}</h2>
                        <p> {item.subheading} </p>
                    </div>
   
                    <div className="row">
                    {item.services.map(sv=>(
       
       
           
           
        <div className="col-lg-4 col-md-6 col-sm-6"  key={sv.item}>
        <div className="single-services-box">
            <div className="icon">
                <i className="flaticon-home-insurance"></i>

                <div className="icon-bg">
                    <img src="assets/img/icon-bg1.png" alt="image"/>
                    <img src="assets/img/icon-bg2.png" alt="image"/>
                </div>
            </div>

                    <h3> <Link href={`/insurance/${sv.link}`}><a className="read-more-btn">{sv.item}</a></Link></h3>
            {sv.sub_services.map(sub=>(
                <ul className="services-list" key={sub.item}>
                    <li> {sub.item} </li>
                </ul>
            ))}

            <Link href={`/insurance/${sv.link}`}><a className="read-more-btn" style={{marginBottom:"0"}}> {sv.item} </a></Link>

            {/*  {/* <div className="box-shape">
                <img src="assets/img/box-shape1.png" alt="image"/>
                <img src="assets/img/box-shape2.png" alt="image"/>
            </div> */} 
        </div>
    </div>
    ))}
                        
                    </div>
                </div>
                <div style={{margin:"25px", textAlign:"center", fontSize:"30px", color:"#000"}}>
                    <Link href="/insurance"><a>See all our Services</a></Link>
                </div>
                </section>
    )
}
export default Service