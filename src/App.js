import React, { useState, useEffect, useRef } from "react";
// import logo from './logo.svg';
import './App.css';
import { useForm } from "./hooks/useForm";
import { Hello, HelloContainer } from './components/Hello';
import { useFetch } from "./hooks/useFetch";

function App() {

  const [values, handleChange] = useForm({ email: '', password: ''});
  const [showHello, setShowHello] = useState(true);
  const [number, setNumber] = useState(() => JSON.parse(localStorage.getItem("number")) ? JSON.parse(localStorage.getItem("number")) : 0 );

  useEffect( () => {
    console.log("use effect for password called!");
  }, [values.password]);

  useEffect( () => {
    console.log("use effect for email called!");

  }, [values.email]);

  useEffect( () => {
    localStorage.setItem("number", JSON.stringify(number))
  }, [number]);

  const { data, loading } = useFetch(`http://numbersapi.com/${number}/trivia`);

  const inputRef = useRef();
  
  const toggleHello = () => {
    return setShowHello(!showHello);
  }

  const focusInput = () => inputRef.current.focus();
  
  return (
    <div className="App">

      <button onClick={() => setNumber(number + 1)}>Next</button>
      <div>{ !data ? "Loading ..." : data }</div>
      <button onClick={toggleHello}>Toggle</button>
      <button onClick={focusInput}>Focus input</button>
      {/* Conditionnaly rendering Hello functional component */}
      { showHello ? <Hello/> : <div></div>}
        <input 
        name="email"
        ref={inputRef}
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
