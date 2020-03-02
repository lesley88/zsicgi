import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import $ from 'jquery';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render(){
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    const { isProduction } = this.props;
    return(
      <html lang="en">
        <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.js" async/>
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="/assets/css/animate.min.css"/>
        <link rel="stylesheet" href="/assets/css/fontawesome.min.css"/>
        <link rel="stylesheet" href="/assets/css/flaticon.css"/>
        <link rel="stylesheet" href="/assets/css/slick.min.css"/>
        <link rel="stylesheet" href="/assets/css/meanmenu.css"/>
        <link rel="stylesheet" href="/assets/css/magnific-popup.min.css"/>
        <link rel="stylesheet" href="/assets/css/odometer.min.css"/>
        <link rel="stylesheet" href="/assets/css/nice-select.min.css"/>
        <link rel="stylesheet" href="/assets/css/style.css"/>
        <link rel="stylesheet" href="/assets/css/responsive.css"/>
        </Head>
        <body>
        <div class="preloader">
            <div class="loader">
                <div class="shadow"></div>
                <div class="box"></div>
            </div>
        </div>
        <div className="root">
          
          {main}
        </div>
        <NextScript />

        <script src="/assets/js/jquery.min.js"></script>
        <script src="/assets/js/popper.min.js"></script>
        <script src="/assets/js/bootstrap.min.js"></script>
        <script src="/assets/js/parallax.min.js"></script>
        <script src="/assets/js/owl.carousel.min.js"></script>
        <script src="/assets/js/slick.min.js"></script>
        <script src="/assets/js/jquery.meanmenu.js"></script>
        <script src="/assets/js/jquery.appear.min.js"></script>
        <script src="/assets/js/odometer.min.js"></script>
        <script src="/assets/js/jquery.nice-select.min.js"></script>
        <script src="/assets/js/jquery.magnific-popup.min.js"></script>
        <script src="/assets/js/wow.min.js"></script>
        <script src="/assets/js/jquery.ajaxchimp.min.js"></script>
        <script src="/assets/js/form-validator.min.js"></script>
        <script src="/assets/js/contact-form-script.js"></script>
        <script src="/assets/js/main.js"></script>
        </body>
      </html>
    )
  }
}
