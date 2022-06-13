import React from 'react'
import Extraction from './components/Extraction/Extraction'
import Composition from './components/2-4.Props/Composition'

function App() {

  return (
    <div className="App">
      <Composition/>
      <Extraction/>
    </div>
  );
}
//다른 곳에서 import해주기 위해서는 꼭 해줘야함
export default App;
