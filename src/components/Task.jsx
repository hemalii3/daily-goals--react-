import React, { useState } from 'react';
const Task=({title,description,deletetask,index})=>{
      return <div className='task'>
            <div>
            <p>{title}</p>
            <span className='span'>{description}</span>
            </div>
            <button className='btn' onClick={()=>deletetask(index)} >-</button>
      </div>
}

export default Task;
