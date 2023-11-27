import { useState } from "react"

export default function JobResponsibilities() {
    const [responsibilitiesText, setResponsibilitiesText] = useState('');
    return (
        <div className="flex flex-col justify-center items-center">
            <p className="mt-10">Job Responsibilities</p>
            <textarea className="w-1/2 h-24 p-4 border border-solid border-black cursor-text" value={responsibilitiesText} onChange={
                (e)=> {
                    setResponsibilitiesText(e.target.value);
                }
            } type="text"></textarea>
        </div>
    )
}