# FullstackInternTask

This is a weather forecast application built using React, Vite, Tailwind CSS, and Framer Motion. The application interacts with the OpenWeatherMap API to provide current weather details and a 5-day forecast for any city.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## Features

- Search for weather information by city.
- View current temperature, minimum and maximum temperatures, humidity, wind speed, and weather description.
- View a 5-day weather forecast with an appropriate weather icon for each day.
- Toggle between Celsius and Fahrenheit units.
- Responsive design for both desktop and mobile.
- Smooth animations using Framer Motion.
- Error handling for invalid city names.

## Installation

Follow these steps to set up the project on your local machine:

### 1. Clone the Repository

First, clone the repository to your local machine using Git:

```bash
git clone https://github.com/sudipto-bhukta/wasserstoff.git

```
Navigate to the project directory
```bash
cd wasserstoff/FullstackInternTask
```

### 2. Install Dependencies
Install the required dependencies using npm or yam.

```bash
# Using npm
npm install

# Or, using yarn
yarn install
```

### 3.  Replace api_key with your own API key

 Navigate to
  ```plaintext
FullstackInternTask/
│
├── public/               # Public assets
├── src/                  # Source code
│   ├── pages/ Home.jsx   #replace api_key with your own
```
Replace your_openweathermap_api_key_here with your actual API key. You can obtain an API key by signing up at [OpenWeatherMap](https://home.openweathermap.org/users/sign_up).

### 4. Start the Development
Start the development server using the following command:

```bash
# Using npm
npm install

# Or, using yarn
yarn install
```
The application should now be running at 'http://localhost:5173'

## Usage
- Enter a city name in the search bar and click on "Get Weather" to view the current weather and 5-day forecast.
- Use the toggle button to switch between Celsius and Fahrenheit units.
- The weather information will be displayed below the seach bar.

## Technologies Used
- __React__: Frontend library for building user interfaces.
- __Vite__: Next-generation frontend tooling for fast development.
- __Tailwind CSS__: Utility-first CSS framework for styling.
- __Framer Motion__: Library for animations and transitions in React.
- __Axios__: Promise-based HTTP client for making API requests.

## Project Structure

```plaintext
FullstackInternTask/
│
├── public/               # Public assets
├── src/                  # Source code
│   ├── assets/           # Project assets (images, icons, etc.)
│   ├── components/       # Reusable components (Header, Weather, Forecast)
│   ├── pages/            # Main pages of the application (Home, ErrorPage)
│   ├── App.jsx           # Main App component
│   ├── main.jsx          # Entry point for the React application
│   └── index.css           # Global styles
├── .gitignore            # Git ignore file
├── index.html            # Main HTML file
├── package.json          # Project metadata and dependencies
├── README.md             # Project documentation
├── eslint.config.js      # Static code analysis tool that identifies and fixes problems in your JavaScript code
├── package-lock.json     # Automatically generated when you run npm install.
├── postcss.config.js     # Configure PostCSS, a tool for transforming CSS with JavaScript plugins.
├── tailwind.config.js    # A utility-first CSS framework.
└── vite.config.js        # Vite configuration file

```

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch ('git checkout -b feature-branch')
3. Make your changes and commit then ('git commit -m 'Add new feature')
4. Push to the branch ('git push origin feature-branch')
5. Open a Pull Request
