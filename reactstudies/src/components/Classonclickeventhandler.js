import React, { Component } from 'react'

class Classonclickeventhandler extends Component {
    clickHandler(){
        console.log('clicked and listened to the button')
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}> Click and Listen </button>
      </div>
    )
  }
}

export default Classonclickeventhandler
