import React, { Component } from 'react'
import FoodtrucksApp from './components/foodtrucks/FoodtrucksApp'
//import logo from './logo.svg';
import './App.css'
import './bootstrap.css'

class App extends Component {
  
  render() {
    return (
      <div className="App">
          <FoodtrucksApp/>
      </div>
    )
  }  
}

export default App
