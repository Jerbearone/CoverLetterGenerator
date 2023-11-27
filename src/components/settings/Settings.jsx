import { useState } from "react";
import { setUserAddressOne, setUserAddressTwo, setUserFirstName, setUserLasttName, setUserPhoneNumber } from "../../util/LocalStorageApi";

export default function Settings(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [addressOne, setAddressOne] = useState("");
    const [addressTwo, setAddressTwo] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const saveAllUserInfo = () => {
        setUserFirstName(firstName);
        setUserLasttName(lastName);
        setUserAddressOne(addressOne);
        setUserAddressTwo(addressTwo);
        setUserPhoneNumber(phoneNumber);
        console.log("info was saved");
        //console.log(`${firstName} ${lastName} ${addressOne} ${addressTwo} ${phoneNumber}`)

    }

    
    return (
    <div className="flex flex-col w-full items-center mt-2 bg-theBlue rounded-lg">
        <div className="flex flex-col p-4 bg-theBlue w-1/2 items-center rounded-lg">
            <p className="text-2xl mt-4 mb-4">Settings</p>
            <label className="text-xl mt-4 mb-4 w-64">First name: 
            <input onChange={(e)=>{setFirstName(e.target.value)}} className="border border-solid border-black w-64 rounded-md"></input></label>
            <label className="text-xl mt-4 mb-4 w-64">Last name: 
            <input onChange={(e)=>{setLastName(e.target.value)}} className="border border-solid border-black w-64 rounded-md"></input></label>
            <label className="text-xl mt-4 mb-4 w-64">Address 1: 
            <input onChange={(e)=>{setAddressOne(e.target.value)}} className="border border-solid border-black w-64 rounded-md"></input></label>
            <label className="text-xl mt-4 mb-4 w-64">Address 2: 
            <input onChange={(e)=>{setAddressTwo(e.target.value)}} className="border border-solid border-black w-64 rounded-md"></input></label>
            <label className="text-xl mt-4 mb-4 w-64">Phone Number: 
            <input onChange={(e)=>{setPhoneNumber(e.target.value)}} className="border border-solid border-black w-64 rounded-md"></input></label>
            <button onClick={saveAllUserInfo} className="border border-solid border-black text-xl bg-white pl-4 pr-4 mt-4 mb-4 w-20 rounded-lg">Save</button>
        </div>
    </div>)
}