import React from "react";
import { motion } from "motion/react";
import { easeOut } from "motion";
import team1 from "../../assets/banner/team1.jpeg";
import team2 from "../../assets/banner/team2.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-64 mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className="flex-1">
          <motion.img
            animate={{ y: [30, 60, 30] }}
            transition={{
              duration: 10,

              ease: easeOut,
              repeat: Infinity,
            }}
            src={team1}
            className="max-w-sm shadow-2xl border-l-4 border-b-4 border-blue-600 rounded-[40px] rounded-bl-none"
          />
          <motion.img
            animate={{ x: [100, 150, 100] }}
            transition={{
              duration: 10,
              delay: 1,
              ease: easeOut,
              repeat: Infinity,
            }}
            src={team2}
            className="max-w-sm shadow-2xl border-l-4 border-b-4 border-blue-600 rounded-[40px] rounded-bl-none"
          />
        </div>
        <div className="flex-1">
          <motion.h1
            animate={{ x: 50 }}
            transition={{
              duration: 2,
              delay: 0.5,
              ease: easeOut,
              repeat: Infinity,
            }}
            className="text-5xl font-bold"
          >
            Latest{" "}
            <motion.span
              animate={{ color: ["#8D0B41", "#5DB996", "#F72C5B"] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Jobs
            </motion.span>{" "}
            for You!
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
