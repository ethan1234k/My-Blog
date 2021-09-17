import React, {useEffect} from 'react';
import './App.css';
import WebFont from "webfontloader";
import Navigation from './Navigation/Navigation';


//npm install webfontloader

const App = () => {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Montserrat", "Lato", "Lora"],
      },
    });
  }, []);

  return (
    <div className="App">
      <Navigation />
      {/* <SingleArticleScreen /> */}
    </div>
  );
}

export default App;
