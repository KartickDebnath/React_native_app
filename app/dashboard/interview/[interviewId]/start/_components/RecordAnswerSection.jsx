// 'use client';
// import Webcam from 'react-webcam';
// import React, { useEffect, useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Mic, StopCircle, WebcamIcon } from 'lucide-react';
// import useSpeechToText from 'react-hook-speech-to-text';
// import { toast } from 'sonner';
// import { chatSession } from '@/utils/GeminiAIModel';
// import { db } from '@/utils/db';
// import { UserAnswer } from '@/utils/schema';
// import { useUser } from '@clerk/nextjs';
// import moment from 'moment';
// import { is } from 'drizzle-orm';

// function RecordAnswerSection({
//   mockInterviewQuestions,
//   activeQuestionIndex,
//   interviewData,
// }) {
//   const [userAnswer, setUserAnswer] = useState('');
//   const { user } = useUser();
//   const [loading, setLoading] = useState(false);
//   const {
//     error,
//     interimResult,
//     isRecording,
//     results,
//     startSpeechToText,
//     stopSpeechToText,
//     setResults,
//   } = useSpeechToText({
//     continuous: true,
//     useLegacyResults: false,
//   });

//   useEffect(() => {
//     results.map((result) => {
//       setUserAnswer((prevAns) => prevAns + result?.transcript);
//     });
//   }, [results]);

//   useEffect(() => {
//     if (!isRecording && userAnswer.length > 0) {
//       UpdateUserAnswer();
//     }
//   }, [userAnswer]);

//   const StartStopRecording = () => {
//     if (isRecording) {
//       stopSpeechToText();
//     } else {
//       startSpeechToText();
//     }
//   };

//   const UpdateUserAnswer = async () => {
//     if (userAnswer.length < 0) {
//       setLoading(false);
//       toast('Error while saving your answer, Please record again.');
//       return;
//     }

//     setLoading(true);
//     const feedbackPrompt =
//       'Question:' +
//       mockInterviewQuestions[activeQuestionIndex]?.Question +
//       ', User Answer:' +
//       userAnswer +
//       ', depends on question and user answer for given interview question' +
//       'please give us rating out of 10 for answer and feedback as area of improvement if any' +
//       'in just 3 to 5 lines how to improve it in JSON format with rating field and feedback field' +
//       'like {rating:, feedback:, areas_of_improvement:, how_to_imporve}';

//     const result = await chatSession.sendMessage(feedbackPrompt);

//     const mockJsonResp = result.response
//       .text()
//       .replace('```json', '')
//       .replace('```', '');
//     console.log('feedback check:', mockJsonResp);
//     const JsonFeedbackResp = JSON.parse(mockJsonResp);
//     console.log('json feed', JsonFeedbackResp);

//     const resp = await db.insert(UserAnswer).values({
//       mockIdRef: interviewData?.mockId,
//       question: mockInterviewQuestions[activeQuestionIndex]?.Question,
//       correctAns: mockInterviewQuestions[activeQuestionIndex]?.Answer,
//       userAns: userAnswer,
//       feedback: JsonFeedbackResp?.feedback,
//       rating: JsonFeedbackResp?.rating,
//       areasOfImprovement: JsonFeedbackResp?.areas_of_improvement,
//       howToImprove: JsonFeedbackResp?.how_to_improve,
//       userEmail: user?.primaryEmailAddress?.emailAddress,
//       createdAt: moment().format('DD-MM-yyyy'),
//     });

//     if (resp) {
//       toast('User Answer recorded successfully.');
//       setUserAnswer('');
//       setResults([]);
//     }
//     setResults([]);
//     setLoading(false);
//   };

