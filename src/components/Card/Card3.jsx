import {content, contenido} from "../../../content";
import { motion } from "framer-motion";

const Card3 = ({language}) => {

  let activeLanguage= ''
  if (language === true ){
activeLanguage = content
  } else {
    activeLanguage = contenido
  }

  return (
    <div className="flex flex-col">
      {activeLanguage.map((e, index) => {
        return (
          <motion.div
            className="  flex flew-row text-xs gap-6 ml-20 mt-4 rounded-xl p-2.5"
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
            <div className=" flex flex-col ml-8 w-50 text-blue-100 opacity-70  ">
              {e.date}
              <span
                style={{
                  color: e.cat === "EXPERIENCE" || e.cat === "EXPERIENCIA"? "#fed700" : "#5be2cd",
                }}
              >
                {e.cat}
              </span>
            </div>
            <div className="flex flex-col opacity-70 ">
              <motion.div
               
                  className="text-blue-100 text-justify flex"
                  whileHover={{ opacity: 1 }}
                >
                  {e.title}
                  <div className=" flex ml-2 gap-2 flex-row-reverse">
                    <a href={e.url}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                        className="h-4 w-4"
                        fill="white"
                      >
                        <path d="M450-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h170v60H280q-58.333 0-99.167 40.765-40.833 40.764-40.833 99Q140-422 180.833-381q40.834 41 99.167 41h170v60ZM325-450v-60h310v60H325Zm185 170v-60h170q58.333 0 99.167-40.765 40.833-40.764 40.833-99Q820-538 779.167-579 738.333-620 680-620H510v-60h170q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H510Z" />
                      </svg>
                    </a>
                    {e.relevant && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                        fill="#fed700"
                        className="h-4 w-4"
                        style={{opacity:1}}
                      >
                        <path d="M140-200q-24 0-42-18.5T80-260v-440q0-24 18-42t42-18h680q24 0 42 18t18 42v440q0 23-18 41.5T820-200H140Zm0-60h680v-440H140v440Zm160-65h360v-60H300v60Zm-97-125h60v-60h-60v60Zm124 0h60v-60h-60v60Zm123 0h60v-60h-60v60Zm124 0h60v-60h-60v60Zm123 0h60v-60h-60v60ZM203-575h60v-60h-60v60Zm124 0h60v-60h-60v60Zm123 0h60v-60h-60v60Zm124 0h60v-60h-60v60Zm123 0h60v-60h-60v60ZM140-260v-440 440Z" />
                      </svg>
                    )}
                  </div>
               
              </motion.div>

              <motion.p
                className="w-96 text-justify text-blue-100 leading-relaxed opacity-50 "
               
              >
                {e.text}
              </motion.p>

              <div className="flex gap-2 mt-2 flex-wrap w-96">
                {e.tech.map((tech, techIndex) => {
                  return (
                    <span
                      className=" badge bg-transparent text-xs border-opacity-50 opacity-100 "
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

export default Card3;
