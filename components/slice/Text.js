import React from 'react';
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

const TextWrapper = styled.div`
  margin: 20px;
  padding-top: 0px;
  padding-right: 100px;
  padding-left: 100px;
  display: flex;
  font-size: 18px;
  color: #666;
  h1{
    color: #212529
    margin-top: 30px;
  }
  h2{
    color:#212529
  }
  @media(max-width: 920px){
    flex-direction: column;
    padding-right: 0px;
    padding-left: 0px;
  }
`;

const Text = ({ text}) =>{
  // console.log("chhhh")
  return (
    
    <TextWrapper>
      <ReactMarkdown source={text} />
     
    </TextWrapper>
  )
};

export default Text;
