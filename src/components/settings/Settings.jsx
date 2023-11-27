export default function Settings(){
    return (
    <div className="flex flex-col w-full items-center">
        <div className="flex flex-col p-4 bg-theBlue w-1/5 items-center">
            <p className="text-2xl mt-4 mb-4">Settings</p>
            <label className="text-xl mt-4 mb-4">First name: <input className="border border-solid border-black w-full"></input></label>
            <label className="text-xl mt-4 mb-4">Last name: <input className="border border-solid border-black w-full"></input></label>
            <label className="text-xl mt-4 mb-4">Address 1: <input className="border border-solid border-black w-full"></input></label>
            <label className="text-xl mt-4 mb-4">Address 2: <input className="border border-solid border-black w-full"></input></label>
            <label className="text-xl mt-4 mb-4">Phone Number: <input className="border border-solid border-black w-full"></input></label>
            <button className="border border-solid border-black text-xl bg-white pl-4 pr-4 mt-4 mb-4 w-20">Save</button>
        </div>
    </div>)
}