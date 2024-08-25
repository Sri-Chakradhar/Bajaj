import React from "react";
import Filter from "./components/filter.js"
import styles from './index.css';


const Solution = () => {
    return (
        <div className="border-spacing-2 border-b-slate-800 font-semibold text-white">
            <form action="" className="flex justify-center p-36 border-red-600">
                <div className="flex">
                <label className="">
                     API REQUEST 
                    <input name="string"  className="m-5"/>
                </label>
                <button type="sumbit">
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