import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
  state = {
    animals: [],
    totalAnimals: 0,
    countOfLions: 0,
    countOfTigers: 0,
    countOfBears: 0,
    jungleAnimals: []
  }

  componentDidMount() {
    this.getAnimals()
    this.getJungleAnimals()
    this.removeDesert()
  }

  getAnimals = () => {
    axios.get('https://localhost:5001/api/Animals').then(resp => {
      let total = 0
      let lionCount = 0
      let tigerCount = 0
      let bearCount = 0
      for (let i = 0; i < resp.data.length; i++) {
        if (resp.data[i].species === 'lion') {
          lionCount += resp.data[i].countOfTimesSeen
        } else if (resp.data[i].species === 'tiger') {
          tigerCount += resp.data[i].countOfTimesSeen
        } else if (resp.data[i].species === 'bear') {
          bearCount += resp.data[i].countOfTimesSeen
        }
        total += resp.data[i].countOfTimesSeen
      }
      this.setState({
        animals: resp.data,
        totalAnimals: total,
        countOfLions: lionCount,
        countOfTigers: tigerCount,
        countOfBears: bearCount
      })
    })
  }

  getJungleAnimals = () => {
    axios.get('https://localhost:5001/api/Animals/jungle').then(resp => {
      this.setState({
        jungleAnimals: resp.data
      })
    })
  }

  removeDesert = () => {
    for (let i = 0; i < this.state.animals.length; i++) {
      if (this.state.animals[i].locationOfLastSeen === 'desert') {
        axios.delete(
          `https://localhost:5001/api/Animals/${this.state.animals[i].id}`
        )
      }
    }
  }

  render() {
    return (
      <>
        <h1>SAFARI TRACKER</h1>
        <h2>The animals I have seen: </h2>
        <ul>
          {this.state.animals.map(animal => {
            return <li key={animal.id}>{animal.species}</li>
          })}
        </ul>
        <h2>In the jungle I saw: </h2>
        <ul>
          {this.state.jungleAnimals.map(animal => {
            return <li key={animal.id}>{animal.species}</li>
          })}
        </ul>
        <h2>I've seen a total of {this.state.totalAnimals} animals</h2>
        <h2>
          I've seen {this.state.countOfLions} lions, {this.state.countOfTigers}{' '}
          tigers, and {this.state.countOfBears} bears
        </h2>
      </>
    )
  }
}

export default App
