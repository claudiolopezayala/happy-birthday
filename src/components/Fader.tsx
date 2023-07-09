import React, {useState, useEffect, ReactElement, useRef} from "react";
import '../App.css';

interface FaderProps {
    timeToFadeIn?: number;
    timeToFadeOut?: number;
    finishedShowElement: Function;
    elementToDisplay: ReactElement;
}

const delay = (ms:number) => new Promise(
    resolve => setTimeout(resolve, ms)
  );

const Fader = ({ elementToDisplay, timeToFadeOut = 4000, timeToFadeIn = 500, finishedShowElement }: FaderProps) =>{

    const [fadeProp, setFadeProp] = useState({
        fade: 'fade-off',
    });
    const [elementToDisplayProp, setElementToDisplayProp] = useState(elementToDisplay);
    const prevElementToDisplay = useRef<ReactElement>(elementToDisplay);
    useEffect(() => {
        setElementToDisplayProp(elementToDisplay);
        
        if(!(prevElementToDisplay.current === elementToDisplay)){
            setFadeProp({
                fade: 'fade-off'
            })
            prevElementToDisplay.current = elementToDisplayProp;
        }

        async function handleFades() {
            if(fadeProp.fade === 'fade-off'){
                await delay(timeToFadeIn);
                setFadeProp({
                    fade: 'fade-in'
                });
            }else if (fadeProp.fade === 'fade-in'){
                await delay(timeToFadeOut);
                setFadeProp({
                    fade: 'fade-out'
                });
                await delay(500);
                finishedShowElement();
            }
        }
        handleFades();

    }, [fadeProp, timeToFadeIn, timeToFadeOut, elementToDisplay, elementToDisplayProp, finishedShowElement]);

    return (
        <div className={fadeProp.fade}>
            {elementToDisplayProp}
        </div>
    );
}

export default Fader;