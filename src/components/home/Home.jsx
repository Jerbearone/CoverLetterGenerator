import { useState } from "react";
import FileUpload from "./FileUpload";
import GenerateCoverLetter from "./GenerateCoverLetter";
import JobHeaders from "./JobHeaders";
import JobRequirements from "./JobRequirements";
import JobResponsibilities from "./JobResponsibilities";

export default function Home () {
    const [extractedPdfText, setExtractedPdfText] = useState('');
    const [requirementsText, setRequirementsText] = useState('');
    const [responsibilitiesText, setResponsibilitiesText] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [companyAddress, setCompanyAddress] = useState('');
    const [hiringStaffName, setHiringStaffName] = useState('Hiring Staff');
    return (
        <div className="w-full mt-2 justify-center bg-theBlue p-4 rounded-lg">
            <FileUpload extractedPdfText={extractedPdfText} setExtractedPdfText={setExtractedPdfText}></FileUpload>
            <JobRequirements requirementsText={requirementsText} setRequirementsText={setRequirementsText}></JobRequirements>
            <JobResponsibilities responsibilitiesText={responsibilitiesText} setResponsibilitiesText={setResponsibilitiesText}></JobResponsibilities>
            <JobHeaders 
                setCompanyName={setCompanyName} setCompanyAddress={setCompanyAddress} setHiringStaffName={setHiringStaffName}>
            </JobHeaders>
            <GenerateCoverLetter extractedPdfText={extractedPdfText} requirementsText={requirementsText} responsibilitiesText={responsibilitiesText}
            companyName={companyName} companyAddress={companyAddress} hiringStaffName={hiringStaffName}></GenerateCoverLetter>
        </div>
    )
}