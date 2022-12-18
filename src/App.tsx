import React from "react";
import "./App.scss";
import { Header } from "./Pages/Header/Header";
import { Container1 } from "./Pages/Container1/Container1";
import { Container2 } from "./Pages/Container2/Container2";
import { Container3 } from "./Pages/Container3/Container3";
import { Container4 } from "./Pages/Container4/Container4";
import {Container6} from './Pages/Container6/Container6'
import {Footer} from './Pages/Footer/Footer'
import { Container5 } from "./Pages/Container5/Container5";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Container1 />
        <Container2 />
        <Container3 />
        <Container4 />
        <Container5/>
        <Container6 />
      </main>
      <Footer />
    </div>
  );
}

export default App;
