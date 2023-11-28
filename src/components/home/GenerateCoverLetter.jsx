import { useState } from "react"

export default function GenerateCoverLetter ({extractedPdfText, requirementsText, responsibilitiesText, companyName, companyAddress, hiringStaffName}) {
    const [fieldsNotNull, setFieldsNotNull] = useState(false);

    const checkAllFieldsNotEmpty = () => {
        if (extractedPdfText && requirementsText && responsibilitiesText && companyName && companyAddress && hiringStaffName){
            setFieldsNotNull(true);   
        } else {
            setFieldsNotNull(false);
        }
    }
    return (
        <div>
            <button onClick={
                checkAllFieldsNotEmpty
            } className="bg-theOffWhite border border-black border-solid p-2 rounded-md mt-8">Generate Cover Letter</button>
            {fieldsNotNull && <p>Not null</p>}
        </div>
    )
}