import React, { Component } from 'react'

class OptionMenu extends Component {
  render() {
    return (
      <>
        <button onClick="viewAllAnimals()">View All Animals</button>
        <button onClick="viewJungleAnimals()">View Jungle Animals</button>
        <button onClick="removeAllDesertAnimals()">
          Remove All Desert Animals
        </button>
        <button onClick="totalAnimalsSeen()">Total Animals Seen</button>
        <button onClick="lionsTigersBears()">Lions, Tigers, and Bears</button>
      </>
    )
  }
}

export default OptionMenu
