import Router from "./components/router";
import "./App.css";
import { GlobalStyle } from "./styles/gloablStyle";
import React, { useEffect } from "react";
import token from "./lib/token";
import Token from "./lib/token";

function App() {
  useEffect(()=>{
    Token.setToken('token', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqYW5namlzb3VuZ0Bkc20uaHMua3IiLCJ0eXAiOiJhY2Nlc3MiLCJleHAiOjE2NjgyODcyOTksImlhdCI6MTY2ODI4MzY5OX0.1cMMOHXXWq3FeoanSBi8hDpBE0cgTYd3ei-IKN5l72g')
  },[])
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
