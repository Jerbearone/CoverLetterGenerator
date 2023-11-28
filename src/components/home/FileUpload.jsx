import { useState, useEffect } from "react";
import PdfReader from "./PDFReader";

export default function FileUpload({extractedPdfText, setExtractedPdfText}) {
    const [resume, setResume] = useState(null);
 
    useEffect(()=> {
        const loadResumeText = async () => {
            if (resume) {
                const reader = new FileReader();
                reader.onload = async (e) => {
                    const resumeContent = e.target.result;
                    console.log('Resume: ', resumeContent);
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
            <PdfReader extractedPdfText={extractedPdfText} setExtractedPdfText={setExtractedPdfText}></PdfReader>
        </div>
    )
}