import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
  state = {
    animals: [],
    totalAnimals: 0,
    ohMy: 0
  }

  componentDidMount() {
    axios.get('https://localhost:5001/api/Animals').then(resp => {
      let total = 0
      for (let i = 0; i < resp.length; i++) {
        if (
          resp[i].species == 'lion' ||
          resp[i].species == 'tiger' ||
          resp[i].species == 'bear'
        ) {
          ohMy += resp[i].countOfTimesSeen
        }
        total += resp[i].countOfTimesSeen
      }
      this.setState({
        animals: resp,
        totalAnimals: total
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
            if (animal.LocationLastSeen === 'jungle') {
              return <li key={animal.id}>{animal.species}</li>
            }
          })}
        </ul>
        // Remove all animals that I have seen in the Desert.
        <h2>I've seen a total of {this.state.totalAnimals} animals</h2>
        <h2>I've seen {this.state.ohMy} lion, tiger, and bears</h2>
      </>
    )
  }
}

export default App
