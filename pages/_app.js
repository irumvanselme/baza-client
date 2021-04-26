import React from "react";

import "bootstrap/scss/bootstrap.scss";
import "font-awesome/scss/font-awesome.scss";
import "../styles/globals.scss";

if (typeof window !== "undefined") {
    require("jquery");
    require("popper.js");
    require("bootstrap");
}

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;
