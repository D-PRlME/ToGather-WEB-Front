import Router from "./components/router";
import "./App.css";
import { GlobalStyle } from "./styles/gloablStyle";
import React, { useEffect } from "react";
import token from "./lib/token";
import Token from "./lib/token";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
