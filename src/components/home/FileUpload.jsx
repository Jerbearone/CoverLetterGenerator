import { useState, useEffect } from "react";
import PdfReader from "./PDFReader";

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
            <PdfReader></PdfReader>
        </div>
    )
}