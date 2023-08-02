import { GlobalStyle, PageContainer } from "@/styles/global.style";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Fragment } from "react";

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <Fragment>
            <GlobalStyle />

            <Head>
                <title>GOT books & characters</title>

                {/* <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                /> */}
            </Head>
            <PageContainer>
                <Component {...pageProps} />
            </PageContainer>
        </Fragment>
    );
};

export default App;
