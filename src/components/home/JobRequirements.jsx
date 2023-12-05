
export default function JobRequirements({requirementsText, setRequirementsText}) {
    return(
        <div className="flex flex-col justify-center items-center">
            <p className="mt-10">Job requirements</p>
            <textarea className="w-1/2 h-24 p-4 border border-solid border-black cursor-text rounded-lg" value={requirementsText} onChange={
                (e)=> {
                    setRequirementsText(e.target.value);
                }
            } type="text"></textarea>
        </div>
    )
}