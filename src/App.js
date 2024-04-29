import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

function App() {

  const [mode, setMode] = useState('light');

  const toggleMode = () =>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#060323';
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <Navbar title="Text Utils" aboutText="About us" mode={mode} toggleMode={toggleMode}/>
      <TextForm heading="Enter the text to analyze below: " mode={mode}/>
      {/* <About /> */}
    </>
  );
}

export default App;
