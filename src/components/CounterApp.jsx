import React from 'react'
import { useState } from "react";
import Button from './Button';
import Message from './Message';

const CounterApp = () => {
const[count,setCount]=useState(0);
const printplus=()=>{
  setCount(count+1);
}
const printminus=()=>{
  setCount(count>0?count-1:count)
}
const run=(e)=>{
  console.log(e);
  if(e.target.innerText=="+"){
    printplus();
  }
  else{
    printminus();
  }
}
  return (
    <div>
    <h1>counterapp</h1>
    <Message value="0"/>   
    <Button name="+" /> &nbsp;
    <Button name="-"  />
    
    </div>
  )
}

export default CounterApp
