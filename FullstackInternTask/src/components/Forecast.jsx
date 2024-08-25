import React from 'react';
import { motion } from 'framer-motion';


// Forecast will receive the API reponse in the form of dictionary {day} and we will filter out the required values
function Forecast({ day }) {
  const {
    dt_txt,
    main: { temp },
    weather: [{ description, icon }],
  } = day;

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="group transform duration-150 h-63 shadow-2xl shadow-sky-200 hover:shadow-lg flex flex-col mx-5 my-6 justify-center items-center border-4 mt-2 rounded-xl p-2 bg-gradient-to-t from-yellow-300 via-pink-300 to-orange-200 hover:scale-105"
    >
      <h4 className="font-mono tracking-tight font-semibold rounded-full px-1 bg-slate-300 mt-3 group-hover:scale-125 duration-150">

        {new Date(dt_txt).toLocaleDateString()}       {/* This will filter out only the date from the dt_txt variable */}
      </h4>
      <img
        className="group-hover:scale-125 duration-150 transform-gpu"

        //  this will fetch the icon from the OpenWeatherMap

        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}     
        alt="icon"
      />
      
      {/* this will show the average temperature and description */}

      <p className="text-lg font-semibold">{temp}°</p>    
      <p className="w-36 text-center text-lg mb-1">{description}</p>
    </motion.div>
  );
}

export default Forecast;
