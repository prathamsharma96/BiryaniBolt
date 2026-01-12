🍔 FoodReact – Restaurant Listing App

A Swiggy-inspired restaurant discovery web app built using React and Tailwind CSS.
This is a personal learning project focused on understanding real-world React concepts, API handling, and deployment using Vercel.

🚀 Live Demo

👉 (Add your deployed Vercel link here)

https://foodreact.vercel.app

🛠️ Tech Stack

React (Functional Components)

React Router DOM

Tailwind CSS

JavaScript (ES6+)

Vercel Serverless Functions

Git & GitHub

📚 React Concepts Learned

Through this project, I learned and implemented:

Functional Components

JSX

Props and State

useState and useEffect hooks

Conditional Rendering

List Rendering using map()

Controlled Inputs (Search feature)

React Router (Link, useParams)

Component Reusability

Lifting State Up

Handling asynchronous API calls

Error handling in React

Folder and component structuring

Basic performance optimizations

Preparing a React app for production deployment

✨ Features

🔍 Search restaurants by name

🧾 Restaurant cards displaying:

Image

Name

Cuisines

Rating

Cost for two

Delivery time

📂 Restaurant menu page with:

Accordion-style categories

Item prices and descriptions

Bestseller tags

⏳ Shimmer (skeleton) loading UI

📱 Fully responsive layout

🎨 Clean UI using Tailwind CSS

🌐 Backend logic handled using Vercel Serverless APIs

👨‍💻 Simple and clean UI suitable for a personal project

🧩 Problems Faced & Solutions
1. CORS Issues

Browser blocked direct API calls to Swiggy.

Solution: Used Vercel Serverless Functions so the frontend and backend run on the same domain.

2. Only Limited Restaurants Displayed

Initially used find() on the API response.

Solution: Used filter() and flatMap() to extract all restaurant sections properly.

3. UI Broke After Installing Tailwind CSS

Tailwind reset default browser styles.

Solution: Rebuilt UI using Tailwind utility classes.

4. Footer Height Changed Between Pages

Footer position depended on page content height.

Solution: Used flex, min-h-screen, and flex-grow layout pattern.

5. Backend Deployment on Vercel

Express server (app.listen) not supported on Vercel.

Solution: Converted backend logic into serverless API functions under /api.

📁 Project Structure
FoodReact/
│
├── api/
│   └── swiggy.js        # Serverless backend
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Body.jsx
│   │   ├── RestaurantCard.jsx
│   │   ├── RestaurantMenu.jsx
│   │   ├── Shimmer.jsx
│   │   └── Footer.jsx
│   │
│   └── utils/
│
├── README.md
└── package.json

🔮 Future Improvements

Dark mode support

Cart functionality

Global state management (Context / Redux)

Better error handling UI

Performance optimizations

Animations and UI polish

👨‍💻 Author

Pratham Sharma
This project was built for learning and hands-on practice with React.
