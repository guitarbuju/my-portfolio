import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom'
import JsLogo from '../../assets/‎jsLogo.‎001.jpeg'

const Intro = () => {
  return (
    <div className="hero min-h-screen bg-gray-900">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <div className="flex gap-4">
            <AnimatePresence>
              <motion.div
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
                <img  className="w-52"
                  src={JsLogo}
                />
              </motion.div>
            </AnimatePresence>
          </div>
          <motion.div
            initial={{ scale: 20, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl underline mt-4  font-bold" style={{color:'#5be2cd '}}>
              gerardoMadridDev
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
          >
            <p className="py-6 text-white opacity-80">
              JavaScript, React.js, Node.js, Express.js, MongoDB, MySQL,Docker,
              GIT, Postman, Jira
            </p>
            <Link to='/about'>
              <button className="btn btn-outline btn-accent mt-2 rounded-none" >
                Come in...
              </button>
             
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
