import { useState } from "react"

export default function JobRequirements() {
    const [requirementsText, setRequirementsText] = useState('');
    return(
        <div className="flex flex-col justify-center items-center">
            <p className="mt-10">Job requirements</p>
            <textarea className="w-1/2 h-24 p-4 border border-solid border-black cursor-text" value={requirementsText} onChange={
                (e)=> {
                    setRequirementsText(e.target.value);
                }
            } type="text"></textarea>
        </div>
    )
}