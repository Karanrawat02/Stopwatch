import React,{useState,useEffect} from "react";
import "./Home.css";

function Home(){

    const [time,setTime]=useState(0)  ;
    const [isActive,setIsactive] =useState(false);

    useEffect(()=> {
        let interValid;

        if(isActive){
            interValid= setInterval(()=> {
                setTime((prevTime) => prevTime+1);
            },1000)
        }

        return () => {
            clearInterval(interValid)
        };
    },[isActive]);
    
    const handlestart=()=> {
        setIsactive(true)
    }
    const handlePause=()=> {
        setIsactive(false)
    }
    const handleStop=()=> {
        setTime(0);
        setIsactive(false);
    };
    return(
        <>  
        <h1 style={{textAlign:"center"}}> STOPWATCH </h1>
        <div className="outerbox">
            <div className="screen"><h1> {time} s </h1></div>
            <div className="btn">
                <button className="start" onClick={handlestart}>Start</button>
                <button className="pause" onClick={handlePause}>Pause</button>
                <button className="Stop" onClick={handleStop}>Reset</button>
            </div>
        </div>
        </>
    );
}

export default Home;








