import Link from 'next/link'
const CAT =(props)=>(
        <section class="ctr-area">
        <div class="container">
            <div class="ctr-content">
                <h2> {props.data.cta_title} </h2>
                <p>{props.data.cta_sub_title}</p>
               <Link href="/insurance-quotation"><a class="default-btn">Contact Us <i class="flaticon-right-chevron"></i><span> </span></a></Link>
            </div>

            <div class="ctr-image">
                <img src="assets/img/ctr-img.jpg" alt="image"/>
            </div>

            <div class="shape">
                <img src="assets/img/bg-dot3.png" alt="image"/>
            </div>
        </div>
    </section>
    )

export default CAT