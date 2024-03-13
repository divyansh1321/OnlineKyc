// Step4.js
import React from 'react';

function Step4({ userData, onPreviousStep }) {
  const handleSubmit = () => {
    // Handle form submission, e.g., send data to server for verification
    console.log('Submitting data:', userData);
  };

  const handlePrevious = () => {
    onPreviousStep();
  };

  return (
    <div>
      <h1>Step 4: Review Information</h1>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      <p>ID Number: {userData.idNumber}</p>
      {/* Additional fields and video preview can be displayed here */}
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Step4;
