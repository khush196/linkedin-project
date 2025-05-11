import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/homepage.css'; // We will update this CSS file

function HomePage() {
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [resumeFile, setResumeFile] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false); // For future API calls

  const navigate = useNavigate();

  const handleUrlChange = (e) => {
    setLinkedinUrl(e.target.value);
    if (error) setError(''); // Clear error when user types
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const allowedTypes = [
        'application/pdf',
        'image/jpeg',
        'image/png',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ];
      const maxSize = 5 * 1024 * 1024; // 5MB

      if (!allowedTypes.includes(file.type)) {
        setResumeFile(null);
        e.target.value = null; // Reset file input
        setError('Invalid file type. Please upload PDF, DOC, DOCX, JPG, or PNG.');
        return;
      }

      if (file.size > maxSize) {
        setResumeFile(null);
        e.target.value = null; // Reset file input
        setError('File is too large. Maximum size is 5MB.');
        return;
      }
      
      setResumeFile(file);
      if (error) setError(''); // Clear error
    }
  };

  const handleGenerateMessage = async () => {
    setError(''); // Clear previous errors

    // Basic URL validation
    if (!linkedinUrl.trim()) {
      setError('Please enter a LinkedIn profile URL.');
      return;
    }
    try {
      const url = new URL(linkedinUrl);
      if (!url.protocol.startsWith('http')) {
          throw new Error('Invalid protocol');
      }
      // You could add more specific LinkedIn URL checks here if needed
    } catch (_) {
      setError('Please enter a valid LinkedIn profile URL (e.g., https://linkedin.com/in/profilename).');
      return;
    }

    if (!resumeFile) {
      setError('Please upload your resume.');
      return;
    }

    setIsLoading(true); // Start loading state

    // --- Placeholder for API call ---
    // In a real application, you would send linkedinUrl and resumeFile
    // to your backend API here.
    // For example:
    // const formData = new FormData();
    // formData.append('linkedin_url', linkedinUrl);
    // formData.append('resume', resumeFile);
    // try {
    //   const response = await fetch('/api/generate-message', {
    //     method: 'POST',
    //     body: formData,
    //   });
    //   if (!response.ok) throw new Error('Failed to generate message');
    //   const data = await response.json();
    //   // Navigate to the results page, potentially with the generated message ID or data
    //   navigate('/generate', { state: { messageData: data } });
    // } catch (apiError) {
    //   setError(`Error generating message: ${apiError.message}`);
    //   setIsLoading(false);
    //   return;
    // }
    // --- End of placeholder ---

    // For now, we'll simulate a delay and then navigate.
    console.log('Generating message for URL:', linkedinUrl);
    console.log('With resume:', resumeFile.name);

    // Simulate API call delay
    setTimeout(() => {
      setIsLoading(false);
      // Navigate to the page where the message will be displayed
      // The MessageGeneratorPage.jsx currently has a placeholder,
      // it would need to be updated to receive and display actual data or fetch it.
      navigate('/generate');
    }, 1500);
  };

  return (
    <div className="home-page-container">
      <header className="home-header">
        <h1>Your AI LinkedIn Co-Pilot</h1>
        <p>
          Generate hyper-personalized connection requests and messages.
          Upload your resume and the target's LinkedIn profile to get started.
        </p>
      </header>

      <main className="home-main-content">
        <div className="input-section">
          <div className="form-group">
            <label htmlFor="linkedinUrl">Target's LinkedIn Profile URL</label>
            <input
              type="url"
              id="linkedinUrl"
              value={linkedinUrl}
              onChange={handleUrlChange}
              placeholder="e.g., https://www.linkedin.com/in/target-profile-name"
              aria-required="true"
              aria-describedby={error && linkedinUrl === '' ? "error-message-id" : undefined}
            />
          </div>

          <div className="form-group">
            <label htmlFor="resumeUpload">Upload Your Resume</label>
            <input
              type="file"
              id="resumeUpload"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx,image/jpeg,image/png"
              aria-required="true"
              aria-describedby={error && resumeFile === null ? "error-message-id" : undefined}
            />
            <small className="file-requirements">Accepted: PDF, DOC, DOCX, JPG, PNG (Max 5MB)</small>
            {resumeFile && <p className="file-name">Selected file: {resumeFile.name}</p>}
          </div>

          {error && <p id="error-message-id" className="error-message" role="alert">{error}</p>}

          <button
            onClick={handleGenerateMessage}
            className="generate-button"
            disabled={isLoading}
          >
            {isLoading ? 'Generating...' : 'Generate Personalized Message'}
          </button>
        </div>
      </main>

      <footer className="home-footer">
        <p>© {new Date().getFullYear()} LinkedIn AI Message Generator. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;