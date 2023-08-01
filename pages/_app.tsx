import { GlobalStyle, PageContainer } from "@/styles/global.style";
import type { AppProps } from "next/app";
import { Fragment } from "react";

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <Fragment>
            <GlobalStyle />

            <PageContainer>
                <Component {...pageProps} />
            </PageContainer>
        </Fragment>
    );
};

export default App;
