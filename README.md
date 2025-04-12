# Full Stack AI Mock Interviewer App with Next.js

Welcome to the Full Stack AI Mock Interviewer App! This project leverages the power of Next.js, React, Drizzle ORM, Gemini AI, and Clerk to create a sophisticated AI-driven mock interview application. It's an excellent tool for developers aiming to hone their skills and work on a real-world project.

## Screenshots
**Main Dashboard**
![Screenshot from 2024-06-20 17-19-24](https://github.com/haseeb-ahsan/AI-mock-interviewer/assets/84566594/22c93d63-ec71-43d1-b504-bb6182f10819)
**Add Interview Screen**
![Screenshot from 2024-06-20 17-19-28](https://github.com/haseeb-ahsan/AI-mock-interviewer/assets/84566594/724b94e3-e5ca-45b6-a703-b84e4e301402)
**Record Answer**
![Screenshot from 2024-06-20 17-19-39](https://github.com/haseeb-ahsan/AI-mock-interviewer/assets/84566594/2998b33d-dbf8-472d-bf41-39732a93b35a)
**Feedback Page**
![Screenshot from 2024-06-20 17-20-26](https://github.com/haseeb-ahsan/AI-mock-interviewer/assets/84566594/7079bf35-aa87-4308-a031-cceab5686b56)


## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Project Setup](#project-setup)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Deployed Application](#deployed-application)

## Features

- **Next.js and React**: Robust frontend framework for building scalable web applications.
- **Clerk Authentication**: Implements social and email/password authentication for secure access.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **PostgreSQL and Drizzle ORM**: Efficient database setup and querying.
- **Google Gemini API**: Generates AI interview questions and processes user responses.
- **Speech-to-Text**: Converts recorded user answers into text.
- **Cloud Deployment**: Easily deploy your application on Vercel.

## Installation

To get started with the project, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/ai-mock-interviewer.git
    cd ai-mock-interviewer
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
   Create a `.env.local` file in the root directory and add your environment variables for Clerk, PostgreSQL, and Google Gemini API.

4. **Run the development server**:
    ```bash
    npm run dev
    ```

## Usage

1. **Authentication**: Users can sign up or log in using social accounts or email/password through Clerk.
2. **AI Interview Generation**: Generate interview questions using the Google Gemini API.
3. **Answer Recording**: Users can record their answers using the web interface and their microphone.
4. **Speech-to-Text**: The app converts spoken answers into text for analysis.
5. **Save and Review**: Users can save their responses and review them later.

## Technologies Used

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL, Drizzle ORM
- **Authentication**: Clerk
- **AI Integration**: Google Gemini API
- **Deployment**: Vercel

## Project Setup

1. **Create Next.js React App and Install Libraries**:
    ```bash
    npx create-next-app@latest ai-mock-interviewer
    cd ai-mock-interviewer
    npm install drizzle-orm tailwindcss clerk-next
    ```

2. **Implement Authentication with Clerk**:
   Follow [Clerk's documentation](https://clerk.dev/docs/nextjs/get-started-with-nextjs) to set up social and email/password authentication.

3. **Configure Tailwind CSS**:
    ```bash
    npx tailwindcss init -p
    ```

   Add Tailwind to your `tailwind.config.js` and `globals.css`.

4. **Set Up PostgreSQL and Drizzle**:
   Install and configure PostgreSQL, then set up Drizzle ORM for your data models and queries.

5. **Integrate Google Gemini API**:
   Set up the Gemini API for generating AI interview questions and handling responses.

6. **Speech-to-Text Functionality**:
   Implement recording of user answers and convert speech to text using Web Speech API.

## Deployment

Deploy your application to Vercel:

1. **Push to GitHub**:
    ```bash
    git add .
    git commit -m "Initial commit"
    git push origin main
    ```

2. **Deploy on Vercel**:
   - Create a new project on Vercel and link your GitHub repository.
   - Set up the required environment variables on Vercel.
   - Deploy your application.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Deployed Application

Check out the live application [here](https://ai-mock-interviewer-mntzw67eq-haseeb-ahsans-projects.vercel.app/dashboard).

---

Thank you for using the Full Stack AI Mock Interview App! If you have any questions or feedback, please open an issue on the GitHub repository.
