import React from 'react'
import ControlledComponent from './components/2-10.Form/ControlledComponent';
import UnControlledComponent from './components/2-10.Form/UnControlledComponent';
//import List from './components/2-9.List/List';
//import Extraction from './components/Extraction/Extraction'
//import Composition from './components/2-4.Props/Composition'
//import ClassComponent from './components/2-5.State/ClassComponent';
//import ClassComponent2 from './components/2-6.LifeCycle/ClassComponent';
//import FunctionalComponent from './components/2-5.State/FunctionalComponent';
//import Event from './components/2-7.Event/Event';
//import Condition from './components/2-8.ConditionalRendering/Condition';

function App() {

  return (
    <div className="App">
       {/* <ClassComponent2/>
      <FunctionalComponent/>
      <ClassComponent/>
      <Composition/>
      <Extraction/> */}
      {/* <Event/> */}
      {/* <Condition/> */}
      {/* <List/> */}
      <ControlledComponent/>
      <UnControlledComponent/>
    </div>
  );
}
//다른 곳에서 import해주기 위해서는 꼭 해줘야함
export default App;
