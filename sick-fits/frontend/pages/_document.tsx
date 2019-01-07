import Document from "next/document";
import { ServerStyleSheet } from "styled-components";

// TODO - replace anys with types
export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();

    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App: any) => (props: any) =>
          sheet.collectStyles(<App {...props} />)
      });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: [
        ...(initialProps.styles as React.ReactElement<any>[]),
        ...sheet.getStyleElement()
      ]
    };
  }
}
