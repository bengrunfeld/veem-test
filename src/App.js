import React, { Component } from 'react'
import changeColor from './change-color'
import './App.css'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      color: '#000000',
      usedColors: []
    }
  }

  repeatAction(func, num, delay) {
    if (!num) 
      return

    const { usedColors } = this.state
    const newColor = func(usedColors)
    
    this.setState({usedColors: [...usedColors, newColor], color: newColor})
    
    setTimeout(() => {this.repeatAction(func, num - 1, delay)}, delay)
  }

  componentWillMount() {
    this.repeatAction(changeColor, 10, 1000)
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