//   return (
//     <div className='flex items-center justify-center flex-col'>
//       <div className='flex flex-col mt-20 justify-center items-center bg-black rounded-lg p-5'>
//         <WebcamIcon
//           width={200}
//           height={200}
//           className='absolute'
//           color='gray'
//         />
//         <Webcam
//           mirrored={true}
//           style={{
//             height: 300,
//             width: '100%',
//             zIndex: 10,
//           }}
//         />
//       </div>
//       <Button
//         disabled={loading}
//         variant='outline'
//         className='my-10'
//         onClick={StartStopRecording}
//       >
//         {isRecording ? (
//           <h2 className='text-red-600 animate-pulse flex gap-2 items-center'>
//             {/* <StopCircle /> Stop Recording */}
//             <StopCircle /> Click here to stop your answer
//           </h2>
//         ) : (
//           <h2 className='text-primary flex gap-2 items-center'>
//             {/* <Mic /> Start Recording */}
//             <Mic /> Click here to get your answer
//           </h2>
//         )}
//       </Button>
//     </div>
//   );
// }

// export default RecordAnswerSection;

//1

// 'use client';
// import Webcam from 'react-webcam';
// import React, { useEffect, useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Mic, StopCircle, WebcamIcon } from 'lucide-react';
// import useSpeechToText from 'react-hook-speech-to-text';
// import { toast } from 'sonner';
// import { chatSession } from '@/utils/GeminiAIModel';
// import { db } from '@/utils/db';
// import { UserAnswer } from '@/utils/schema';
// import { useUser } from '@clerk/nextjs';
// import moment from 'moment';

// function RecordAnswerSection({
//   mockInterviewQuestions,
//   activeQuestionIndex,
//   interviewData,
//   currentQuestion, // 👈 new prop to receive the current question
// }) {
//   const [userAnswer, setUserAnswer] = useState('');
//   const { user } = useUser();
//   const [loading, setLoading] = useState(false);
//   const [showQuestion, setShowQuestion] = useState(false); // 👈 state to control question visibility

//   const {
//     error,
//     interimResult,
//     isRecording,
//     results,
//     startSpeechToText,
//     stopSpeechToText,
//     setResults,
//   } = useSpeechToText({
//     continuous: true,
//     useLegacyResults: false,
//   });

//   // Append each spoken result to the answer
//   useEffect(() => {
//     results.map((result) => {
//       setUserAnswer((prevAns) => prevAns + result?.transcript);
//     });
//   }, [results]);

//   // When recording stops and there's an answer, save it
//   useEffect(() => {
//     if (!isRecording && userAnswer.length > 0) {
//       UpdateUserAnswer();
//     }
//   }, [userAnswer]);

//   const StartStopRecording = () => {
//     if (isRecording) {
//       stopSpeechToText();
//       setShowQuestion(false);
//     } else {
//       startSpeechToText();
//       setShowQuestion(true);
//     }
//   };

//   const UpdateUserAnswer = async () => {
//     if (userAnswer.length <= 0) {
//       setLoading(false);
//       toast('Error while saving your answer, Please record again.');
//       return;
//     }

//     setLoading(true);

//     const feedbackPrompt = `Question: ${mockInterviewQuestions[activeQuestionIndex]?.Question}, User Answer: ${userAnswer}. Based on the question and user answer, please give a rating out of 10 and a feedback in 3 to 5 lines. Return a JSON response like:
//     {
//       "rating": 8,
//       "feedback": "Good response, but lacked depth.",
//       "areas_of_improvement": "Add more details.",
//       "how_to_improve": "Explain with real examples."
//     }`;

//     try {
//       const result = await chatSession.sendMessage(feedbackPrompt);
//       const mockJsonResp = result.response
//         .text()
//         .replace('```json', '')
//         .replace('```', '');

//       const JsonFeedbackResp = JSON.parse(mockJsonResp);

//       const resp = await db.insert(UserAnswer).values({
//         mockIdRef: interviewData?.mockId,
//         question: mockInterviewQuestions[activeQuestionIndex]?.Question,
//         correctAns: mockInterviewQuestions[activeQuestionIndex]?.Answer,
//         userAns: userAnswer,
//         feedback: JsonFeedbackResp?.feedback,
//         rating: JsonFeedbackResp?.rating,
//         areasOfImprovement: JsonFeedbackResp?.areas_of_improvement,
//         howToImprove: JsonFeedbackResp?.how_to_improve,
//         userEmail: user?.primaryEmailAddress?.emailAddress,
//         createdAt: moment().format('DD-MM-yyyy'),
//       });

