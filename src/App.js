import React from "react";
import { Helmet } from "react-helmet";
import MainRoute from "./routes";

const App = () => (
  <div className="app">
    <Helmet>
      <title>Online Voucher Game Generator</title>
      <meta charSet="utf-8" />
      <meta http-equiv="content-type" content="text/html; charset=utf-8" />
      <meta
        name="keywords"
        content="gamekey, game code, voucher, online games"
      />
      <meta name="rights" content="Online Voucher Game Generator" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <meta
        name="description"
        content="Situs Resmi Online Voucher Game Generator"
      />
    </Helmet>
    <MainRoute />
  </div>
);

export default App;
