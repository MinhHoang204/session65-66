import React from 'react'
import { useSelector } from 'react-redux'

export default function Job() {
    const stateJob = useSelector((state:any)=>{
        return state.jobReducer
    })
    console.log(111111, stateJob);
    
  return (
    <div>Job
        {stateJob.map((item:any)=>{
            return <li key={item.id}>{item.name}</li>
        })}
    </div>
  )
}