//       if (resp) {
//         toast('✅ Your answer was recorded and feedback was saved.');
//         setUserAnswer('');
//         setResults([]);
//       }
//     } catch (err) {
//       toast('❌ Failed to parse feedback or save response.');
//       console.error(err);
//     }

//     setLoading(false);
//   };

//   return (
//     <div className='flex items-center justify-center flex-col'>
//       {/* Show question when recording */}
//       {showQuestion && (
//         <div className='bg-yellow-100 text-black font-medium p-4 mb-4 rounded-lg shadow max-w-2xl text-center'>
//           <p className='text-sm text-gray-600 mb-1'>🎤 Please answer:</p>
//           <p className='text-lg'>{currentQuestion}</p>
//         </div>
//       )}

//       <div className='flex flex-col mt-10 justify-center items-center bg-black rounded-lg p-5 relative'>
//         <WebcamIcon
//           width={200}
//           height={200}
//           className='absolute'
//           color='gray'
//         />
//         <Webcam
//           mirrored={true}
//           style={{
//             height: 300,
//             width: '100%',
//             zIndex: 10,
//           }}
//         />
//       </div>

//       <Button
//         disabled={loading}
//         variant='outline'
//         className='my-10'
//         onClick={StartStopRecording}
//       >
//         {isRecording ? (
//           <h2 className='text-red-600 animate-pulse flex gap-2 items-center'>
//             <StopCircle /> Click here to stop your answer
//           </h2>
//         ) : (
//           <h2 className='text-primary flex gap-2 items-center'>
//             <Mic /> Click here to get your answer
//           </h2>
//         )}
//       </Button>
//     </div>
//   );
// }

// export default RecordAnswerSection;

//******* */
// 'use client';
// import Webcam from 'react-webcam';
// import React, { useEffect, useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Mic, StopCircle, WebcamIcon } from 'lucide-react';
// import useSpeechToText from 'react-hook-speech-to-text';
// import { toast } from 'sonner';
// import { chatSession } from '@/utils/GeminiAIModel';
// import { db } from '@/utils/db';
// import { UserAnswer } from '@/utils/schema';
// import { useUser } from '@clerk/nextjs';
// import moment from 'moment';

// function RecordAnswerSection({
//   mockInterviewQuestions,
//   activeQuestionIndex,
//   interviewData,
//   currentQuestion,
// }) {
//   const [userAnswer, setUserAnswer] = useState('');
//   const [note, setNote] = useState(''); // For special phrases to be displayed in note
//   const { user } = useUser();
//   const [loading, setLoading] = useState(false);
//   const [showQuestion, setShowQuestion] = useState(false);

//   // Excluded words/phrases to show in the note section
//   const excludedPhrases = ['stop', 'skip', 'next', 'no', 'continue'];

//   const {
//     error,
//     interimResult,
//     isRecording,
//     results,
//     startSpeechToText,
//     stopSpeechToText,
//     setResults,
//   } = useSpeechToText({
//     continuous: true,
//     useLegacyResults: false,
//   });

//   // Append each spoken result to the answer, unless it's in excluded phrases
//   useEffect(() => {
//     results.map((result) => {
//       const transcript = result?.transcript.toLowerCase();

//       // If transcript matches an excluded phrase, add to note instead of user answer
//       if (excludedPhrases.some(phrase => transcript.includes(phrase))) {
//         setNote((prevNote) => prevNote + `\n${result?.transcript}`);
//       } else {
//         setUserAnswer((prevAns) => prevAns + result?.transcript);
//       }
//     });
//   }, [results]);

//   useEffect(() => {
//     if (!isRecording && userAnswer.length > 0) {
//       UpdateUserAnswer();
//     }
//   }, [userAnswer]);

//   const StartStopRecording = () => {
//     if (isRecording) {
//       stopSpeechToText();
//       setShowQuestion(false);
//     } else {
//       startSpeechToText();
//       setShowQuestion(true);
//     }
//   };

