import React, { useState, useEffect } from 'react';
import './Timer.css'
function Timer(){
  const [seconds, setSeconds] = useState(0);
  const [play, setplay] = useState(false);
  const [step,setsetp] =useState(0);

  function toggle() {
    setplay(!play);
  }

  function reset() {
    setSeconds(0);
    setplay(false);
  }

  useEffect(() => {
    let interval = null;
    if (play) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + step);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [play, seconds, step]);

  function handlechangesetp(event) {
    setsetp(Number(event.target.value))
  }
  return (
    <div className="app">
      <input value={step} onChange={handlechangesetp} type="number" min="1"></input>
      <div className="time">
        {seconds}s
      </div>
      <div className="row">
        <button className={`button button-primary button-primary-${play ? 'active' : 'inactive'}`} onClick={toggle}>
          {play ? 'Pause' : 'Start'}
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};
export default Timer;