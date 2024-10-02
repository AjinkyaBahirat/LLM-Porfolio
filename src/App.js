import React from "react";
import "./App.module.css";
import ChatBox from "./pages/ChatBox/ChatBox";
import ParticlesComponent from './components/particles';

function App() {
  return (
    <div id="App">
    <ParticlesComponent id="particles"/>
      <ChatBox/>
    </div>
  );
}

export default App;
