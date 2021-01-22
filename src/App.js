import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [Hour, setHour] = useState(0);

useEffect(()=>{
  setHour(dateDifference());
  setInterval(() => {
    setHour(Hour-1);
  }, 1000);
})

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         {Hour}
        </p>
      </header>
    </div>
  );
}

function dateDifference(){
  var startDate = new Date();
// Do your operations
var endDate   = new Date(2021,11,31);
var seconds = parseInt((endDate.getTime() - startDate.getTime()) / 1000);
debugger;
return seconds;
}


export default App;
