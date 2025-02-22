import React, { useState } from "react";
import "../css/ProfilePage.css";

const ProfilePage = () => {
  // State for passwords
  const [passwords, setPasswords] = useState([]);
  const [newPassword, setNewPassword] = useState("");

  // State for images
  const [images, setImages] = useState([]);

  // State for audio files
  const [audioFiles, setAudioFiles] = useState([]);

  // Save Password
  const handleSavePassword = (e) => {
    e.preventDefault();
    if (newPassword.trim()) {
      setPasswords([...passwords, newPassword]);
      setNewPassword("");
      alert("Password saved successfully!");
    }
  };

  // Delete Password
  const handleDeletePassword = (index) => {
    const updatedPasswords = passwords.filter((_, i) => i !== index);
    setPasswords(updatedPasswords);
    alert("Password deleted successfully!");
  };

  // Upload Image
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImages([...images, file]);
      alert("Image uploaded successfully!");
    }
  };

  // Delete Image
  const handleDeleteImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
    alert("Image deleted successfully!");
  };

  // Upload Audio
  const handleAudioUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAudioFiles([...audioFiles, file]);
      alert("Audio file uploaded successfully!");
    }
  };

  // Delete Audio
  const handleDeleteAudio = (index) => {
    const updatedAudioFiles = audioFiles.filter((_, i) => i !== index);
    setAudioFiles(updatedAudioFiles);
    alert("Audio file deleted successfully!");
  };

  return (
    <div className="profile-page">
      {/* Header */}
      <header className="profile-header">
        <h1>Welcome to Your Dashboard</h1>
        <p>Manage your passwords, images, and audio files securely.</p>
      </header>

      {/* Main Content */}
      <main className="profile-content">
        {/* Save Password Section */}
        <section className="password-section">
          <h2>Save Your Passwords</h2>
          <form onSubmit={handleSavePassword}>
            <div className="form-group">
              <label htmlFor="password">New Password</label>
              <input
                type="password"
                id="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter a password to save"
                required
              />
            </div>
            <button type="submit" className="submit-btn">
              Save Password
            </button>
          </form>

          {/* Display Saved Passwords */}
          {passwords.length > 0 && (
            <div className="saved-passwords">
              <h3>Saved Passwords</h3>
              <ul>
                {passwords.map((password, index) => (
                  <li key={index}>
                    <span>{password}</span>
                    <button
                      className="delete-btn"
                      onClick={() => handleDeletePassword(index)}
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* Upload Image Section */}
        <section className="image-section">
          <h2>Upload Your Images</h2>
          <div className="upload-box">
            <input
              type="file"
              id="image-upload"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: "none" }}
            />
            <label htmlFor="image-upload" className="upload-label">
              Choose an image
            </label>
          </div>

          {/* Display Uploaded Images */}
          {images.length > 0 && (
            <div className="uploaded-images">
              <h3>Uploaded Images</h3>
              <div className="image-grid">
                {images.map((image, index) => (
                  <div key={index} className="image-item">
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`Uploaded ${index + 1}`}
                    />
                    <button
                      className="delete-btn"
                      onClick={() => handleDeleteImage(index)}
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Upload Audio Section */}
        <section className="audio-section">
          <h2>Upload Your Audio Files</h2>
          <div className="upload-box">
            <input
              type="file"
              id="audio-upload"
              accept="audio/*"
              onChange={handleAudioUpload}
              style={{ display: "none" }}
            />
            <label htmlFor="audio-upload" className="upload-label">
              Choose an audio file
            </label>
          </div>

          {/* Display Uploaded Audio Files */}
          {audioFiles.length > 0 && (
            <div className="uploaded-audio">
              <h3>Uploaded Audio Files</h3>
              <ul>
                {audioFiles.map((audio, index) => (
                  <li key={index}>
                    <span>{audio.name}</span>
                    <button
                      className="delete-btn"
                      onClick={() => handleDeleteAudio(index)}
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default ProfilePage;
