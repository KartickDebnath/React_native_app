// import { Button } from '@/components/ui/button';
// import { useRouter } from 'next/navigation';
// import React,{useState} from 'react';
// import { FiX } from 'react-icons/fi'; // Feather X icon
// // import { Button } from '@/components/ui/button';


// function InterviewItemCard({ interview }) {
//   const router = useRouter();
//   const onStart = () => {
//     router.push('/dashboard/interview/' + interview?.mockId);
//   };
//   const onFeedback = () => {
//     router.push('/dashboard/interview/' + interview?.mockId + '/feedback');
//   };

//   const [visible, setVisible] = useState(true);

//   if (!visible) return null;

//   return (
//     <div className='relative border shadow-sm rounded-lg p-3'>
//       {/* Close Icon */}
//       <button
//         onClick={() => setVisible(false)}
//         className='absolute top-2 right-2 text-gray-500 hover:text-red-500'
//         aria-label='Close'
//       >
//         <FiX size={18} />
//       </button>

//       <h2 className='font-bold text-primary'>{interview?.jobPosition}</h2>
//       <h2 className='text-sm text-gray-700'>
//         {interview?.jobExperience} Years of Experience
//       </h2>
//       <h2 className='text-xs text-gray-500'>
//         Created At: {interview?.createdAt}
//       </h2>
//       <div className='flex justify-between mt-2 gap-5'>
//         <Button
//           className='w-full'
//           size='sm'
//           variant='outline'
//           onClick={onFeedback}
//         >
//           Feedback
//         </Button>
//         <Button size='sm' className='w-full' onClick={onStart}>
//           Start
//         </Button>
//       </div>
//     </div>
//   );
// }

// export default InterviewItemCard;
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { FiX } from 'react-icons/fi';

function InterviewItemCard({ interview }) {
  const router = useRouter();
  const mockId = interview?.mockId;

  const [visible, setVisible] = useState(true);

  // Check on mount whether the interview was previously closed
  useEffect(() => {
    const closedItems = JSON.parse(localStorage.getItem('closedInterviews') || '[]');
    if (closedItems.includes(mockId)) {
      setVisible(false);
    }
  }, [mockId]);

  const handleClose = () => {
    const closedItems = JSON.parse(localStorage.getItem('closedInterviews') || '[]');
    const updatedClosedItems = [...closedItems, mockId];
    localStorage.setItem('closedInterviews', JSON.stringify(updatedClosedItems));
    setVisible(false);
  };

  const onStart = () => {
    router.push('/dashboard/interview/' + mockId);
  };

  const onFeedback = () => {
    router.push(`/dashboard/interview/${mockId}/feedback`);
  };

  if (!visible) return null;

  return (
    <div className='relative border shadow-sm rounded-lg p-3'>
      {/* Close Icon */}
      <button
        onClick={handleClose}
        className='absolute top-2 right-2 text-gray-500 hover:text-red-500'
        aria-label='Close'
      >
        <FiX size={18} />
      </button>

      <h2 className='font-bold text-primary'>{interview?.jobPosition}</h2>
      <h2 className='text-sm text-gray-700'>
        {interview?.jobExperience} Years of Experience
      </h2>
      <h2 className='text-xs text-gray-500'>
        Created At: {interview?.createdAt}
      </h2>
      <div className='flex justify-between mt-2 gap-5'>
        <Button
          className='w-1/4 flex justify-center align-center flex-row'
          size='sm'
          // variant='outline'
          onClick={onFeedback}
        >
          View Answer
        </Button>
        {/* <Button size='sm' className='w-full' onClick={onStart}>
          Start
        </Button> */}
      </div>
    </div>
  );
}

export default InterviewItemCard;
