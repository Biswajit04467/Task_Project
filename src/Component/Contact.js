import React from "react";

const Contact = () => {
    return (
        <div>
            <h1>Contact</h1>
            <form>
                <input type="text" placeholder="name" className=" border border-black m-4 p-2" />
                <input type="text" placeholder="comments" className=" border border-black m-4 p-2" />
                <button className=" bg-gray-600 p-2 text-white rounded-lg hover:bg-gray-400">Submit</button>
            </form>
        </div>
    )
}

export default Contact;