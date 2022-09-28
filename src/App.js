import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import UserCheckout from './components/UserCheckout/UserCheckout';
import OrderHistory from './components/OrderHistory/OrderHistory';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';




function App() {
  

  return (
      <BrowserRouter>
    <>
      
      <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/user-checkout" component={UserCheckout} exact />
        <Route path="/order-history" component={OrderHistory} exact />
      </Switch>
      
   
       <Footer />

    </>
    </BrowserRouter>
    
  );
}

export default App;
