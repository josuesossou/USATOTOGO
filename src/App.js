import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import HomePage from './pages/HomePage'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import CreateOrder from "./pages/CreateOrderPage"
import './App.css';

function App() {
  return (
    <Router>
        <div className="w-full">
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>

                <Route path="/create-order/:categoryId">
                    <CreateOrder />
                </Route>
            </Switch>
            <Footer />
        </div>
    </Router>
  );
}

export default App;
