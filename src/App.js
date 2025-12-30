import { CTA, Navbar } from "./components";
import { Footer, Header, Possibility, WhatGPT3 } from "./containers";

import "./App.css";
import SocialFollow from "./SocialFollow";
import ThreeScene from "./components/Threejs/ThreeScene";

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />

      <Header />
    </div>

    {/* <Brand />  */}
    <WhatGPT3 />
    {/** ThreeJS scene */}
    <ThreeScene />
    {/* <Features /> */}
    <Possibility />
    <CTA />
    {/* <Blog /> */}
    <SocialFollow />
    <Footer />
  </div>
);

export default App;
