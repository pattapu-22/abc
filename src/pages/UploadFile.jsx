import React, { useState } from 'react';
import mammoth from 'mammoth';

function App() {
  const [file, setFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [preview, setPreview] = useState(null);
  const [docContent, setDocContent] = useState('');

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
    setSubmitted(false);
    
    if (uploadedFile) {
      const fileType = uploadedFile.type;
      // Create a preview URL for images and PDFs
      setPreview(fileType.startsWith('image/') || fileType === 'application/pdf' ? URL.createObjectURL(uploadedFile) : null);
      if (fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        handleDocxFile(uploadedFile);
      }
    }
  };

  const handleDocxFile = async (file) => {
    const arrayBuffer = await file.arrayBuffer();
    const { value } = await mammoth.convertToHtml({ arrayBuffer });
    setDocContent(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) setSubmitted(true);
  };

  const handleBack = () => {
    setSubmitted(false);
    setFile(null);
    setPreview(null);
    setDocContent('');
  };

  const renderContent = () => {
    if (file) {
      const fileType = file.type;
      // Display based on file type
      if (fileType.startsWith('image/')) {
        return `<img src="${preview}" alt="File Preview" class="max-w-full max-h-96 rounded" />`;
      } else if (fileType === 'application/pdf') {
        return `<iframe src="${preview}" title="PDF Preview" class="w-full h-96 border rounded"></iframe>`;
      } else if (fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        return docContent; // DOCX content is already in HTML format
      } else if (fileType === 'application/vnd.openxmlformats-officedocument.presentationml.presentation') {
        const googleViewerUrl = `https://docs.google.com/gview?url=${encodeURIComponent(preview)}&embedded=true`;
        return `<iframe src="${googleViewerUrl}" title="PPT Preview" class="w-full h-96 border rounded"></iframe>`;
      }
    }
    return null;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#181818]">
      <div className="bg-[#222222] p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-xl font-semibold mb-4 text-center text-white">{submitted ? 'File Submitted!' : 'Upload a File'}</h2>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <input
              type="file"
              onChange={handleFileChange}
              className="mb-4 p-2 border border-gray-300 rounded text-white"
              accept="image/*,.pdf,.doc,.docx,.ppt,.pptx"
            />
            <button type="submit" className="bg-blue-950 text-white px-4 py-2 rounded hover:bg-blue-900 transition">Submit</button>
          </form>
        ) : (
          <div className="mt-4">
            <p className="text-lg font-medium mb-2">File Preview:</p>
            <div className="border p-4 h-96 overflow-auto" dangerouslySetInnerHTML={{ __html: renderContent() }} />
          </div>
        )}
        {submitted && (
          <button onClick={handleBack} className="bg-red-500 text-white px-4 py-2 mt-4 rounded hover:bg-red-600 transition">Back to Upload</button>
        )}
      </div>
    </div>
  );
}

export default App;
