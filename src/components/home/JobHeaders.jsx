export default function JobHeaders() {
    return (
        <div className="flex flex-col mt-10 items-center">
            <div className="flex flex-row">
                <p className="mr-4">Company Name:</p>
                <input className="border border-solid border-black"></input>

            </div>
            <div className="flex flex-row mt-4">
                <p className="mr-4">Company Address:</p>
                <input className="border border-solid border-black"></input>

            </div>
            <div className="flex flex-row mt-4 ">
                <p className="mr-4">Hiring Staff Name:</p>
                <input className="border border-solid border-black"></input>

            </div>


        </div>
    )
}