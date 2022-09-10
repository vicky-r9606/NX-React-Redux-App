import React, { ComponentState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';


const Display = () => {

    const user = useSelector((state : ComponentState) => state.input);
    const navigate = useNavigate();

    const navigateToForm = () =>{
        navigate("/");
    }
    
    return (
      <React.Fragment>
        <div className="w-full h-full bg-black-800 text-white centered md:h-screen display">
          <div>
          <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-white-900 dark:text-white-300">Your Entered Value from Redux Store</label>
            <input
              type="text"
              id="small-input"
              readOnly
              className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={user}
           />
           <div>
                    <button type="button" className="text-white bg-gradient-to-r from-green-500 
                    via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 
                    dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg 
                    dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 
                    text-center mr-2 mb-2 submitButton" onClick={navigateToForm}>Back</button>
                </div>
          </div>
          
        </div>
      </React.Fragment>
    );
}

export default Display;