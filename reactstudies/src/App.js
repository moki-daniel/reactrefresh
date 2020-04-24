import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Lessonone from './components/Lessonone'
import Classcomponent from './components/Classcomponent'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Lessonone name="react" heroName="king of dynamic websites">
       <button>Click to view</button>
       </Lessonone>
       <Lessonone name="node" heroName="The maker of APIS">
       <button>Click to view</button>
       </Lessonone>
       <Lessonone name="sql" heroName="The most used DB">
       <button>Click to view</button>
       </Lessonone>

       {/*<Classcomponent />*/}
       {/*<Classcomponent />*/}
       {/*<Classcomponent />*/}
    </div> 
  );
  }
}


export default App;
