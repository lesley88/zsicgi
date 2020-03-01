/**
 *
 * Payment
 *
 */

import React from 'react';
import matter from "gray-matter";
import Link from 'next/link'
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import styled from 'styled-components';
import DefaultLayout from '../layout';

const PaymentWrapper = styled.div`
  display: flex;
  margin: 10%;
  align-items: center;
  justify-content: center;
  color: #333;
  font-weight: 500px
  font-size: 16px;
  margin: 25px;
  padding: 25px;
  div{
    border: 1px solid #eee;
    padding: 20px;
    margin: 20px;
    width: 100%;
    min-height: 460px;
    box-shadow: 10px 10px 5px grey;
  }
  @media(max-width: 820px){
    flex-direction: column
  }
  h1{
    margin: 10px;
    color: #333
  }
  h2{
    margin: 10px;
    color: #333;
  }
`;

function Payment(props) {
  const frontmatter = props.data
  const markdownBody = props.content
  return (
    <DefaultLayout>
      <div class="page-title-area page-title-bg3" style={{backgroundImage:`url(${frontmatter.image})`}}>
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container">
                        <div class="page-title-content">
                            <h1>Our Flexible Payment Plans</h1>
                            <ul>
                            <li><Link href="/"><a>Home</a></Link></li>
                                <li>Our Flexible Payment Plans</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      <PaymentWrapper>
        <div>
        <h1>WHAT IS PAY-AS-YOU-GO?</h1>
            This is short term insurance cover. Insurance cover is issued for a period commensurate to
            the amount of money (premium) a client is able to pay. This offers the client the benefit
            of having full cover for any period of time (limited to minimum period of 3 month)
            <h2>HOW DOES IT WORK?</h2>
            This is a Motor insurance payment method that calculates payable premium based on the
            period of cover opted for. This pricing mechanism means that insurance premiums are
            based on the period of insurance cover to be taken. The client can extend the insurance
            cover by paying additional premium. Once the period is exceeded without cover being
            extended, cover expires
        </div>
        <div>
              <h1>WHAT IS DDAC?</h1>
              DDAC is a payment option that provides clients with an option of paying insurance
              premium in monthly installments directly from the clients bank account.

              <h2 style={{paddingTop:"10%"}}>HOW DOES IT WORK</h2>
              Simply sign up at any of our branches. Pay a deposit for the insurance to be
              purchased and request for the balance to be placed on DDAC. The balance will be
              divided into affordable monthly installments.
              <em>It is secure, convenient and there are no bank charges.</em>
        </div>
      </PaymentWrapper>
    </DefaultLayout>
  );
}


Payment.getInitialProps = async function() {
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
export default Payment;