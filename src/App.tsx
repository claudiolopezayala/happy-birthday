import React, { useEffect, useState } from 'react';
import './App.css';
import Fader from './components/Fader';
import ElementsArray from './components/ElementsArray';


let indexOfdisplayedElement = 1;

function App() {

  
  useEffect(() => {
    document.title = 'Feliz cumpleaños';
  }, []);

  const [elementToDisplayProp, setElementToDisplayProp] = useState({
    element: ElementsArray[0].element
  })
  const [timeToFadeOutProp, setTimeToFadeOutProp] = useState({
    timeToFadeOut : ElementsArray[0].showingTime
  })

  function showNextElement(){
    setElementToDisplayProp({
      element: ElementsArray[indexOfdisplayedElement].element
    });
    setTimeToFadeOutProp({
      timeToFadeOut: ElementsArray[indexOfdisplayedElement].showingTime
    })
    indexOfdisplayedElement = (indexOfdisplayedElement < ElementsArray.length - 1) ? indexOfdisplayedElement + 1 : 0;
  }

  return (
    <div className="App">
      <div className='Fader'>
        <Fader elementToDisplay={elementToDisplayProp.element} finishedShowElement={showNextElement} timeToFadeOut={timeToFadeOutProp.timeToFadeOut}/>
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
