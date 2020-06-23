import React from 'react';
import { RichText } from 'prismic-reactjs';
import styled from 'styled-components'

const QuoteWrapper = styled.div`
  margin: 20px;
  margin-left:
  padding: 30px;
  font-size: 20px;
  color: #777;

`;
const Quote = ({ slice }) => (
  <QuoteWrapper >
  
      {RichText.asText(slice.primary.quote)}
  </QuoteWrapper>
);

export default Quote;