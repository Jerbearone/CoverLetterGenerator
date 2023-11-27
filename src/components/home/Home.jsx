import FileUpload from "./FileUpload";
import GenerateCoverLetter from "./GenerateCoverLetter";
import JobHeaders from "./JobHeaders";
import JobRequirements from "./JobRequirements";
import JobResponsibilities from "./JobResponsibilities";

export default function Home () {
    return (
        <div className="w-full mt-2 justify-center bg-theBlue p-4 rounded-lg">
            <FileUpload></FileUpload>
            <JobRequirements></JobRequirements>
            <JobResponsibilities></JobResponsibilities>
            <JobHeaders></JobHeaders>
            <GenerateCoverLetter></GenerateCoverLetter>
            
        </div>
    )
}