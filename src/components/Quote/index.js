import Link from 'next/link'
import styled from 'styled-components'
const Wrapper = styled.section`
    margin: 0;
    padding:0;
`;
const Quote = (props) =>{

    return(
        <Wrapper className="quote-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="quote-content" style={{textAlign:"center"}}>
                            <h2>Get a free quote</h2>
                            <p>Get a quotation for your Insurance </p>

                            <div className="image">
                                <img src="/assets/img/insurance_quote.jpg" alt="image"/>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="tab quote-list-tab">
                            <ul className="tabs">
                                <li><Link href="#"><a>Business Insurance </a></Link></li>
                                <li><Link href="#"><a>Other Insurances </a></Link></li>
                            </ul>
        
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
                                        <input type="text" className="form-control" value="Business Insurance"/>
                                        </div>
                                        <button type="submit" className="default-btn">Get A Free Quote <span></span></button>
                                    </form>
                                </div>
        
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
                                            <select>
                                                <option value="1" style={{color:"#333"}}>Choose Your Insurance</option>
                                                {props.allInsurances.map(item=>(
                                                    <option style={{color:"#333"}} key={item.slug}>{item.document.data.title}</option>
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
            </Wrapper>
    )
}
export default Quote;