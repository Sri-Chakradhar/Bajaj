import React from "react";
import Filter from "./components/filter.js"
import { useState } from "react";
import styles from './index.css';
import Form from './components/form.js'
import handleSubmit from "./components/form.js";

import Axios from "axios"

const Solution = () => {

    const [data,setData]=useState("")

    function handleSubmit () {
           console.log("Called");
           console.log(data);
    
           Axios.post("https://bjajbck-production.up.railway.app/bfhl",{data}).then((res)=>{
            console.log(res);
           })
           
        // fetch('https://bjajbck-production.up.railway.app/bfhl', {
        //         method: 'POST',
        //         headers:{
        //              'Content-Type': 'application/json'
        //           },
        //         //   body: JSON.stringify(this.state)
        //           body: JSON.stringify(data)
        //           }).then((response) => response.json())
                 
        //     .catch((error) =>  console.log(error.message));
         };

    return (
        <div className="border-spacing-2 border-b-slate-800 font-semibold text-white">
            <form  className="flex justify-center p-36 border-red-600">
                <div className="flex">
                <label className="">
                     API REQUEST 
                    <input name="application/json" onChange={(e)=>{
                        setData(e.target.value)
                    }}  className="m-5 text-black"/>
                </label>
                <button onClick={(e)=>{
                    e.preventDefault()
                    handleSubmit()
                }}>
                    <h1>Submit</h1>
                </button>
                </div>
            </form>
            <div className="flex justify-center">
                <Filter/>
            </div>
        </div>
    )
}
export default Solution;