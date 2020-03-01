import Link from "next/link";

const Service = (props)=>{
    const item = props.data;
    return(
        <section class="services-area ptb-100 pb-70">
                <div class="container">
                    <div class="section-title" >
                        <h2 style={{textTransform:"capitalize"}}>{item.service_header}</h2>
                        <p> {item.subheading} </p>
                    </div>
   
                    <div class="row">
                    {item.services.map(sv=>(
       
       
           
           
        <div class="col-lg-4 col-md-6 col-sm-6"  key={sv.item}>
        <div class="single-services-box">
            <div class="icon">
                <i class="flaticon-home-insurance"></i>

                <div class="icon-bg">
                    <img src="assets/img/icon-bg1.png" alt="image"/>
                    <img src="assets/img/icon-bg2.png" alt="image"/>
                </div>
            </div>

                    <h3> <Link href={`/insurance/${sv.link}`}><a class="read-more-btn">{sv.item}</a></Link></h3>
            {sv.sub_services.map(sub=>(
                <ul className="services-list">
                    <li> {sub.item} </li>
                </ul>
            ))}

            <Link href={`/insurance/${sv.link}`}><a class="read-more-btn" style={{marginBottom:"0"}}> {sv.item} </a></Link>

            {/*  {/* <div class="box-shape">
                <img src="assets/img/box-shape1.png" alt="image"/>
                <img src="assets/img/box-shape2.png" alt="image"/>
            </div> */} 
        </div>
    </div>
    ))}
                        
                    </div>
                </div>
                <div style={{margin:"25px", textAlign:"center", fontSize:"30px", color:"#000"}}>
                    <Link href="/insurance">See all our Services</Link>
                </div>
                </section>
    )
}
export default Service