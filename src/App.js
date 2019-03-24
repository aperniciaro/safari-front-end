import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
  state = {
    animals: [],
    totalAnimals: 0,
    countOfLions: 0,
    countOfTigers: 0,
    countOfBears: 0
  }

  componentDidMount() {
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

  render() {
    return (
      <>
        <h1>SAFARI</h1>
        <h2>The animals I have seen: </h2>
        <ul>
          {this.state.animals.map(animal => {
            return <li key={animal.id}>{animal.species}</li>
          })}
        </ul>
        <h2>In the jungle I saw: </h2>
        <ul>
          {this.state.animals.map(animal => {
            if (animal.locationOfLastSeen === 'jungle') {
              return <li key={animal.id}>{animal.species}</li>
            }
          })}
        </ul>
        // Remove all animals that I have seen in the Desert.
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
