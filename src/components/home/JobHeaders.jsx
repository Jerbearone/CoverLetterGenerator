export default function JobHeaders({setCompanyName, setCompanyAddress, setHiringStaffName}) {
    return (
        <div className="flex flex-col mt-10 items-center">
            <div className="flex flex-row">
                <p className="mr-4">Company Name:</p>
                <input onChange={(e)=>{setCompanyName(e.target.value)}} className="border border-solid border-black rounded-md"></input>

            </div>
            <div className="flex flex-row mt-4">
                <p className="mr-4">Company Address:</p>
                <input onChange={(e)=>{setCompanyAddress(e.target.value)}} className="border border-solid border-black rounded-md"></input>

            </div>
            <div className="flex flex-row mt-4 ">
                <p className="mr-4">Hiring Staff Name:</p>
                <input onChange={(e)=>{setHiringStaffName(e.target.value)}} className="border border-solid border-black rounded-md"></input>

            </div>


        </div>
    )
}