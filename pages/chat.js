import React from 'react'
import { useState } from 'react';
function chat() {
    const [text,setText]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
     

    }
  return (
    <div className="w-full h-screen bg-custom-light-yellow">
        <div className='w-full px-5 py-5 justify-center font-semibold flex text-2xl fixed'>chat with us</div>
        <form className="w-full fixed bottom-0 sm:px-24 px-6 flex justify-center py-9" onSubmit={(e)=>handleSubmit(e)}>
            <input type="text" className='w-full text-xl rounded-md py-2 px-4 flex items-center' placeholder='Enter your answer here' value={text} onChange={(e)=>setText(e.target.value)}></input>
        </form>
    </div>
  )
}

export default chat