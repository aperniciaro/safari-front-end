import React, { Component } from 'react'
import Header from './components/Header'
import OptionMenu from './components/OptionMenu'
import Display from './components/Display'

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <OptionMenu />
        <Display />
      </>
    )
  }
}

export default App
