import { useState } from "react"

export default function JobResponsibilities({responsibilitiesText, setResponsibilitiesText}) {
    return (
        <div className="flex flex-col justify-center items-center">
            <p className="mt-10">Job Responsibilities</p>
            <textarea className="w-1/2 h-24 p-4 border border-solid border-black cursor-text rounded-lg" value={responsibilitiesText} onChange={
                (e)=> {
                    setResponsibilitiesText(e.target.value);
                }
            } type="text"></textarea>
        </div>
    )
}