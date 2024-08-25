import React, {useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import Weather from '../components/Weather';
import Forecast from "../components/Forecast";
import { trefoil } from 'ldrs';
import Alert from '@mui/material/Alert';
import { motion } from 'framer-motion';

function Home() {
  const [city, setCity] = useState(''); //this will store the input from the input tag
  const [weather, setWeather] = useState(null); //this will store the repsonse of the API for weather initial it is null
  const [forecast, setForecast] = useState([]); // this will store the response of the API for forecast initial it is empty list
  const [unit, setUnit] = useState('metric'); // this will store the unit for Celcius and Fahrenheit
  const [error, setError] = useState(''); // this will store error message if there is any error

  trefoil.register(); // initilisation for trefoil loader

  const api_key = "40022d2efaacb35ac23d9299e058c85b"; // api key


// fetchWeather function will get the response of Weather API and set the data into const weather and same goes for const error if any error occur
  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${api_key}`
      );
      setWeather(response.data);
      setError('');
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.log("City not found");
        setError("City not found");
      } else {
        console.log("An error occurred");
        setError("An error occurred");
      }
    }
  };

// fetchForecast function will get the response of Forecast API and set the data into const forecast and same goes for const error if any error occur
  const fetchForecast = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${api_key}`
      );
      setForecast(response.data.list.filter((_, index) => index % 8 === 0));
    } catch (error) {
      setError("Error");
    }
  };

// handleClick will be called when user click the Get Weather Button and it will call fetchWeather and fetchForecast
  const handleClick = () => {
    fetchWeather();
    fetchForecast();
  };
// handleMetric will be called when user will toggle the degree button and it will also call the handleClick
  const handleMetric = () => {
    setUnit(unit === 'metric' ? 'imperial' : 'metric');
    handleClick();
  };

  return (
    <div className="overflow-x-hidden antialiased text-neutral-800 w-full selection:bg-teal-500 selection:text-teal-50">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="relative h-full w-full bg-slate-950">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        </div>
      </div>
      <div className="flex flex-col container mx-auto px-7">
        <Header />
        <div className="flex flex-col justify-center items-center mt-16">

        {/* Input tag which will use setCity function to change the value of city through useState */}

          <input
            type="text"
            placeholder="Enter City ☀️"
            className="w-4/6 text-center text-xl h-14 rounded-full font-medium -tracking-wider border-4 border-slate-400 hover:scale-110 duration-150"
            value={city}
            onChange={(e) => setCity(e.target.value)}/> 

            {/* Get Weather button will use onClick to call handleClick function */}

          <div className="flex justify-center items-center font-sans font-semibold mt-10">
            <button
              className="my-3 rounded-lg w-32 text-lg ml-4 border-2 border-purple-200 bg-gradient-to-r from-orange-400 via-slate-300 to-purple-500 hover:text-white"
              onClick={handleClick}
            >
              Get Weather
            </button>

            {/* Metric Button will use onClick attribute to call handleMetric function */}

            <button
              className="mx-4 rounded-lg border-2 border-purple-200 w-10 text-lg bg-gradient-to-r from-purple-400 via-slate-300 to-orange-500 hover:text-white"
              onClick={handleMetric}
            >
              {unit === 'metric' ? '°C' : '°F'}
            </button>
          </div>
        </div>

        {/* To display the Weather and Forecast component we must first ensure we got proper API response and 
        we can do that by adding implication statement weather?statement:statement */}
        {weather ? (
          <div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              className="flex flex-col justify-center items-center text-white"
            >
              <h2 className="text-4xl font-bold mt-11 tracking-tight bg-gradient-to-r from-yellow-500 to-white bg-clip-text text-transparent">
                Weather <span className="font-thin">Details</span>
              </h2>
            </motion.div>

            <div className="flex flex-col justify-center items-center">

            {/* this will handle the error if any error occur during the execution */}

              {error && (
                <Alert className="mt-4 h-15" variant="filled" severity="error">
                  {error}
                </Alert>
              )}

              {/* this will check the API response and will send the api respone to the Weather component  */}

              {weather && <Weather weather={weather} />}
              <motion.h2
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9 }}
                className="text-4xl font-bold mt-11 mb-5 bg-gradient-to-r tracking-tight from-yellow-500 to-white bg-clip-text text-transparent"
              >
                5 Day <span className="font-thin">Forecast</span>
              </motion.h2>

              {/* this will send API repsone of forecast to Forecast API and we will loop through the data through 
              map function */}

              <div className="flex flex-row mx-5 justify-center items-center md:flex-col">
                <div className="flex flex-wrap rounded-2xl my-4">
                  {forecast.map((day, index) => (
                    <div key={index} className="">
                      <Forecast day={day} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          // this section is else statement it will show the loader icon when there is no API reponse 
          <div className="flex flex-col justify-center items-center text-center mt-44">
            <div className="hover:scale-150 duration-150 transform-gpu">
              <l-trefoil
                size="50"
                stroke="4"
                stroke-length="0.2"
                bg-opacity="0.1"
                speed="1.4"
                color="yellow"
              ></l-trefoil>
            </div>

            <div className="flex font-medium tracking-tighter text-yellow-300 hover:text-red-500 mt-7">
              SEARCH THE WEATHER OF THE CITY
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
