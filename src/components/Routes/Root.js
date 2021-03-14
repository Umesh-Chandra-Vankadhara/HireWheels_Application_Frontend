import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import {Route, Switch} from 'react-router-dom'
import Home from '../Home/Home'
import Booking from '../Booking/Booking'


export class Root extends Component {
    render() {
        return (
          <div className="grid-container">
            <Header></Header>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/booking" component={Booking}></Route>
              <Route exact path="/home" component={Home}></Route>
            </Switch>
            <Footer></Footer>
          </div>
        );
    }
}

export default Root
