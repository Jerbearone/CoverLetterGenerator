import { useState, useEffect } from "react";

export default function FileUpload() {
    const [resume, setResume] = useState(null);
    const [resumeTextAreaContent, setResumeTextAreaContent] = useState("Resume Content")

    const handleResumeUpload = async (e) => {
        const selectedFile = await e.target.files[0];
        setResume(selectedFile);
        console.log(selectedFile)
    }

    useEffect(()=> {
        const loadResumeText = async () => {
            if (resume) {
                const reader = new FileReader();
                reader.onload = async (e) => {
                    const resumeContent = e.target.result;
                    console.log('Resume: ', resumeContent);
                    setResumeTextAreaContent(resumeContent);
                }
                reader.readAsText(resume);
    
            } else {
                console.log("null resume");
            }
        }
        loadResumeText();
    },[resume])

    return (
        <div className="flex flex-col mt-10 text-lg items-center">
            <div className="flex flex-row mr-10 mb-10">
                <p className="mr-4">Upload Resume File:</p>
                <input type="file" onChange={handleResumeUpload}></input>
            </div>
            {resume && <textarea className="w-1/2 h-24 p-4 border border-solid border-black cursor-text"
            value={resumeTextAreaContent} onChange={(e)=> {
                setResumeTextAreaContent(e.target.value);
            }}
           ></textarea>}
        </div>
    )
}