import React from 'react';
import './App.css';
import ReduxTest from './ReduxTestComp/ReduxTest';
import MarketplaceScreen from './Marketplace/screens/MarketplaceScreen/MarketplaceScreen';

function App() {
  return (
    <div className="App">
      <ReduxTest />
      <MarketplaceScreen />
    </div>
  );
}

export default App;
