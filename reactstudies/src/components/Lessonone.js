import React from "react"

//function Lessonone() {
    //return <h1>This is my first lesson</h1>
//}

//function done using ES6

    const Lessonone = (props) => {
        console.log(props)
        return (
          <div>
              <h1> {props.name} a.k.a {props.heroName} </h1>
              {props.children}
          </div>
    )
}
export default Lessonone
