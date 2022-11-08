import Router from "./components/router";
import "./App.css";
import { GlobalStyle } from "./styles/gloablStyle";
import React from "react";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
