import { motion } from "framer-motion";
const Card = () => {
  return (
    <div className="hidden xl:block">
      <motion.div
        className="card bg-transparent "
        style={{ width: "700px" ,border:'none'}}
        initial={{ opacity: 0, y: -1000 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -1000 }}
        transition={{ duration: 3 }}
      >
        <div className="card-body">
          <motion.div
            initial={{ opacity: 0, y: -1000 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -1000 }}
          >
            
              <p className="text-blue-100 text-justify opacity-40 leading-relaxed">
                My name is Gerardo Madrid. I&apos;m a software developer from
                Venezuela living in Europe.
              </p>
             

  <p className="text-blue-100 text-justify text-xs leading-relaxed">
              {" "}
              I&apos;m currently focused in{" "}
              <em style={{ color: "#5be2cd " }}>
                FrontEnd Development
              </em> with{" "}
              <span
                className="italic text-blue-100 text-justify mr-1 text-xs"
                style={{ color: "#5be2cd " }}
              >
                REACT JS, NEXT JS and VANILLA Js.
              </span>
              I use hooks, 3rd party libraries, Css preprocessors, Bootstrap,
              Tailwind, React Router, React Hook Forms, Zustand, Framer Motion,
              NPM etc.
            </p>
            <p className="text-blue-100 text-justify text-xs leading-relaxed ">
              I&apos;m also experienced in{" "}
              <span style={{ color: "#5be2cd " }}>
                NODE.JS, EXPRESS.JS, MONGODB, MYSQL, PHP, POSTMAN, DOCKER, GIT,
                JIRA, POSTGRESQL
              </span>{" "}
              and other technologies.
            </p> :

            
          </motion.div>
          <h4 className="text-blue-100 text-justify opacity-70 text-xs italic mx-16 leading-relaxed">
            &ldquo;What sets me apart is my unwavering commitment to my clients.
            I bring to the table not only technical expertise but also a strong
            work ethic, a thirst for continuous learning, and a collaborative
            approach to team dynamics. My dedication to your projects goes
            beyond mere work; I take personal pride in aligning with your
            company&apos;s vision and goals. &rdquo;
          </h4>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
