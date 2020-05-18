import React, { useState, useEffect } from 'react';
import Clock from 'react-clock';
import moment from "moment";
import "moment-timezone";
import { useSpring, animated as a } from 'react-spring'
const maple = require('./assets/maple.png')
const tulip = require('./assets/tulip.png')
 
 function Time() {

  
  const [date, setDate] = useState(new Date());
  var utc = new Date(date.getTime() + date.getTimezoneOffset() * 60000)
  console.log(date);

  const [torontoBool, setToronto] = useState(false);
  const [amsterdamBool, setAmsterdam] = useState(false);

  var toronto = moment.tz(utc, "America/Toronto");
  console.log(toronto._d);
  var amsterdam =  toronto.clone().tz("Europe/Amsterdam")
  console.log(amsterdam._d)

  useEffect(() => {
    setInterval(
      () => setDate(new Date()),
      1000
    )
  }, [])

  const torontoState = () => {
    setToronto(!torontoBool);
    if (amsterdamBool == true){
      setAmsterdam(false);
    }
  }

  const amsterdamState = () => {
    setAmsterdam(!amsterdamBool);
    if (torontoBool == true){
      setToronto(false);
    }
  }


  
    return (
      <div className='clock_container'>
        <div className='toronto_container'>
        {torontoBool ? <Clock className="clock"value={toronto._d}/> : <img className='maple' onClick={() => torontoState()} src={maple}/>}
        </div>
        <div className='amsterdam_container'>
        {amsterdamBool ? <Clock className="clock"value={amsterdam._d}/> : <img className='tulip' onClick={() => amsterdamState()} src={tulip}/>}
        </div>
      </div>
    );
    }

    export default Time;