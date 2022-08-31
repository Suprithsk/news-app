
import React, { Component } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import About from './components/About'

export class App extends Component {
  render() {
    return (
      
      <div>
        <Router>
        <Navbar/>
        <Switch>
          <Route path="/business">
          <News pageSize={6} country='in' category='business' />
          </Route>
          <Route path="/entertainment">
          <News pageSize={6} country='in' category='entertainment' />
          </Route>
          <Route path="/health">
          <News pageSize={6} country='in' category='health' />
          </Route>
          <Route path="/science">
          <News pageSize={6} country='in' category='science' />
          </Route>
          <Route path="/sports">
            <News pageSize={6} country='in' category='sports' />
          </Route>
          <Route path="/technology">
            <News pageSize={6} country='in' category='technology' />
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/india">
            <News pageSize={6} country='in' category='general' />
          </Route>
          <Route path="/usa">
            <News pageSize={6} country='us' category='general' />
          </Route>
          <Route path="/southafrica">
            <News pageSize={6} country='sa' category='general' />
          </Route>
          <Route path="/">
            <News pageSize={6} country='in' category='general' />
          </Route>
        </Switch>
        
        
        </Router>
      </div>
      
    )
  }
}








export default App

