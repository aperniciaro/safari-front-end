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
      console.log(resp.data)
      let total = 0
      let ltb = 0
      for (let i = 0; i < resp.data.length; i++) {
        if (
          resp.data[i].Species === 'lion' ||
          resp.data[i].Species === 'tiger' ||
          resp.data[i].Species === 'bear'
        ) {
          ltb += resp.data[i].CountOfTimesSeen
        }
        total += resp.data[i].CountOfTimesSeen
      }
      this.setState({
        animals: resp.data,
        totalAnimals: total,
        ohMy: ltb
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
            return <li key={animal.Id}>{animal.Species}</li>
          })}
        </ul>
        <h2>In the jungle I saw: </h2>
        <ul>
          {this.state.animals.map(animal => {
            if (animal.LocationOfLastSeen === 'jungle') {
              return <li key={animal.Id}>{animal.Species}</li>
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
