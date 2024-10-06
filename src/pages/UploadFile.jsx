
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const UploadPage = () => {
//   const [file, setFile] = useState(null);
//   const [fileContent, setFileContent] = useState('');
//   const navigate = useNavigate();

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (file) {
//       const reader = new FileReader();

//       // Read the file as text
//       reader.onload = (event) => {
//         setFileContent(event.target.result);
//       };

//       // Start reading the file
//       reader.readAsText(file);
//     } else {
//       console.log('No file selected');
//     }
//   };

//   return (
//     <div className="min-h-screen grid place-items-center bg-[#181818]">
//       <form 
//         onSubmit={handleSubmit} 
//         className="bg-gradient-to-r from-gray-800 to-gray-700 p-8 rounded-lg shadow-lg text-center space-y-6"
//       >
//         <h2 className="text-2xl text-white font-semibold">Upload a File</h2>
//         <input 
//           type="file" 
//           onChange={handleFileChange} 
//           className="block w-full p-2 border border-gray-600 rounded-md text-white bg-gray-800"
//           required 
//         />
//         <button 
//           type="submit" 
//           className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
//         >
//           Submit
//         </button>
//       </form>

//       {/* Display the file content if available */}
//       {fileContent && (
//         <div className="mt-6 p-4 bg-gray-700 text-white rounded-md">
//           <h3 className="text-lg font-semibold">File Content:</h3>
//           <pre>{fileContent}</pre>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UploadPage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UploadPage = () => {
  const [file, setFile] = useState(null);
  const [fileContent, setFileContent] = useState(null); // Use null to indicate no content yet
  const [fileType, setFileType] = useState('');
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setFileType(selectedFile.type); // Store the file type
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      const reader = new FileReader();

      // Handle different file types
      if (fileType.startsWith('image/')) {
        reader.onload = (event) => {
          setFileContent(event.target.result); // Set image data URL
        };
        reader.readAsDataURL(file); // Read image as data URL
      } else if (fileType === 'text/plain') {
        reader.onload = (event) => {
          setFileContent(event.target.result); // Set text content
        };
        reader.readAsText(file); // Read text file
      } else {
        // For other file types, display a message
        setFileContent(`File uploaded: ${file.name}. Unfortunately, we cannot display the content of this file type.`);
      }

      // Optionally navigate or do something else
      navigate('/success'); // Navigate to success route after upload
    } else {
      console.log('No file selected');
    }
  };

  return (
    <div className="min-h-screen grid place-items-center bg-[#181818]">
      <form 
        onSubmit={handleSubmit} 
        className="bg-gradient-to-r from-gray-800 to-gray-700 p-8 rounded-lg shadow-lg text-center space-y-6"
      >
        <h2 className="text-2xl text-white font-semibold">Upload a File</h2>
        <input 
          type="file" 
          onChange={handleFileChange} 
          className="block w-full p-2 border border-gray-600 rounded-md text-white bg-gray-800"
          required 
        />
        <button 
          type="submit" 
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Submit
        </button>
      </form>

      {/* Display the file content if available */}
      {fileContent && (
        <div className="mt-6 p-4 bg-gray-700 text-white rounded-md">
          <h3 className="text-lg font-semibold">File Content:</h3>
          {fileType.startsWith('image/') ? (
            <img src={fileContent} alt="Uploaded" className="mt-2 max-w-full h-auto" />
          ) : (
            <pre>{fileContent}</pre>
          )}
        </div>
      )}
    </div>
  );
};

export default UploadPage;
