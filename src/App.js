import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home/Home'
import Booking from './components/Booking/Booking'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import SignUp from './components/signup/SignUp'
import SignIn from "./components/signin/SignIn";
import AvailableVehicles from './components/Booking/AvailableVehicles'
import { toast } from "react-toastify";

toast.configure()
export class App extends Component {
    render() {
       return (
         <div className="grid-container">
          <Header></Header>
           <Switch>
             <Route exact path="/dashboard" component={AvailableVehicles}></Route>
             <Route exact path="/" component={Home}></Route>
             <Route exact path="/booking" component={Booking}></Route>
             <Route exact path="/home" component={Home}></Route>
             <Route exact path="/signup" component={SignUp}></Route>
             <Route exact path="/signIn" component={SignIn}></Route>
           </Switch>
           <Footer></Footer>
         </div>
       );
    }
}

export default App
