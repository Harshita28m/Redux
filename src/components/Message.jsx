import React from 'react'
import { useSelector } from 'react-redux'

const Message = ({value}) => {
   const selector = useSelector(state=>state.counterReducer);
   console.log('counter is', selector);
  return (
    <div>
       <h2>Value of count is {selector.counter} </h2>
    </div>
  )
}

export default Message
