import React, { Component } from 'react'
import Header from './components/Header'
import OptionMenu from './components/OptionMenu'
import Display from './components/Display'

class App extends Component {
  state = {
    animals: []
  }

  componentDidMount() {
    axios.get('https://localhost:5001/api/Animals').then(resp => {
      this.setState({
        animals: resp.data
      })
    })
  }

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
