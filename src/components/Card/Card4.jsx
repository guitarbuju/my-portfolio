/* eslint-disable react/prop-types */
import { portfolio } from "../../../content";
import { motion } from "framer-motion";
import Rating from './Rating'

const Card4 = ({language}) => {
  console.log(portfolio);
  return (
    <div className="flex flex-col w-full -ml-10">
      {portfolio.map((e, index) => {
        return (
          <motion.div
            className="  text-xs gap-6 ml-40 mt-4 rounded-xl p-2.5 sm:flex align-middle w-80 sm:w-full "
            key={index}
            initial={{ opacity: 0, y: -1000 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: index * 0.5 }}
            whileHover={{
              scale: 1.008,
              backgroundColor: "#161e2f",
              transition: { duration: 0.2 }, // Adjust the duration for the hover effect
            }}
          >
            <div className="sm:flex-col items-center flex  ml-8 w-50 text-blue-100 opacity-70 text-xs gap-2 justify-center align middle mb-2">
              <p>{language ? e.stage :e.etapa}</p>
              <span
                style={{
                  color: e.cat === "FRONTEND" ? "#fed700" : "#5be2cd",
                }}
              >
                {e.cat}
              </span>
            </div>
            <div className="flex flex-col opacity-70 w-3/4 sm:w-96">
              <motion.div
                className=" flex justify-around  text-blue-100 text-justify  text-xs "
                whileHover={{ opacity: 1 }}
              >
               <p className="">{e.title}</p> 
                <div className=" flex ml-2 gap-2 ">
                  <a href={e.hub}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill={e.published ? "#facc16 ": "#dbeafe"}
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <div className="flex-col">
                    <a className="w-3/4 sm:w-80" href={e.hub} >{e.published && <p className='blinker'>PUBLISHED</p>}</a>
                    <Rating rating={e.rating} />
                  </div>
                  
                 
                </div>
              </motion.div>
              <div className="flex justify-start flex-col p-5 gap-2">
                <motion.img
                  className=" sm:w-80 shadow-xs  shadow-blue-100 border-white border-double"
                  src={e.img}
                />
                <motion.p className="w-60 sm:w-96 text-start text-blue-100 leading-relaxed opacity-50 ">
                  {language ? e.desc : e.descripcion}
                </motion.p>
              </div>

              <div className="flex gap-2 flex-wrap w-60 sm:w-96">
                {e.tech.map((tech, techIndex) => {
                  return (
                    <span
                      className="  flex justify-center badge bg-transparent text-xs border-opacity-50 opacity-100 "
                      style={{ color: "#5be2cd " }}
                      key={techIndex}
                    >
                      {tech}
                    </span>
                  );
                })}
                ))
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Card4;
