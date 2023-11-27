import { useState } from 'react';
import { pdfjs } from 'react-pdf';

 pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfReader = () => {
  const [numPages, setNumPages] = useState(null);
  const [file, setFile] = useState(null);
  const [text, setText] = useState('');

  const processPdf = async (file) => {
    const pdfData = new Uint8Array(await file.arrayBuffer());
    const pdf = await pdfjs.getDocument({ data: pdfData }).promise;

    let fullText = '';
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      const pageText = textContent.items.map((s) => s.str).join(' ');
      fullText += pageText + '\n';
    }

    setText(fullText);
    setNumPages(pdf.numPages);
  };

  const onFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);

    if (selectedFile) {
      processPdf(selectedFile);
    }
  };

  return (
    <div className='w-full'>
      <input type="file" onChange={onFileChange} />
      {file && (
        <div className='w-full'>
          <div>
            <p>Page {numPages} of {numPages}</p>
          </div>
          <textarea className='w-1/2 h-24 mt-10 p-4 border border-solid border-black cursor-text' value={text}></textarea>
        </div>
      )}
    </div>
  );
};

export default PdfReader;