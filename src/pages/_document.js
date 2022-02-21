import Document, { Head, Html, Main, NextScript } from "next/document";
import { Provider as StyletronProvider } from "styletron-react";
import { styletron } from "../../styletron";

export default class MyDocument extends Document {
  static async getInitialProps(context) {
    const renderPage = () =>
      context.renderPage({
        enhanceApp: (App) => (props) =>
          (
            <StyletronProvider value={styletron}>
              <App {...props} />
            </StyletronProvider>
          ),
      });

    const initialProps = await Document.getInitialProps({
      ...context,
      renderPage,
    });
    const stylesheets = styletron.getStylesheets() || [];
    return { ...initialProps, stylesheets };
  }

  render() {
    return (
      <Html>
        <Head>
          {this.props.stylesheets.map((sheet, i) => (
            <style
              className="_styletron_hydrate_"
              dangerouslySetInnerHTML={{ __html: sheet.css }}
              media={sheet.attrs.media}
              data-hydrate={sheet.attrs["data-hydrate"]}
              key={i}
            />
          ))}
          
          <title>Thiago Pereira Advogados | Especialista em Direito Imobiliário</title>

          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#d99564" />
          <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
          <meta name="theme-color" content="#151d26" />

          <meta
            name="description"
            content="Somos totalmente focados no universo jurídico imobiliário, com atendimento personalizado, humanizado e tecnológico."
          />
          <meta
            name="keywords"
            content="direito imobiliário,advogado imobiliario,advogado imobiliario guarulhos,thiago pereira advogado,assessoria na aquisição de imóveis,auditoria legal, memorial de incorporação,contratos de locação residencial,usucapião extrajudicial"
          />
          <meta name="robots" content="index, follow" />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="Portuguese" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.thpadv.com.br/" />
          <meta property="og:title" content="Thiago Pereira Advogados | Especialista em Direito Imobiliário" />
          <meta property="fb:app_id" content="100025335199589" />
          <meta
            property="og:description"
            content="Somos totalmente focados no universo jurídico imobiliário, com atendimento personalizado, humanizado e tecnológico."
          />
          <meta
            property="og:image"
            content="https://www.thpadv.com.br/images/Thiago_Pereira_Advogados_Fundo.png"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.thpadv.com.br/" />
          <meta property="twitter:title" content="Thiago Pereira Advogados | Especialista em Direito Imobiliário" />
          <meta
            property="twitter:description"
            content="Somos totalmente focados no universo jurídico imobiliário, com atendimento personalizado, humanizado e tecnológico."
          />
          <meta
            property="twitter:image"
            content="https://www.thpadv.com.br/images/Thiago_Pereira_Advogados_Fundo.png"
          />

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
