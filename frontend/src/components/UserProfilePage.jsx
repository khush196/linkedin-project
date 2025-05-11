import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/UserProfilePage.css'; // We'll create this CSS file

// Placeholder function to simulate fetching user data
// In a real app, this would be an API call
const fetchUserData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'John Doe', // Replace with actual user data
        email: 'john.doe@example.com',
        joinDate: '2023-01-15',
        profilePictureUrl: 'https://source.unsplash.com/150x150/?portrait,person', // Placeholder
        bio: 'Passionate about leveraging AI to streamline professional networking and job searching. Always eager to connect and learn!',
        // You can add more fields like saved resumes, subscription status, etc.
      });
    }, 500);
  });
};


function UserProfilePage() {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate checking if user is logged in
    // In a real app, you'd use your auth context/token here
    const isLoggedIn = true; // Replace with actual auth check
    if (!isLoggedIn) {
      navigate('/login'); // Redirect to login if not authenticated
      return;
    }

    const loadUserData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchUserData();
        setUserData(data);
        setError('');
      } catch (err) {
        setError('Failed to load user data. Please try again later.');
        console.error("Error fetching user data:", err);
      } finally {
        setIsLoading(false);
      }
    };

    loadUserData();
  }, [navigate]);

  if (isLoading) {
    return <div className="profile-loading">Loading profile...</div>;
  }

  if (error) {
    return <div className="profile-error" role="alert">{error}</div>;
  }

  if (!userData) {
    return <div className="profile-no-data">No user data found.</div>;
  }

  return (
    <div className="user-profile-container">
      <header className="profile-header">
        <h1>My Profile</h1>
      </header>

      <main className="profile-content">
        <section className="profile-card">
          <div className="profile-picture-section">
            <img 
              src={userData.profilePictureUrl || 'https://via.placeholder.com/150?text=No+Image'} 
              alt={`${userData.name}'s profile`} 
              className="profile-picture"
            />
            {/* Add a button to change picture if you implement that feature */}
            {/* <button className="change-picture-btn">Change Picture</button> */}
          </div>

          <div className="profile-details-section">
            <h2>{userData.name}</h2>
            <p className="profile-email">
              <span className="detail-label">Email:</span> {userData.email}
            </p>
            <p className="profile-join-date">
              <span className="detail-label">Joined:</span> {new Date(userData.joinDate).toLocaleDateString()}
            </p>
            
            {userData.bio && (
              <div className="profile-bio">
                <h3 className="detail-label">Bio:</h3>
                <p>{userData.bio}</p>
              </div>
            )}

            <button className="edit-profile-btn" onClick={() => alert('Edit profile functionality to be implemented!')}>
              Edit Profile
            </button>
          </div>
        </section>

        {/* Placeholder for additional profile sections */}
        <section className="profile-additional-info">
          <h3>Account Settings</h3>
          <ul className="settings-list">
            <li><a href="#change-password">Change Password</a></li>
            <li><a href="#notification-settings">Notification Preferences</a></li>
            <li><a href="#subscription">Manage Subscription</a></li>
          </ul>
        </section>
        
        <section className="profile-activity">
          <h3>My Activity</h3>
          <p><em>(Your saved resumes, message history, etc., would go here)</em></p>
          {/* Example: <Link to="/my-resumes">View My Resumes</Link> */}
        </section>
      </main>
    </div>
  );
}

export default UserProfilePage;