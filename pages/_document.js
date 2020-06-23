// import Document, { Head, Main, NextScript } from 'next/document'
// import { ServerStyleSheet } from 'styled-components'

// import { Fragment } from 'react';

// export default class SiteDocument extends Document {
//   static async getInitialProps(ctx) {
//     // Check if in production
//     const isProduction = process.env.NODE_ENV === 'production';
//     const initialProps = await Document.getInitialProps(ctx);
//     // Pass isProduction flag back through props
//     return { ...initialProps, isProduction };
//   }

//   // Function will be called below to inject
//   // script contents onto page
//   setGoogleTags() {
//     return {
//       __html: `
//         window.dataLayer = window.dataLayer || [];
//         function gtag(){dataLayer.push(arguments);}
//         gtag('js', new Date());
//         gtag('config', 'UA-146798819-2');
//       `
//     };
//   }


//   render () {
//     const sheet = new ServerStyleSheet()
//     const main = sheet.collectStyles(<Main />)
//     const styleTags = sheet.getStyleElement()
//     const { isProduction } = this.props;
//     return (
//       <html lang="en-ZM">
//         <Head>
//           <meta charSet="utf-8" />
//           <meta name="viewport" content="initial-scale=1.0, width=device-width" />
//           <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
//           <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
//           <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
//           <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
//           <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
//           <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
//           <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
//           <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
//           <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
//           <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
//           <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
//           <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
//           <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
//           <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
//           <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
//           <link rel="manifest" href="/manifest.json"/>
//           <meta name="msapplication-TileColor" content="#ffffff"/>
//           <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
//           <meta name="theme-color" content="#ffffff"></meta>
        //   <link rel="stylesheet" href="/assets/css/bootstrap.min.css"/>
        //   <link rel="stylesheet" href="/assets/css/owl.theme.default.min.css"/>    
        //   <link rel="stylesheet" href="/assets/css/owl.carousel.min.css"/>
                      
        //   <link rel="stylesheet" href="/assets/css/magnific-popup.css"/>
                    
        //    <link rel="stylesheet" href="/assets/css/animate.css"/>
                    
        //   <link rel="stylesheet" href="/assets/css/boxicons.min.css"/> 
                    
        //   <link rel="stylesheet" href="/assets/css/flaticon.css"/>
                    
        //   <link rel="stylesheet" href="/assets/css/meanmenu.css"/>
                      
        //   <link rel="stylesheet" href="/assets/css/nice-select.css"/>
                    
        //  <link rel="stylesheet" href="/assets/css/odometer.css"/>
                    
        // {/* <link rel="stylesheet" href="/assets/css/style.css"/> */}
                      
        // <link rel="stylesheet" href="/assets/css/responsive.css"/>
                    
        // <link rel="icon" type="image/png" href="/assets/img/favicon.png"/>
           
//           {styleTags}

//         </Head>
//         <body >
//         <div class="preloader">
// 			<div class="lds-ripple">
// 				<div></div>
// 				<div></div>
// 			</div>
// 		</div>
         
//     <div className="root">
//             {main}
//           </div>
       
        
//           {/* {isProduction && (
//             <Fragment>
//              <script async src="https://www.googletagmanager.com/gtag/js?id=UA-146798819-2"></script>
        
//               <script dangerouslySetInnerHTML={this.setGoogleTags()} />
             
