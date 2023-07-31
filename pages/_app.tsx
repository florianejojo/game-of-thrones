// import '@/sty:les/globals.css'
import { GlobalStyle } from "@/styles/global.style";
import type { AppProps } from "next/app";
import { Fragment } from "react";

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <Fragment>
            <GlobalStyle />
            <Component {...pageProps} />
        </Fragment>
    );
};

export default App;
