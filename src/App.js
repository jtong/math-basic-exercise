import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const R = require('ramda');

class Express {
  constructor(first, second,operator){
    this.first = first
    this.second = second
    this.operator = operator
  }

  result(){
    return operators[this.operator](this.first, this.second)
  }
} 

const operators =  {
  "+": (first, second) => first + second,
  "-": (first, second) => first - second,
  "*": (first, second) => first * second,
  "/": (first, second) => first / second
}

function headTailSort(array){
  const origin = R.clone(array)
  const result = []
  while(origin.length != 0){
      result.push(origin.shift())
      result.push(origin.pop())
  }
  return result;
}
class App extends Component {
  constructor(props){
    super(props)
    this.numbers = [0,1,2,3,4,5,6,7,8,9]
  }

  everyAdd(){
    return R.map((augend) => {
      return R.map((addend) => {
        return new Express(augend,addend,"+")
      }, this.numbers)
    }, this.numbers)
  }

  

  render() {
    console.log(R.map(headTailSort, this.everyAdd()))
    return (
      <div className="App">
        <div> 
          {}
          
        </div>
      </div>
    );
  }
}

export default App;
