import React, { ReactElement, useEffect, useState } from 'react';
import './App.css';
import Fader from './components/Fader';

const delay = (ms:number) => new Promise(
  resolve => setTimeout(resolve, ms)
);

function First (){
return(
  <h1>First Element</h1>
  );
}
  
function Second (){
return(
  <h2>Second Element</h2>
  );
}

function Third (){
  return(
    <h3>Third Element</h3>
    );
  }

const elements: ReactElement[] =  [];

elements.push(First());
elements.push(Second());
elements.push(Third());

function App() {
  const [elementToDisplayProp, setElementToDisplayProp] = useState({
    element: elements[0]
  })

  useEffect(()=>{
    async function changeElemetToShow() {
      await delay(5000);
      setElementToDisplayProp({
        element: elements[2]
      });
    }
    changeElemetToShow();
  },[elementToDisplayProp]);

  return (
    <div className="App">
      <Fader elementToDisplay={elementToDisplayProp.element}/>
      <Fader elementToDisplay={elements[1]}/>
    </div>
  );
}

export default App;
