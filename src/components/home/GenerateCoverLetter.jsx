import { useEffect, useState } from "react"
import getAPIKey from "../../util/localApiKey";
import { getUserAddressOne, getUserAddressTwo, getUserFirstName, getUserLastName, getUserPhoneNumber } from "../../util/LocalStorageApi";

export default function GenerateCoverLetter ({extractedPdfText, requirementsText, responsibilitiesText, companyName, companyAddress, hiringStaffName}) {
    const [fieldsNotNull, setFieldsNotNull] = useState(false);
    const [generatedCoverLetter, setGeneratedCoverLetter] = useState('');
    const [formattedInput, setFormattedInput] = useState('');
    const [userInfo, setUserInfo] = useState({});

    const checkAllFieldsNotEmpty = () => {
        if (extractedPdfText && requirementsText && responsibilitiesText && companyName && companyAddress && hiringStaffName){
            setFormattedInput(`Build a cover letter with the following: My Resume: ${extractedPdfText}, job requirements: ${requirementsText}, job responsibilities:${responsibilitiesText},
            company name: ${companyName}, company address: ${companyAddress}, hiring staff name: ${hiringStaffName}`)
            setFieldsNotNull(true);   
        } else {
            setFieldsNotNull(false);
        }
    }

    /*useEffect(()=>{
        const URL = `https://api.openai.com/v1/chat/completions`
        const apiKey = getAPIKey();
        console.log(apiKey)
        console.log("formatted input: ", formattedInput)
        const fetchCoverLetter = async () => {
            if (formattedInput) {
                console.log("generating cover letter");
                const requestData = {
                    messages: formattedInput,
                    max_tokens: 2500,
                    n: 1,
                }
                const data = await fetch(URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${apiKey}`
                    },
                    body: JSON.stringify(requestData)
                });
                console.log(data);
                const formattedData = await data.choices[0].text;
                setGeneratedCoverLetter(formattedData);
            }
        }
        fetchCoverLetter();

    },[formattedInput])*/

    const loadUserInfo = () => {
        const userFirstName = getUserFirstName();
        const userLastName = getUserLastName();
        const userAddress = getUserAddressOne();
        const userAddressTwo = getUserAddressTwo();
        const userPhoneNumber = getUserPhoneNumber();
        setUserInfo({'firstName': userFirstName, 'lastName': userLastName, 'addressOne': userAddress, 'addressTwo': userAddressTwo, 'userPhone': userPhoneNumber})
    }

    const generateNewCoverLetter = () => {
        const URL = `https://api.openai.com/v1/chat/completions`
        const apiKey = getAPIKey();
        loadUserInfo();
        console.log(apiKey)
        console.log("formatted input: ", formattedInput)
        const fetchCoverLetter = async () => {
            if (formattedInput) {
                console.log("generating cover letter");
                //change prompt to request data
                const requestData = {
                    model: "text-davinci-003",
                    prompt: "I love you"
                }
                try{
                    const data = await fetch(URL, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${apiKey}`
                        },
                        body: JSON.stringify(requestData)
                    });
                    const fetchedData = await data.json();
                    const formattedData = await fetchedData.choices[0].text;
                    setGeneratedCoverLetter(formattedData);

                }catch(e){
                    console.log(e);
                }
            }
        }
        fetchCoverLetter();
    }


    return (
        <div>
            <button onClick={()=>{
                checkAllFieldsNotEmpty();
                generateNewCoverLetter();
            }
                
            } className="bg-theOffWhite border border-black border-solid p-2 rounded-md mt-8">Generate Cover Letter</button>
            {fieldsNotNull &&
            <div className="flex flex-col items-center justify-center mt-7">
                <p className="font-bold text-xl">Past this into Chat GPT</p>
                <p className="flex w-1/2 border border-solid border-black bg-white rounded-lg">
                    {`Create a cover letter with this info: My Info: my name: ${userInfo.firstName} ${userInfo.lastName}, my address: ${userInfo.addressOne} ${userInfo.addressTwo}
                my phone number: ${userInfo.userPhoneNumber}  My Resume: ${extractedPdfText}, job requirements: ${requirementsText}, job responsibilities:${responsibilitiesText},
                company name: ${companyName}, company address: ${companyAddress}, hiring staff name: ${hiringStaffName}. Don't include skills not on my resume`}</p>
                <p>{generatedCoverLetter}</p>
             </div>
             }
        </div>
    )
}