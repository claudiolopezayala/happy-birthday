import React, {useState, useEffect, ReactElement, useRef} from "react";
import '../App.css';

interface FaderProps {
    timeToFadeIn?: number;
    timeToFadeOut?: number;
    elementToDisplay: ReactElement;
}

const delay = (ms:number) => new Promise(
    resolve => setTimeout(resolve, ms)
  );

const Fader = ({ elementToDisplay, timeToFadeOut = 4000, timeToFadeIn = 2000 }: FaderProps) =>{

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
            }
        }
        handleFades();
        prevElementToDisplay.current = elementToDisplayProp;

    }, [fadeProp,timeToFadeIn,timeToFadeOut,elementToDisplay,elementToDisplayProp]);

    return (
        <div className={fadeProp.fade}>
            {elementToDisplayProp}
        </div>
    );
}

export default Fader;