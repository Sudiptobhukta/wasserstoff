import React, { useState } from 'react';
import { motion } from 'framer-motion';


// this is the header section
function Header() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex items-center justify-center my-4 py-2">
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="text-7xl -tracking-wide font-bold text-white"
      >
        Weather{' '}
        <span className="font-thin text-yellow-300">
          Forecast{' '}
          {/* Used onMouseEnter and onMouseLeave attribute to add a little interactive icon */}
          <span
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isHovered ? '🌦️' : '☁️'}
          </span>
        </span>
      </motion.h1>
    </div>
  );
}

export default Header;
