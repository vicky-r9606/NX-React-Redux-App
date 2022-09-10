import React, { useState } from "react";
import { useDispatch } from "react-redux";
import userSlice from "../../Store/InputSlice";
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const dispatch = useDispatch(); 

    const navigate = useNavigate();
    const [text,setText] = useState('');

    const changeText = (val : React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>{
        setText(val.target.value);
    }

    const submitText = (e : React.FormEvent) =>{
        e.preventDefault();
        dispatch(userSlice.actions.saveText(text));
    }


    return (
        <div className='w-full h-full centered  bg-blue md:h-screen form'>
            <form onSubmit={submitText}>
                <div>
                    <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Enter the Input to Save to Redux Store</label>
                    <input placeholder="Enter Input Here" type="text" id="small-input" className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     onChange={changeText}/>
                </div>
                <div>
                    <button type="button" className="text-white bg-gradient-to-r from-blue-500 
                    via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 
                    dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg 
                    dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 
                    text-center mr-2 mb-2 submitButton" onClick ={submitText} typeof="submit">Submit</button>
                </div>

                <div>
                    <button type="button" className="text-white bg-gradient-to-r from-blue-500 
                    via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 
                    dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg 
                    dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 
                    text-center mr-2 mb-2 submitButton" onClick={() => {
                        navigate("/Display");
                    }}>Go To Display</button>
                </div>
            </form>
        </div>
    );
}


export default Form;