//   const UpdateUserAnswer = async () => {
//     if (userAnswer.length <= 0) {
//       setLoading(false);
//       toast('Error while saving your answer, Please record again.');
//       return;
//     }

//     setLoading(true);

//     const feedbackPrompt = `Question: ${mockInterviewQuestions[activeQuestionIndex]?.Question}, User Answer: ${userAnswer}. Based on the question and user answer, please give a rating out of 10 and a feedback in 3 to 5 lines. Return a JSON response like:
//     {
//       "rating": 8,
//       "feedback": "Good response, but lacked depth.",
//       "areas_of_improvement": "Add more details.",
//       "how_to_improve": "Explain with real examples."
//     }`;

//     try {
//       const result = await chatSession.sendMessage(feedbackPrompt);
//       const mockJsonResp = result.response
//         .text()
//         .replace('```json', '')
//         .replace('```', '');

//       const JsonFeedbackResp = JSON.parse(mockJsonResp);

//       const resp = await db.insert(UserAnswer).values({
//         mockIdRef: interviewData?.mockId,
//         question: mockInterviewQuestions[activeQuestionIndex]?.Question,
//         correctAns: mockInterviewQuestions[activeQuestionIndex]?.Answer,
//         userAns: userAnswer,
//         feedback: JsonFeedbackResp?.feedback,
//         rating: JsonFeedbackResp?.rating,
//         areasOfImprovement: JsonFeedbackResp?.areas_of_improvement,
//         howToImprove: JsonFeedbackResp?.how_to_improve,
//         userEmail: user?.primaryEmailAddress?.emailAddress,
//         createdAt: moment().format('DD-MM-yyyy'),
//       });

//       if (resp) {
//         toast('✅ Your answer was recorded and feedback was saved.');
//         setUserAnswer('');
//         setResults([]);
//       }
//     } catch (err) {
//       toast('❌ Failed to parse feedback or save response.');
//       console.error(err);
//     }

//     setLoading(false);
//   };

//   return (
//     <div className='flex items-center justify-center flex-col'>
//       {/* Show question when recording */}
//       {showQuestion && (
//         <div className='bg-yellow-100 text-black font-medium p-4 mb-4 rounded-lg shadow max-w-2xl text-center'>
//           <p className='text-sm text-gray-600 mb-1'>🎤 Please answer:</p>
//           <p className='text-lg'>{currentQuestion}</p>
//         </div>
//       )}

//       <div className='flex flex-col mt-10 justify-center items-center bg-black rounded-lg p-5 relative'>
//         <WebcamIcon
//           width={200}
//           height={200}
//           className='absolute'
//           color='gray'
//         />
//         <Webcam
//           mirrored={true}
//           style={{
//             height: 300,
//             width: '100%',
//             zIndex: 10,
//           }}
//         />
//       </div>

//       <Button
//         disabled={loading}
//         variant='outline'
//         className='my-10'
//         onClick={StartStopRecording}
//       >
//         {isRecording ? (
//           <h2 className='text-red-600 animate-pulse flex gap-2 items-center'>
//             <StopCircle /> Click here to stop your answer
//           </h2>
//         ) : (
//           <h2 className='text-primary flex gap-2 items-center'>
//             <Mic /> Click here to get your answer
//           </h2>
//         )}
//       </Button>

//     </div>
//   );
// }

// export default RecordAnswerSection;




//2&&&&&

'use client';
import Webcam from 'react-webcam';
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mic, StopCircle, WebcamIcon } from 'lucide-react';
import useSpeechToText from 'react-hook-speech-to-text';
import { toast } from 'sonner';
import { chatSession } from '@/utils/GeminiAIModel';
import { db } from '@/utils/db';
import { UserAnswer } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';

