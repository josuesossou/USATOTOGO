import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // Redirect,
  // useHistory,
  // useLocation
} from 'react-router-dom';
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PrivateRoute from './components/PrivateRoute'
import CreateOrder from './pages/CreateOrderPage'
import AuthenticationPage from './pages/AuthenticationPage'
import { User } from './store'

import './App.css';

function App() {
  const user = new User()

  return (
    <Router>
        <div className='w-full'>
            <Navbar userStore={user} />
            <Switch>
                <Route exact path='/'>
                    <HomePage />
                </Route>

                <PrivateRoute path='/create-order/:categoryId' user={user}>
                    <CreateOrder />
                </PrivateRoute>

                <Route path='/auth'>
                    <AuthenticationPage />
                </Route>
            </Switch>
            <Footer />
        </div>
    </Router>
  );
}

export default App;
