import Link from "next/link";
import '../../global.css'
const Hero =(props)=>(
     <div className="home-area">
        <div className="banner-section item-bg4" style={{backgroundImage: `url(${props.data.image})`}}  >
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="main-banner-content">
                            <span className="sub-title">Bee Free Of Mind</span>
                            <h1>{props.data.title}<br/></h1>
                            <h2 style={{color:"#fff", fontWeight:"bold"}}> {props.data.sub_title} </h2>
                            <div className="btn-box">
                                
                                <Link href="/insurance-quotation"><a className="default-btn">Get A Quote <span></span></a></Link>
                                <Link href="/contact-us"><a className="optional-btn">Contact Us <span></span></a></Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


//     <div className="home-area home-slides owl-carousel owl-theme">
//     {/* <div className="main-banner item-bg1">
//         <div className="d-table">
//             <div className="d-table-cell">
//                 <div className="container">
//                     <div className="main-banner-content">
//                         <span className="sub-title">Enjoy Your Happiness</span>
//                         <h1>Execute happiness by incredible opportunities</h1>
//                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>

//                         <div className="btn-box">
//                             <a href="#" className="default-btn">Get A Quote <span></span></a>
//                             <a href="#" className="optional-btn">Contact Us <span></span></a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div> */}
// {/* 
//     <div className="main-banner item-bg2">
//         <div className="d-table">
//             <div className="d-table-cell">
//                 <div className="container">
//                     <div className="main-banner-content">
//                         <span className="sub-title">Enjoy Your Happiness</span>
//                         <h1>Travelling! how<br/> thrilling it can be</h1>
//                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>

//                         <div className="btn-box">
//                             <a href="#" className="default-btn">Get A Quote <span></span></a>
//                             <a href="#" className="optional-btn">Contact Us <span></span></a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div> */}

//     <div className="main-banner item-bg5" style={{backgroundImage: "url(/assets/img/main-banner-image/busn.jpg)"}}>
//         <div className="d-table">
//             <div className="d-table-cell">
//                 <div className="container">
//                     <div className="main-banner-content">
//                         <span className="sub-title">Enjoy Your Happiness</span>
//                         <h1>So you're thinking of moving, enjoy the effect</h1>
//                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>

//                         <div className="btn-box">
//                             <a href="#" className="default-btn">Get A Quote <span></span></a>
//                             <a href="#" className="optional-btn">Contact Us <span></span></a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
)

export default Hero