// app/dashboard/how/page.jsx
import React from 'react';

const Hows = () => {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold">How it Works?</h1>
      <p className="text-lg text-gray-600">This page explains how the system works.</p>

      <div className="mt-6 space-y-6">
        <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-primary">
          <h2 className="text-xl font-semibold">Step 1: Setup</h2>
          <p className="text-gray-700">Start by setting up your project and configuring the necessary tools for the system.</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-primary">
          <h2 className="text-xl font-semibold">Step 2: Implementation</h2>
          <p className="text-gray-700">Implement the required features and ensure that the application is functional.</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-primary">
          <h2 className="text-xl font-semibold">Step 3: Testing</h2>
          <p className="text-gray-700">Test the application to ensure it works correctly under various conditions.</p>
        </div>
      </div>
    </div>
  );
};

export default Hows;
