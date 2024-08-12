import React,{useState,useEffect} from 'react';
import axios from 'axios';
const Food = () => {
    const YOUR_APP_ID = "82e453da";
  const YOUR_APP_KEY ="3bb5d1a3b992f408b9003effd74c9c22";
  const url = `https://api.edamam.com/search?q=&app_id=`
    useEffect(()=>{
        const resp = axios.get("url")
         console.log(resp)
    },[])
  return (
    <div>My food data
  

    </div>
  )
}

export default Food