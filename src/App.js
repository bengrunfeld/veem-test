import React, { Component } from 'react'
import './App.css'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      color: '#000000',
      usedColors: []
    }

    this.changeColor = this.changeColor.bind(this)
  }

  getNewColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16)
  }

  changeColor() {
    const { usedColors } = this.state
    const newColor = this.getNewColor()

    if (usedColors.includes(newColor)) {
      // Beware stack overflows here...
      this.changeColor()
      return
    }

    const newUsed = [...usedColors, newColor]

    // Just so you can see the count and what's getting used
    console.log(newUsed)

    this.setState({color: newColor, usedColors: newUsed})
  }

  repeatAction(func, num, delay) {
    if (!num) return
    func()
    setTimeout(() => {this.repeatAction(func, num - 1, delay)}, delay)
  }

  componentWillMount() {
    this.repeatAction(this.changeColor, 10, 1000)
  }

  render() {
    let { color } = this.state

    return (
      <div className="App" style={{
        height: '100vh', 
        background: color
      }}>
        &nbsp;
      </div>
    );
  }
}

export default App;
