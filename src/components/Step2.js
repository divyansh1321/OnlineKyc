// Step2.js
import React from 'react';

function Step2({ onNextStep, onPreviousStep, onUserDataChange }) {
  const handleNext = () => {
    // Additional validation or processing can be done here
    onNextStep();
  };

  const handlePrevious = () => {
    onPreviousStep();
  };

  return (
    <div>
      <h1>Step 2: Additional Information</h1>
      {/* Additional fields can be added here */}
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default Step2;
