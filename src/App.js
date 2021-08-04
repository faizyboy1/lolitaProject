import "./App.scss";
import { useState } from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Dropdown from "./components/dropdown/Dropdown";
import { SliderData } from "./data/SliderData";
import ProductCard from "./components/productcard/ProductCard";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Products from "./pages/products/Products";
import Home from "./pages/home/Home";

function App() {
  const [isOpen,setisOpen]=useState();
  // console.log(`chal gaya ${isOpen}`) 

  const toggleHandler=()=>{
   isOpen ? setisOpen(false) : setisOpen(true)   
  }
  return (
    <BrowserRouter>
    

    <div className="App"> 
      <Navbar toggleHandler={toggleHandler} isOpen={isOpen} />
      <Dropdown  toggleHandler={toggleHandler} isOpen={isOpen} />
      {/* <Header slides={SliderData} />
      <ProductCard/> */}
    </div>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/products" component={Products} />
    </Switch>
    
    </BrowserRouter>
  );
}

export default App;
