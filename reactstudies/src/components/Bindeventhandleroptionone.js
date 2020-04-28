import React, { Component } from 'react'

class Bindeventhandleroptionone extends Component {

    constructor(props) {
      super(props)
      this.state = {
         message: 'Hello, click to bind this event'
      }
    }

    clickHandler() {
        this.setState({
            message:'This event is binded'
        })
        console.log(this)
    }
    
  render() {
    return (
      <div>
          <div>{this.state.message}</div>
          <button onClick={this.clickHandler.bind(this)}>Binded Click</button>
      </div>
    )
  }
}

export default Bindeventhandleroptionone
