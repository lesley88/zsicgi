import Head from 'next/head'
import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer';

const Wrapper = styled.div`
  margin: 0;
`;

const DefaultLayout = ({ children, title = 'Digital Marketing And Website Development Agency - Zambia' }) => (
  <Wrapper className="">
    <Head>
      
    </Head>
    <Header />

    <main>
      { children }
    </main>

   <Footer/>
  </Wrapper>
  );
  
  export default DefaultLayout;