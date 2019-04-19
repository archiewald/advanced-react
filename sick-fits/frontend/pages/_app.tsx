import App, { Container, NextAppContext } from "next/app";
import Page from "../components/Page";
import { ApolloProvider } from "react-apollo";
import withData from "../lib/withData";
import { ApolloClient } from "apollo-boost";

interface AppProps {
  apollo: ApolloClient<{}>;
}

class MyApp extends App<AppProps> {
  static async getInitialProps({
    Component,
    ctx
  }: NextAppContext): Promise<{ pageProps: any }> {
    // correct the types?
    let pageProps: any = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    // this exposes query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }

  render() {
    const { Component, apollo, pageProps } = this.props;

    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Page>
            <Component {...pageProps} />
          </Page>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withData(MyApp);
