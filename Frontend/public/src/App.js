import React from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer} from "react-toastify";
import AllFlights from "./components/AllFlights";
import Login from './components/Login';
import AddFlight from "./components/AddFlight";
import AllNews from "./components/AllNews";
import AddNews from "./components/AddNews";
import Footer from './components/Footer';
import Header from './components/Header';
import {RemoveScrollBar} from 'react-remove-scroll-bar';
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Router forceRefresh>
      <ToastContainer />
      <Header/>
        <div className="container">
              <Route path="/" component={Login} exact />
              <Route path="/addFlight" component={AddFlight} exact />
              <Route path="/viewFlight" component={AllFlights} exact />
              <Route path="/addNews" component={AddNews} exact />
              <Route path="/viewNews" component={AllNews} exact />
              <Route path='/Logout' component={Login} />
              </div>
              <Footer/>
              <RemoveScrollBar /> 
      </Router>
    </div>
  );
}

export default App;
