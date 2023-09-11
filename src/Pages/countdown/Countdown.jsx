
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Countdown = () => {
  const [remainingTime, setRemainingTime] = useState(5);
  const [remainingMilliseconds, setRemainingMilliseconds] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (remainingMilliseconds > 0) {
        setRemainingMilliseconds((prevMillis) => prevMillis - 100);
      } else if (remainingTime > 0) {
        setRemainingTime((prevTime) => {
          if (prevTime > 0) {
            setRemainingMilliseconds(900);
          }
          return prevTime - 1;
        });
      } else {
        clearInterval(countdownInterval);
        setTimeout(() => {
          navigate("/about");
        }, 2000);
      }
    }, 100);

    return () => {
      clearInterval(countdownInterval);
    };
  }, [remainingTime, remainingMilliseconds, navigate]);

  return (
    <motion.div
      className="h-screen flex justify-center content-center flex-col items-center  "
      initial={{ x: -1000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        type: "spring",
        damping: 10,
        stiffness: 80,
      }}
    >
      <h1 style={{ color: "#5be2cd" }} className="text-8xl italic">
        ...Hey wait for it ...¡¡¡
      </h1>
      <div className="flex justify-center align-middle  gap-2 mt-10">
      <div
          className=" w-60 h-60 shadow-xl  flex justify-center align-middle rounded-box "
          style={{ backgroundColor: "#161e2f" }}
        >
          <div className="mt-10 text-neutral-content border-current countdown rounded-box h-40 w-40 border-solid border-4 items-center flex justify-center content-center ">
            <h1
              style={{ textAlign: "center" }}
              className="text-6xl"
            >
             00
            </h1>
          </div>
        </div>
        <h1 className="text-6xl text-neutral-content mt-20">:</h1>
        <div
          className=" w-60 h-60 shadow-xl  flex justify-center align-middle rounded-box "
          style={{ backgroundColor: "#161e2f" }}
        >
          <div className="mt-10 text-neutral-content border-current countdown rounded-box h-40 w-40 border-solid border-4 items-center flex justify-center content-center ">
            <h1
              style={{ "--value": remainingTime, textAlign: "center" }}
              className="text-6xl"
            >
              {remainingTime}
            </h1>
          </div>
        </div>
        <h1 className="text-6xl text-neutral-content mt-20">:</h1>
        <div
          className=" w-60 h-60 shadow-xl  flex justify-center align-middle rounded-box "
          style={{ backgroundColor: "#161e2f" }}
        >
          <div className="mt-10 text-neutral-content border-current countdown rounded-box h-40 w-40 border-solid border-4 items-center flex justify-center content-center ">
            <h2
              style={{ "--value": remainingMilliseconds, textAlign: "center" }}
              className="text-6xl"
            >
              {String(remainingMilliseconds).padStart(3, "0")}
            </h2>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Countdown;
