import React from 'react'

function Onclickeventhandling() {
    function clickHandler() {
        console.log('button clicked')
    }
    return (
    <div>
        <button onClick={clickHandler}>Click</button>
      
    </div>
  )
}

export default Onclickeventhandling
