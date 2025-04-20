// app/dashboard/how/page.jsx
import React from 'react';

const Hows = () => {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold">How it Works?</h1>
      <p className="text-lg text-gray-600">Our AI Mock Interview Test is designed to simulate real-life interview scenarios, helping you prepare with confidence. Here's how it works:</p>

      <div className="mt-6 space-y-6">
        <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-primary">
          <h2 className="text-xl font-semibold">Choose a Role or Topic</h2>
          <p className="text-gray-700">Select the job role or domain (e.g., Frontend Developer, Backend Developer, Data Science, etc.) you're preparing for.</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-primary">
          <h2 className="text-xl font-semibold">Start the Interview</h2>
          <p className="text-gray-700">Our AI generates a set of relevant and randomized interview questions based on your selected role.</p>
          <p className="text-gray-700">You can respond either by typing or speaking (voice input supported if enabled).</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-primary">
          <h2 className="text-xl font-semibold">Testing</h2>
          <p className="text-gray-700">Get instant feedback on your answers using AI evaluation.</p>
          <p className="text-gray-700">Feedback includes strengths, improvement tips, and sample answers where needed.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-primary">
          <h2 className="text-xl font-semibold">Track Your Progress</h2>
          <p className="text-gray-700">Get instant feedback on your answers using AI evaluation.</p>
          <p className="text-gray-700">Review your past interviews, track improvement over time, and analyze common mistakes.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-primary">
          <h2 className="text-xl font-semibold">Repeat & Improve</h2>
          <p className="text-gray-700">Practice multiple rounds with new sets of questions each time.</p>
          <p className="text-gray-700">Focus on weak areas and level up your interview readiness.</p>
        </div>
      </div>
    </div>
  );
};

export default Hows;
