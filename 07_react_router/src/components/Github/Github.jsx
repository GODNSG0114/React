import React, { useEffect, useState } from 'react'

import { useLoaderData } from 'react-router-dom'
function Github() {
   const data = useLoaderData()
    // const [data , setData] = useState([]);
    // useEffect(()=>{
    //      fetch("https://api.github.com/users/GODNSG0114")
    //      .then(res => res.json())
    //      .then(data=>{
    //           setData(data);
    //      }) // GODNSG0114
    // })
  return (
    <div className='text-4xl bg-amber-500 p-5'>Github Followers: {data.followers} 
       <img src= {data.avatar_url} alt="Git picture" width={300}/>
    </div>
  )
}

export default Github


export const useLoaderforGithubFetch = async()=>{
       const responce = await fetch("https://api.github.com/users/GODNSG0114")
       return responce.json();
}