import React from 'react';
import Navbar from './component/navbar/Navbar';
import EMICalulatorScreen from './screen/EMICalulatorScreen';
function App() {
  return <React.Fragment>
    <header>
      <Navbar/>
    </header>
    <main>
      <EMICalulatorScreen/>
    </main>
  </React.Fragment>
}

export default App;
