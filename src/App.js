import './App.css';
import MainBody from './Components/MainBody';
import Navbar from './Components/Navbar';
import React, { useState } from 'react'


function App() {
  const [mode, setmode] = useState('light')

  const toggleMode = () =>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = 'black';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <MainBody title="Enter Text Here to Analyze" mode={mode}/>
    
    </>
  );
}

export default App;

