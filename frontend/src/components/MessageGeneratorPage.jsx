import React, { useState } from 'react';
import '../styles/MessageGeneratorPage.css'; 

function MessageGeneratorPage() {
    const [message, setMessage] = useState(''); // State to hold the generated message

    // Placeholder for message display (replace with actual message from API)
    const displayMessage = () => {
        // In a real application, you would fetch the message from your backend API here
        const exampleMessage = "This is an example of a personalized message.  It would be customized based on the user's resume and the target LinkedIn profile.";
        setMessage(exampleMessage);
    };

    return (
        <div className="message-generator-page">
            <h1>Generated Message</h1>
            <button onClick={displayMessage}>Show Message</button> {/* Button to trigger message generation (API call) */}
            <div className="message-container">
                {message && <p>{message}</p>} {/* Display the message */}
            </div>
        </div>
    );
}

export default MessageGeneratorPage;