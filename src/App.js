import React, { useState } from "react";
// import logo from './logo.svg';
import './App.css';
import { useForm } from "./useForm";

function App() {

  const [values, handleChange] = useForm({ email: '', password: ''});


  // const increment = count => count + 1;

  return (
    <div className="App">
      {/* <Formik></Formik> */}
      <input 
      name="email"
      value={values.email}
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
