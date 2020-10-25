import React, { useState, useEffect } from "react";
// import logo from './logo.svg';
import './App.css';
import { useForm } from "./hooks/useForm";
import { Hello, HelloContainer } from './components/Hello';

function App() {

  const [values, handleChange] = useForm({ email: '', password: ''});

  const [showHello, setShowHello] = useState(true);

  useEffect( () => {
    console.log("use effect for password called!");
  }, [values.password]);

  useEffect( () => {
    console.log("use effect for email called!");
  }, [values.email]);

  useEffect( () => {
    console.log("use effect to replace ComponentDidMount");

    return () => console.log("component unmounted")
  }, []);
  
  const toggleHello = () => {
    return setShowHello(!showHello);
  }
  
  return (
    <div className="App">
      <button onClick={toggleHello}>Toggle</button>

      {/* Conditionnaly rendering Hello functional component */}
      { showHello ? <Hello/> : <div></div>}
        <input 
        name="email"
        value={values.email}
        placeholder="test@gmail.com"
        onChange={handleChange}/>
      <input 
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}/>

    </div>
  );
}

export default App;