//             </Fragment>
//           )} */}
//         <Fragment>
      
	
    //     <script src="/assets/js/jquery.min.js"></script>
      
    //     <script src="/assets/js/popper.min.js"></script>
       
    //     <script src="/assets/js/bootstrap.min.js"></script>
      
		// <script src="/assets/js/jquery.meanmenu.js"></script>
    // <script src="/assets/js/custom.js"></script>
        
    //     <script src="/assets/js/wow.min.js"></script>
        
		// <script src="/assets/js/owl.carousel.js"></script>
        
		// <script src="/assets/js/jquery.magnific-popup.min.js"></script>
        
		// <script src="/assets/js/jquery.nice-select.min.js"></script>
	 
		// <script src="/assets/js/parallax.min.js"></script>

		// <script src="/assets/js/jquery.mixitup.min.js"></script>
	
    //     <script src="/assets/js/jquery.appear.js"></script>
	
		// <script src="/assets/js/odometer.min.js"></script>
	
		// <script src="/assets/js/jquery.ajaxchimp.min.js"></script>
		
		// <script src="/assets/js/form-validator.min.js"></script>
		
		// <script src="/assets/js/contact-form-script.js"></script>
      
		
          
//         </Fragment>
        
//         </body>
//       </html>
//     )
//   }
// }


import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

import { Fragment } from 'react';

export default class SiteDocument extends Document {
  static async getInitialProps(ctx) {
    // Check if in production
    const isProduction = process.env.NODE_ENV === 'production';
    const initialProps = await Document.getInitialProps(ctx);
    // Pass isProduction flag back through props
    return { ...initialProps, isProduction };
  }

  // Function will be called below to inject
  // script contents onto page
  setGoogleTags() {
    return {
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-146798819-2');
      `
    };
  }
  mailChimp(){
    return {
      __html:`
      !function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/0ba1b9fb639d108002272464e/d9f4acf7924acf175925524e0.js");

      `
    }
  }

  render () {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    const { isProduction } = this.props;
    return (
      <html lang="en-ZM">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="robots"
            content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff"></meta>
          <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/assets/css/owl.theme.default.min.css" />
          <link rel="stylesheet" href="/assets/css/owl.carousel.min.css" />

          <link rel="stylesheet" href="/assets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/assets/css/animate.css" />

          <link rel="stylesheet" href="/assets/css/boxicons.min.css" />

          <link rel="stylesheet" href="/assets/css/flaticon.css" />

          <link rel="stylesheet" href="/assets/css/meanmenu.css" />

          <link rel="stylesheet" href="/assets/css/nice-select.css" />

          <link rel="stylesheet" href="/assets/css/odometer.css" />

          {/* <link rel="stylesheet" href="/assets/css/style.css"/> */}

          <link rel="stylesheet" href="/assets/css/responsive.css" />
          <link rel="stylesheet" href="/assets/css/fontawesome.min.css"/>
          <link rel="stylesheet" href="/assets/css/flaticon.css"/>
          <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>


          <link rel="icon" type="image/png" href="/assets/img/favicon.png" />
          <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link>
          {styleTags}
        </Head>
        <body>
          {main}

          <NextScript />
          {/* {isProduction && (
            <Fragment>
             <script async src="https://www.googletagmanager.com/gtag/js?id=UA-146798819-2"></script>
        
              <script dangerouslySetInnerHTML={this.setGoogleTags()} />
             
            </Fragment>
          )} */}
          <Fragment>
            <script src="/assets/js/jquery.min.js"></script>

            <script src="/assets/js/popper.min.js"></script>

            <script src="/assets/js/bootstrap.min.js"></script>

            <script src="/assets/js/jquery.meanmenu.js"></script>
            <script src="/assets/js/custom.js"></script>

            <script src="/assets/js/wow.min.js"></script>

            <script src="/assets/js/owl.carousel.js"></script>

            <script src="/assets/js/jquery.magnific-popup.min.js"></script>

            <script src="/assets/js/jquery.nice-select.min.js"></script>

            <script src="/assets/js/parallax.min.js"></script>

            <script src="/assets/js/jquery.mixitup.min.js"></script>

            <script src="/assets/js/jquery.appear.js"></script>

            <script src="/assets/js/odometer.min.js"></script>

            <script src="/assets/js/jquery.ajaxchimp.min.js"></script>

            <script src="/assets/js/form-validator.min.js"></script>

            <script src="/assets/js/contact-form-script.js"></script>
          </Fragment>
        </body>
      </html>
    );
  }
}