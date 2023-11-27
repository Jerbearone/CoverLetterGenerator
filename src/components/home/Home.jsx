import FileUpload from "./FileUpload";
import JobHeaders from "./JobHeaders";
import JobRequirements from "./JobRequirements";
import JobResponsibilities from "./JobResponsibilities";

export default function Home () {
    return (
        <div className="w-full mt-8 justify-center bg-theBlue p-4">
            <FileUpload></FileUpload>
            <JobRequirements></JobRequirements>
            <JobResponsibilities></JobResponsibilities>
            <JobHeaders></JobHeaders>
        </div>
    )
}