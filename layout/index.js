import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Index({children}) {
    return (
        <>
   <Header/>
   <main>
      { children }
    </main>
<Footer/>
            <footer className="footer-bottom-area footer-bottom-electronics-area">
  <div className="container">
    <div className="copy-right">
      <p>Copyright @2020 Surety Designed By <a href="https://EnvyTheme.com/" target="blank">EnvyTheme</a></p>
    </div>
  </div>
</footer>
	<div className="go-top">
			<i className='bx bx-chevrons-up'></i>
			<i className='bx bx-chevrons-up'></i>
		</div>
        </>
    )
}
