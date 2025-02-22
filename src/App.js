import React from "react";
import "./App.css";
import {
  Nav,
  CTA,
  Feature,
  Category,
  Collection,
  Category2,
  Clothing,
  Animation,
  Brands,
} from "./components/index";
import { Header, Footer, Content, Video } from "./containers/index";
const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Nav />
        <Category />
        <Header />
        <Collection />
        <Category2 />
        <Clothing />
        <Animation />
        <Content />
        <Video />
        <Brands />

        <Footer />
      </div>
    </div>
  );
};

export default App;
