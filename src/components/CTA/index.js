import Link from 'next/link'
const CAT =(props)=>(
        <section className="ctr-area">
        <div className="container">
            <div className="ctr-content">
                <h2> {props.data.cta_title} </h2>
                <p>{props.data.cta_sub_title}</p>
               <Link href="/insurance-quotation"><a className="default-btn">Contact Us <i className="flaticon-right-chevron"></i><span> </span></a></Link>
            </div>

            <div className="ctr-image">
                <img src="assets/img/ctr-img.jpg" alt="image"/>
            </div>

            <div className="shape">
                <img src="assets/img/bg-dot3.png" alt="image"/>
            </div>
        </div>
    </section>
    )

export default CAT