function RecordAnswerSection({
  mockInterviewQuestions,
  activeQuestionIndex,
  interviewData,
  currentQuestion,
  onLastAnswerSaved,
}) {
  const [userAnswer, setUserAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [isAnswerReady, setIsAnswerReady] = useState(false);
  const { user } = useUser();

  const {
    results,
    isRecording,
    startSpeechToText,
    stopSpeechToText,
    setResults,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });

  useEffect(() => {
    if (!isRecording && results.length > 0) {
      const fullAnswer = results
        .map((res) => res.transcript)
        .join(' ')
        .trim();
      if (fullAnswer.length > 0) {
        setUserAnswer(fullAnswer);
        setIsAnswerReady(true); // Enable Submit button
      }
    }
  }, [results, isRecording]);

  const handleStartStop = () => {
    if (isRecording) {
      stopSpeechToText();
    } else {
      setUserAnswer('');
      setResults([]);
      startSpeechToText();
      setIsAnswerReady(false);
    }
  };

  const handleSubmit = async () => {
    if (!userAnswer.trim()) {
      toast('⚠️ Please speak your answer first.');
      return;
    }

    setLoading(true);

    const prompt = `Question: ${mockInterviewQuestions[activeQuestionIndex]?.Question}, User Answer: ${userAnswer}. Based on the question and user answer, please give a rating out of 10 and a feedback in 3 to 5 lines. Return a JSON response like:
    {
      "rating": 8,
      "feedback": "Good response, but lacked depth.",
      "areas_of_improvement": "Add more details.",
      "how_to_improve": "Explain with real examples."
    }`;

    try {
      const result = await chatSession.sendMessage(prompt);
      const jsonString = result.response.text()
        .replace('```json', '')
        .replace('```', '');

      const feedback = JSON.parse(jsonString);

      const resp = await db.insert(UserAnswer).values({
        mockIdRef: interviewData?.mockId,
        question: mockInterviewQuestions[activeQuestionIndex]?.Question,
        correctAns: mockInterviewQuestions[activeQuestionIndex]?.Answer,
        userAns: userAnswer,
        feedback: feedback?.feedback,
        rating: feedback?.rating,
        areasOfImprovement: feedback?.areas_of_improvement,
        howToImprove: feedback?.how_to_improve,
        userEmail: user?.primaryEmailAddress?.emailAddress,
        createdAt: moment().format('DD-MM-yyyy'),
      });

      if (resp) {
        toast('✅ Answer submitted and feedback saved!');
        setIsAnswerReady(false);
        setResults([]);
        setUserAnswer('');

        onLastAnswerSaved?.(); // ✅ Trigger parent to enable next button
      }
    } catch (err) {
      toast('❌ Failed to submit answer.');
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div className='flex items-center justify-center flex-col'>

      {/* Webcam Section */}
      <div className='flex flex-col mt-10 justify-center items-center bg-black rounded-lg p-5 relative'>
        <WebcamIcon width={200} height={200} className='absolute' color='gray' />
        <Webcam mirrored={true} style={{ height: 300, width: '100%', zIndex: 10 }} />
      </div>

      {/* Start / Stop Button */}
      <Button
        disabled={loading}
        variant='outline'
        className='my-6'
        onClick={handleStartStop}
      >
        {isRecording ? (
          <h2 className='text-red-600 animate-pulse flex gap-2 items-center'>
            <StopCircle /> Stop Answer
          </h2>
        ) : (
          <h2 className='text-primary flex gap-2 items-center'>
            <Mic /> Start Recording
          </h2>
        )}
      </Button>

      {/* Show Answer and Submit Button in a Row */}
      {userAnswer && isAnswerReady && (
        <div className="flex gap-4 my-4 w-full max-w-2xl">
          {/* Left Side - Answer */}
          <div className="w-3/4 bg-gray-100 p-4 rounded-lg text-sm text-gray-800">
            <strong>Your Answer:</strong>
            <p>{userAnswer}</p>
          </div>

          {/* Right Side - Submit */}
          <Button
            onClick={handleSubmit}
            disabled={loading}
            className="w-2/4 h-fit bg-green-600 hover:bg-green-700 text-white"
          >
            Submit Answer
          </Button>
        </div>
      )}
    </div>
  );
}

export default RecordAnswerSection;
