// import { Lightbulb, Volume2 } from 'lucide-react';
// import React from 'react';

// function QuestionsSection({ mockInterviewQuestions, activeQuestionIndex }) {
//   const textToSpeech = (text) => {
//     if ('speechSynthesis' in window) {
//       const speech = new SpeechSynthesisUtterance(text);
//       window.speechSynthesis.speak(speech);
//     } else {
//       alert('Sorry, your browser does not support text to speech');
//     }
//   };
//   return (
//     mockInterviewQuestions && (
//       <div className='p-5 border rounded-lg my-10'>
//         <div className='grid grid-col-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
//           {mockInterviewQuestions &&
//             mockInterviewQuestions.map((question, index) => (
//               <h2
//                 className={`p-2 bg-secondary rounded-full 
//             text-xs md:text-sm text-center cursor-pointer
//             ${activeQuestionIndex == index && 'bg-blue-900 text-white'}`}
//               >
//                 Question #{index + 1}
//               </h2>
//             ))}
//         </div>
//         <h2 className='my-5 text-md md:text-lg'>
//           {mockInterviewQuestions[activeQuestionIndex]?.Question}
//         </h2>
//         <Volume2
//           className='cursor-pointer hover:scale-105 transition-all'
//           onClick={() =>
//             textToSpeech(mockInterviewQuestions[activeQuestionIndex]?.Question)
//           }
//         />

//         <div className='border rounded-lg p-5 bg-blue-100 mt-20'>
//           <h2 className='flex gap-2 items-center text-primary'>
//             <Lightbulb />
//             <strong>Note:</strong>
//           </h2>
//           <h2 className='text-sm text-primary my-2'>
//             {process.env.NEXT_PUBLIC_INFORMATION}
//           </h2>
//         </div>
//       </div>
//     )
//   );
// }

// export default QuestionsSection;
import { Lightbulb, Volume2, VolumeX } from 'lucide-react';
import React, { useState } from 'react';

function QuestionsSection({ mockInterviewQuestions, activeQuestionIndex }) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  let speechInstance = null;

  const textToSpeech = (text) => {
    if (!('speechSynthesis' in window)) {
      alert('Sorry, your browser does not support text to speech');
      return;
    }

    // Play click sound
    const clickSound = new Audio('/click-sound.mp3'); // Ensure this file exists in the public directory
    clickSound.play();

    // Stop speech if already speaking
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      speechInstance = new SpeechSynthesisUtterance(text);
      speechInstance.onend = () => setIsSpeaking(false); // Reset state after speech ends
      window.speechSynthesis.speak(speechInstance);
      setIsSpeaking(true);
    }
  };

  return (
    mockInterviewQuestions && (
      <div className='p-5 border rounded-lg my-10'>
        <div className='grid grid-col-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
          {mockInterviewQuestions.map((question, index) => (
            <h2
              key={index}
              className={`p-2 bg-secondary rounded-full 
            text-xs md:text-sm text-center cursor-pointer
            ${activeQuestionIndex === index && 'bg-blue-900 text-white'}`}
            >
              Question #{index + 1}
            </h2>
          ))}
        </div>

        <h2 className='my-5 text-md md:text-lg'>
          {mockInterviewQuestions[activeQuestionIndex]?.Question}
        </h2>

        {/* Volume Button with Slash Icon when Sound is Off */}
        <button
          className={`p-2 rounded-full transition-all ${
            isSpeaking ? 'bg-blue-900 text-white' : 'bg-gray-300 text-black'
          }`}
          onClick={() =>
            textToSpeech(mockInterviewQuestions[activeQuestionIndex]?.Question)
          }
        >
          {isSpeaking ? <Volume2 /> : <VolumeX />}
        </button>

        <div className='border rounded-lg p-5 bg-blue-100 mt-20'>
          <h2 className='flex gap-2 items-center text-primary'>
            <Lightbulb />
            <strong>Note:</strong>
          </h2>
          <h2 className='text-sm text-primary my-2'>
            {process.env.NEXT_PUBLIC_INFORMATION}
          </h2>
        </div>
      </div>
    )
  );
}

export default QuestionsSection;
