// App.js
import React, { useState } from 'react';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Step5 from './components/Step5';
import './App.css';

function App() {
  const [step, setStep] = useState(1);
  const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4','Step 5']; // Array of step names

  const handleStepChange = (stepNumber) => {
    setStep(stepNumber);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">Standard Chatered</div>
        <div className="steps">
          {steps.map((stepName, index) => (
            <div
              key={index}
              className={`step ${index + 1 === step ? 'active' : ''}`}
              onClick={() => handleStepChange(index + 1)}
            >
              {stepName}
            </div>
          ))}
        </div>
      </nav>
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}
      {step === 4 && <Step4 />}
      {step === 5 && <Step5 />}
    </div>
  );
}

export default App;
