import React, { useEffect} from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AllFlights from "./components/AllFlights";
import Login from "./components/Login";
import AddFlight from "./components/AddFlight";
import AllNews from "./components/AllNews";
import AddNews from "./components/AddNews";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import UpdateNews from "./components/UpdateNews";
import UpdateFlight from "./components/UpdateFlight";


function App() {

  useEffect(() => {
    document.title = "Spark Airways";
  }, []);

  return (
    <div>
      {(localStorage.getItem("admin") != null)?
        <Router forceRefresh>
        <ToastContainer />
        <Header />
        <div className="container">
          <Route path="/" component={Login} exact />
          <Route path="/viewFlights" component={AllFlights} exact />
          <Route path="/addFlight" component={AddFlight} exact />
          <Route path="/updateFlight" component={UpdateFlight} exact />
          <Route path="/addNews" component={AddNews} exact />
          <Route path="/updateNews" component={UpdateNews} exact />
          <Route path="/viewNews" component={AllNews} exact />
        </div>
        <Footer />
      <RemoveScrollBar />
      </Router>
      :
        <Router forceRefresh>
        <ToastContainer />
        <Header />
        <div className="container">
        <Route path="/" component={Login} exact />
        </div>
        <Footer />
      <RemoveScrollBar />
      </Router>
      }
      
    </div>
  );
}


export default App;
