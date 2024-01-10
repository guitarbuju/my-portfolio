import { useEffect } from "react";
import { images } from "../../../content";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
const Portfolio = () => {
  const openImageInNewTab = (url) => {
    window.open(url, "_blank");
  };
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on component mount
  }, []);

  return (
    <>
      <AnimatePresence>
        <motion.div
          className="navbar fixed z-10"
          style={{ backgroundColor: "#111827 " }}
          initial={{ y: -1000, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 1000, opacity: 0 }}
          transition={{
            type: "spring",
            damping: 10,
            stiffness: 100,
            delay: 0.8,
          }}
        >
          <div className=" 2xl:flex-col ">
            <div className=" flex-1">
              <a className="btn btn-ghost normal-case text-4xl text-blue-100">
                Welcome to my Gallery...
              </a>
            </div>
            <div className="flex ">
              <Link to="/about">
                <button className=" btn btn-warning ">Go Back</button>
              </Link>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-center align-middle p-5 ">
        <motion.div
          className=" grid grid-cols-2 sm:grid-cols-5 gap-4 mt-20 mb-20 w-10/12 "
          initial={{ opacity: 0, y: -500 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          {images.map((image) => (
            <motion.div
              key={image.id}
              whileHover={{
                scale: 1.11,
                transition: { duration: 0.2 }, // Adjust the duration for the hover effect
              }}
            >
              <div className="lg:tooltip tooltip-warning " data-tip="click me!">
                <img
                  className="object-contain w-full h-full"
                  src={image.url}
                  alt={image.title}
                  style={{ backgroundColor: "#111827" }}
                  onClick={() => openImageInNewTab(image.url)}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Portfolio;
