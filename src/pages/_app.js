import App from "next/app";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider } from "baseui";
import { ToasterContainer, PLACEMENT } from "baseui/toast";
import { styletron } from "../../styletron";
import "../styles/global.scss";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <StyletronProvider value={styletron}>
        <BaseProvider theme={LightTheme}>
          <ToasterContainer
            autoHideDuration={5000}
            placement={PLACEMENT.bottom}
            overrides={{}}
          >
            <Component {...pageProps} />
          </ToasterContainer>
        </BaseProvider>
      </StyletronProvider>
    );
  }
}
