import Router from "./components/router";
import "./App.css";
import { GlobalStyle } from "./styles/gloablStyle";
import React, { useEffect } from "react";
import token from "./lib/token";
import Token from "./lib/token";

function App() {
  useEffect(()=>{
    Token.setToken('token', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqYW5namlzb3VuZ0Bkc20uaHMua3IiLCJ0eXAiOiJhY2Nlc3MiLCJleHAiOjE2NjgwODA5NzIsImlhdCI6MTY2ODA3NzM3Mn0.bS83yEBF4q8AvVZLsHouWCGNCJVk8CfjTrjxt2KfGK0')
  },[])
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
