import React, { useState } from 'react';
import './App.css';
import Fader from './components/Fader';
import ElementsArray from './components/ElementsArray';


let indexOfdisplayedElement = 1;

function App() {
  const [elementToDisplayProp, setElementToDisplayProp] = useState({
    element: ElementsArray[0]
  })

  function showNextElement(){
    setElementToDisplayProp({
      element: ElementsArray[indexOfdisplayedElement]
    });
    indexOfdisplayedElement ++;
  }

  return (
    <div className="App">
      <div className='Fader'>
        <Fader elementToDisplay={elementToDisplayProp.element} finishedShowElement={showNextElement}/>
      </div>
      <div className='background'>
        <div className='circles'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default App;
