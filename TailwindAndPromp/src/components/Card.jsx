import React from 'react'

// esko destructing krke direct {username} likh sakte hai , q ki bar bar props.username likhna acha nhi hai
function Card({ username, btnText = "Read More" }) {
    return (
        <div className="max-w-xs p-6 rounded-md shadow-md bg-black p-4">
            <img
                src="https://images.pexels.com/photos/5370666/pexels-photo-5370666.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
            />
            <div className="mt-6 mb-2">
                <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
                    Julia Volt
                </span>
                <h2 className="text-xl font-semibold tracking-wide">{username}</h2>
            </div>
            <p className="text-gray-300">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
                amet
            </p>
            <button
                type="button"
                className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
            >
                {/* if here value is not comming from where is calling then it will be default value , we can also pass here defalut value like as {btnText || "Read more"} 
                but our read ability is be less , so we pass in the function as where props are is being written  */}
               {btnText} 
            </button>
        </div>
    )
}

export default Card