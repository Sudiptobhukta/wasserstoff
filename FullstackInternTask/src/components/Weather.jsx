import React from 'react';
import { motion } from 'framer-motion';


// Weather will receive the API reponse in the form of dictionary {weather} and we will filter out the required values
export default function Weather({ weather }) {
  const {
    name,
    main: { temp, temp_min, temp_max, humidity },
    wind: { speed, deg },
    weather: [{ description, icon }],
  } = weather;

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.5,
        ease: 'linear',
      }}
      className="group p-4 w-80 my-5 rounded-xl flex flex-col justify-center items-center border-4 border-slate-200 bg-slate-500 hover:scale-110 transform-gpu duration-200 hover:shadow-xl font-semibold text-white"
    >
      <h2 className="font-semibold text-4xl tracking-tight text-neutral-100">{name}</h2>
      <div>
        <img
          className="group-hover:scale-150 duration-150"
            //  this will fetch the icon from the OpenWeatherMap
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="Icon"
        />
        <p className="text-center font-semibold -tracking-wider text-yellow-400 text-xl">{temp}°</p>
      </div>

      {/* this section will show the details like description min_temp max_temp humidity wind speed */}
      <div className="group text-center font-sans font-medium p-2">
        <p className="group-hover:tracking-wider">{description}</p>
        <p className="group-hover:tracking-wider">Min: {temp_min}° | Max: {temp_max}°</p>
        <p className="group-hover:tracking-wider">Humidity: {humidity}%</p>
        <p className="group-hover:tracking-wider">Wind: {speed} m/s, {deg}°</p>
      </div>
    </motion.div>
  );
}
