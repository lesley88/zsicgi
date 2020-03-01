import Link from 'next/link'
const today = new Date();

const Footer = () =>(
    <footer class="footer-area">
    <div class="container">
        <div class="subscribe-area">
            <div class="row align-items-center">
                <div class="col-lg-5 col-md-12">
                    <div class="subscribe-content">
                        <h2>Join Our Newsletter</h2>
                        <p>Get lates news updates and promotions</p>
                    </div>
                </div>

                <div class="col-lg-7 col-md-12">
                    <div class="subscribe-form">
                        <form class="newsletter-form" data-toggle="validator">
                            <input type="email" class="input-newsletter" placeholder="Enter your email address" name="EMAIL" required autocomplete="off"/>

                            <button type="submit">Subscribe Now <i class="flaticon-right-chevron"></i></button>
                            <div id="validator-newsletter" class="form-result"></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-footer-widget">
                    <div class="logo">
                        <a href="#"><img src="/assets/img/logo.png" alt="image"/></a>

                        <p style={{justifyContent:"center", textAlign:"justify"}}> ZISC General is a leader in the provision of world class risk management solutions, exemplifying service excellence, professionalism and integrity. We have consistenly beeen ranked amoung the topmost preferred insurance companies in Zambia. Contact us or visit any of our branches countrywide.
                        </p>
                    </div>

                    <ul class="social">
                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-3">
                <div class="single-footer-widget">
                    <h3>Company</h3>

                    <ul class="footer-quick-links">
                        <li> <Link href="/"><a>Home</a></Link></li>
                        <li><a href="#">Our Team</a></li>
                        <li><Link href="/about-us"><a>About Us</a></Link></li>
                        <li><Link href="/"><a>Vacancy</a></Link></li>
                        <li><Link href="/"><a>Tenders</a></Link></li>
                        <li><Link href="/"><a>Salvage</a></Link></li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-3">
                <div class="single-footer-widget">
                    <h3>Services</h3>

                    <ul class="footer-quick-links">
                        <li><Link href="/insurance/business-insurance"><a>Business Insurance</a></Link></li>
                        <li><Link href="/insurance/agricultural-insurance"><a>Agricultural Insurance</a></Link></li>
                        <li><Link href="/insurance/personal-insurance"><a>Personal Insurance</a></Link></li>
                        <li><Link href="/insurance/motor-vehicle-insurance"><a>Motor Insurance</a></Link></li>
                        <li><Link href="/insurance/parkaged"><a>Packaged Policies</a></Link></li>
                        <li><Link href="/insurance/rtsa"><a>RTSA Services</a></Link></li>
                    </ul>
                </div>
            </div>
            

            <div class="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-sm-3 offset-md-3">
                <div class="single-footer-widget">
                    <h3>Contact Info</h3>

                    <ul class="footer-contact-info">
                        <li><span>Location:</span> Premium House P.O.BOX 30894 LUSAKA</li>
                        <li><span>Email:</span> <a href="#">info@zsicgi.co.zm</a></li>
                        <li><span>Phone:</span> <a href="#">+260 211 229345 </a></li>
                        <li><span>Fax:</span> <a href="#">+260 211 222263</a></li>
                        <li><a href="https://www.google.com/maps/place/ZSIC+General+Insurance+Limited/@-15.4232065,28.2885134,15z/data=!4m5!3m4!1s0x0:0xd1f51979b5ed5607!8m2!3d-15.4232065!4d28.2885134" target="_blank">View Location on GoogleMap</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="copyright-area">
            <div class="row align-items-center">
                <div class="col-lg-8 col-sm-8 col-md-8">
                    <p><i class="far fa-copyright"></i>{today.getFullYear()} ZSIC GENERAL INSURANCE LIMTED,A member of the <Link href="https://www.idc.co.zm/"><a>IDC Group.</a></Link></p>
                </div>

                <div class="col-lg-4 col-sm-4 col-md-4">
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><em>Developed by <Link href="https://pathwisemedia.com"><a>Pathwisemedia</a></Link></em></li>
                    </ul>
                    
                </div>
            </div>
        </div>
    </div>
</footer>
)



export default Footer