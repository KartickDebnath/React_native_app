// app/dashboard/questions/page.jsx
import React from "react";
const Questions = () => {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold">Manage Questions</h1>
      {/* html */}
      <p className="text-lg text-gray-600 font-bold">HTML QUESTION</p>
      <div className="mt-6 space-y-6">
        <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-primary">
          <h2 className="text-xl font-semibold">What is HTML?</h2>
          <p className="text-gray-700"> HTML (HyperText Markup Language) is the standard language used to create and design web pages. It structures the content of a web page using elements like headings, paragraphs, lists, links, images, forms, etc.</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-primary">
          <h2 className="text-xl font-semibold">What is the difference between HTML and XHTML?</h2>
          <p className="text-gray-700"><b>HTML (HyperText Markup Language)</b> is more flexible, allowing certain mistakes like missing tags or case-insensitive tag names.<br/>
          <b>XHTML (Extensible Hypertext Markup Language)</b> is a stricter version of HTML that combines HTML with XML. It requires elements and attributes to be written in lowercase, tags to be properly closed, and all attributes to be quoted.</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-primary">
          <h2 className="text-xl font-semibold"> What is the difference between div and span?</h2>
          <p className="text-gray-700"><b>div</b> is a block-level element, meaning it occupies the full width available and starts on a new line. <br/>
          <b>span</b> is an inline element, meaning it only takes up as much width as necessary and does not break the flow of the text.</p>
        </div>
      </div>
      {/* css */}
      <p className="text-lg text-gray-600 font-bold">CSS QUESTION</p>
      <div className="mt-6 space-y-6">
        <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-primary">
          <h2 className="text-xl font-semibold">What is the difference between relative, absolute, fixed, and sticky positioning in CSS?</h2>
          <p className="text-gray-700"><b>Relative:</b> Positioned relative to its normal position.<br/>
            <b>Absolute:</b> Positioned relative to its nearest positioned ancestor (or body if none).<br/>
            <b>Fixed:</b> Stays fixed relative to the viewport, even when scrolling.<br/>
            <b>Sticky:</b> Behaves like relative until a scroll threshold is reached, then acts like fixed</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-primary">
          <h2 className="text-xl font-semibold">What is Flexbox, and why is it useful?</h2>
          <p className="text-gray-700">Flexbox is a CSS layout model that allows for easy alignment and distribution of elements inside a container, even if their sizes are unknown.
          It includes properties like display: flex, justify-content, align-items, and flex-direction.</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-primary">
          <h2 className="text-xl font-semibold"> How does CSS Grid differ from Flexbox?</h2>
          <p className="text-gray-700"><b>Flexbox:</b> One-dimensional (row or column). Best for aligning elements in a single direction.<br/>
          <b>Grid:</b> Two-dimensional (rows and columns). Best for structuring layouts with rows & columns.</p>
        </div>
      </div>
      {/* js */}
      <p className="text-lg text-gray-600 font-bold">JAVA SCRIPT QUESTION</p>
      <div className="mt-6 space-y-6">
        <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-primary">
          <h2 className="text-xl font-semibold">What is the difference between let, const, and var?</h2>
          <p className="text-gray-700"><b>var:</b> Function-scoped, can be re-declared, hoisted with undefined.<br/>
            <b>let:</b> Block-scoped, cannot be re-declared, hoisted without initialization.<br/>
            <b>const:</b> Block-scoped, cannot be re-assigned, must be initialized</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-primary">
          <h2 className="text-xl font-semibold">What is the difference between == and === in JavaScript?</h2>
          <p className="text-gray-700"><b>== (Loose Equality):</b> Compares values after type conversion.<br/>
          <b>=== (Strict Equality):</b> Compares values without type conversion.<br/>
          <b>Example:</b><br/>
          console.log(5 == '5');  // true (type conversion happens)<br/>
          console.log(5 === '5'); // false (strict comparison)
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-primary">
          <h2 className="text-xl font-semibold">What is the difference between null and undefined?</h2>
          <p className="text-gray-700"><b>null:</b> Explicitly assigned to indicate "no value."<br/>
          <b>undefined:</b> Default value for uninitialized variables.<br/>
          <b>Example:</b><br/>
          let x;<br/>
          console.log(x); // undefined<br/>
          let y = null;<br/>
          console.log(y); // null<br/>
          </p>
        </div>
      </div>
      {/* REACTJS */}
      <p className="text-lg text-gray-600 font-bold">REACTJS QUESTION</p>
      <div className="mt-6 space-y-6">
        <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-primary">
          <h2 className="text-xl font-semibold">What is React, and why is it used?</h2>
          <p className="text-gray-700"> React is a JavaScript library for building user interfaces, primarily for single-page applications (SPAs). It allows developers to build reusable UI components and efficiently update the DOM using a virtual DOM.</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-primary">
          <h2 className="text-xl font-semibold">What are React Hooks?</h2>
          <p className="text-gray-700">React Hooks are functions that allow functional components to use state and lifecycle features. Common hooks include:<br/>
            <b>useState() –</b> for managing state.<br/>
            <b>useEffect() –</b> for handling side effects.<br/>
            <b>useContext() – </b>for using context API.<br/>
            <b>useRef() –</b> for accessing DOM elements.</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-primary">
          <h2 className="text-xl font-semibold"> What is the Virtual DOM, and how does it work?</h2>
          <p className="text-gray-700">The Virtual DOM is a lightweight copy of the real DOM. React updates the Virtual DOM first, compares it with the previous version (diffing), and applies only the necessary changes to the real DOM (reconciliation), improving performance.</p>
        </div>
      </div>
      {/* ANGULAR */}
      <p className="text-lg text-gray-600 font-bold">ANGULAR JS QUESTION</p>
      <div className="mt-6 space-y-6">
        <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-primary">
          <h2 className="text-xl font-semibold">What is Angular?</h2>
          <p className="text-gray-700"> Angular is a TypeScript-based open-source front-end web application framework developed by Google. It is used to build dynamic, single-page applications (SPAs).</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-primary">
          <h2 className="text-xl font-semibold">What are the key features of Angular?</h2>
          <p className="text-gray-700">Component-based architecture
            Dependency Injection (DI)<br/>
            Two-way data binding<br/>
            Directives and Pipes<br/>
            Routing and Navigation<br/>
            Observables and RxJS<br/>
            Lazy Loading</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-primary">
          <h2 className="text-xl font-semibold">Explain Components in Angular.</h2>
          <p className="text-gray-700">A Component is a basic building block in Angular. It consists of:<br/>
            Template (HTML): Defines the UI.<br/>
            Class (TypeScript): Contains business logic.<br/>
            Styles (CSS/SCSS): Defines appearance.</p>
        </div>
      </div>
      {/* NODEJS */}
      <p className="text-lg text-gray-600 font-bold">NODE JS QUESTION</p>
      <div className="mt-6 space-y-6">
        <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-primary">
          <h2 className="text-xl font-semibold">What is Node.js and how does it work?</h2>
          <p className="text-gray-700">Node.js is a runtime environment built on Chrome’s V8 JavaScript engine. It uses an event-driven, non-blocking I/O model, making it efficient for handling multiple requests asynchronously.</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-primary">
          <h2 className="text-xl font-semibold">What is the Event Loop in Node.js?</h2>
          <p className="text-gray-700">The Event Loop is the mechanism that allows Node.js to perform non-blocking I/O operations by handling asynchronous operations like timers, I/O tasks, and network requests in phases.</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-primary">
          <h2 className="text-xl font-semibold"> What is the difference between require and import in Node.js?</h2>
          <p className="text-gray-700">require is used in CommonJS modules (default in Node.js before ES6).<br/>
          import is used in ES Modules (.mjs files or with "type": "module" in package.json)</p>
        </div>
      </div>
      {/* EXPRESS JS */}
      <p className="text-lg text-gray-600 font-bold">EXPRESS JS QUESTION</p>
      <div className="mt-6 space-y-6">
        <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-primary">
          <h2 className="text-xl font-semibold">What is Express.js?</h2>
          <p className="text-gray-700">Express.js is a fast, unopinionated, and minimalist web framework for Node.js that simplifies routing, middleware management, and HTTP handling.</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-primary">
          <h2 className="text-xl font-semibold">What are middleware functions in Express.js?</h2>
          <p className="text-gray-700">Middleware functions in Express.js are functions that have access to the request (req), response (res), and the next() function. They are used for logging, authentication, error handling, etc.</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-primary">
          <h2 className="text-xl font-semibold"> How do you serve static files in Express.js?</h2>
          <p className="text-gray-700">dUse the express.static() middleware.<br/>
          app.use(express.static('public')); 
          </p>
        </div>
      </div>


      {/* <div className="mt-8">
        <h2 className="text-xl font-semibold">Add a New Question</h2>
        <form className="bg-white p-6 shadow-md rounded-lg">
          <div className="space-y-4">
            <div>
              <label htmlFor="questionTitle" className="block text-lg font-medium">Question Title</label>
              <input
                type="text"
                id="questionTitle"
                placeholder="Enter your question"
                className="w-full p-3 border rounded-lg mt-2"
              />
            </div>

            <div>
              <label htmlFor="questionDescription" className="block text-lg font-medium">Description</label>
              <textarea
                id="questionDescription"
                placeholder="Provide a detailed description"
                className="w-full p-3 border rounded-lg mt-2"
                rows="4"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="bg-primary text-white py-2 px-6 rounded-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
              >
                Submit Question
              </button>
            </div>
          </div>
        </form>
      </div> */}
    </div>
  );
};

export default Questions;
