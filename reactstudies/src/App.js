import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Lessonone from './components/Lessonone'
import Classcomponent from './components/Classcomponent'
import Message from './components/Message'
import Counter from './components/Counter'
import Destructureprops from './components/Destructureprops'
import Onclickeventhandling from './components/Onclickeventhandling'
import Classonclickeventhandler from './components/Classonclickeventhandler'
import Bindeventhandleroptionone from './components/Bindeventhandleroptionone'



class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Message />*/}
        {/*<Counter />*/}
      <Destructureprops name="destructured properties" heroName="destructured props" >
        <button>click to view</button>
      </Destructureprops >
      <Onclickeventhandling />
      <Classonclickeventhandler />
      <Bindeventhandleroptionone />
       {/*<Lessonone name="react" heroName="king of dynamic websites">
       <button>Click to view</button>
       </Lessonone>*/}
      { /*<Lessonone name="node" heroName="The maker of APIS">
       <button>Click to view</button>
       </Lessonone>*/}
       {/*<Lessonone name="sql" heroName="The most used DB">
       <button>Click to view</button>
       </Lessonone> */}

       {/*<Classcomponent />*/}
       {/*<Classcomponent />*/}
       {/*<Classcomponent />*/}
    </div> 
  );
  }
}


export default App;
