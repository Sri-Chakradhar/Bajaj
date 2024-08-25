import React from "react";
import Filter from "./components/filter.js"


const Solution = () => {
    return (
        <div className="">
            <form action="" className="">
                <div className="flex">
                <label>
                     API REQUEST 
                    <input name="string" />
                </label>
                <button type="sumbit">
                    <h1>Submit</h1>
                </button>
                </div>
            </form>
            <div className="">
                <Filter/>
            </div>
        </div>
    )
}
export default Solution;