// import { Button } from '@/components/ui/button';
// import Image from "next/image";
// import { useRouter } from 'next/navigation';

// export default function Home() {
//   const router = useRouter();
//   return (
//    <div>
//      <h2>Hello!</h2>
//      <div>
//       <button onClick={() => router.replace('/dashboard')}>Subscribe</button>
//     </div>

//    </div>
//   );
// }
"use client";

import { useRouter } from 'next/navigation';
import styled, { keyframes } from 'styled-components';

// Glow animation for the button
const glowAnimation = keyframes`
  0% {
    text-shadow: 0 0 10px #54c5ec, 0 0 20px #54c5ec, 0 0 30px #54c5ec, 0 0 40px #54c5ec;
    background-color: #0c9cf3;
    opacity: 1;
  }
  50% {
    text-shadow: 0 0 15px #54c5ec, 0 0 25px #54c5ec, 0 0 35px #05089b, 0 0 45px #05089b;
    background-color: #05089b;
    opacity: 0.6;
  }
  100% {
    text-shadow: 0 0 20px #05089b, 0 0 30px #05089b, 0 0 40px #05089b, 0 0 50px #05089b;
    background-color: #0c9cf3;
    opacity: 1;
  }
`;

// Glowing Button Component
const GlowingButton = styled.button`
  font-size: 20px;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  animation: ${glowAnimation} 1.5s ease-in-out infinite alternate;
`;

// Main Container (Responsive)
const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

// Left Section (Text)
const LeftSection = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  text-align: center;

  @media (max-width: 768px) {
    flex: none;
    padding: 40px 20px;
  }
`;

// Right Section (Image)
const RightSection = styled.div`
  flex: 7;

  img {
    height: 100vh;
    width: 100%;
    object-fit: cover;
    border-radius: 300px 0px 0px 300px;

    @media (max-width: 768px) {
      height: auto;
      border-radius: 0;
    }
  }
`;

// Heading Style
const GradientHeading = styled.h6`
  font-size: 82px;
  font-family: serif;
  font-weight: bold;
  text-align: center;
  background: -webkit-linear-gradient(top, rgb(8, 203, 211), rgb(9, 18, 95));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

export default function Home() {
  const router = useRouter();

  return (
    <Container>
      {/* Left Side - Text Content */}
      <LeftSection>
        <GradientHeading>AI MOCK</GradientHeading>
        <GradientHeading>INTERVIEW TEST</GradientHeading>
        <GlowingButton onClick={() => router.replace('/dashboard')}>
          Click here to open AI interview test
        </GlowingButton>
      </LeftSection>

      {/* Right Side - Image */}
      <RightSection>
        <img
          src="https://files.selar.co/product-images/2023/products/ernest-henry-fasemkye1/how-to-use-ai-to-create-w-selar.co-65708cb7e713e.webp"
          alt="AI Interview Test"
        />
      </RightSection>
    </Container>
  );
}
