import { motion } from "framer-motion";
const CardESP = () => {
  return (
    <div className="hidden xl:block">
      <motion.div
        className="card bg-transparent "
        style={{ width: "700px", border:'none' }}
        initial={{ opacity: 0, y: -1000 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -1000 }}
        transition={{ duration: 2 }}
      >
        <div className="card-body">
          <motion.div
            initial={{ opacity: 0, y: -1000 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -1000 }}
          >
            
              <p className="text-blue-100 text-justify opacity-40 leading-relaxed text-sm">
                Mi nombre es Gerardo Madrid. Soy un Desarrollador de Software de Venezuela viviendo en Europa.
              </p>
            
  <p className="text-blue-100 text-justify text-xs leading-relaxed">
              {" "}
              Actualmente me enfoco en {" "}
              <em style={{ color: "#5be2cd " }}>
                Desarrollo FrontEnd 
              </em> con{" "}
              <span
                className="italic text-blue-100 text-justify mr-1 text-xs"
                style={{ color: "#5be2cd " }}
              >
               REACT JS , NEXT JS, VANILLA JS.
              </span>
              utilizo hooks, diferentes Librerias, Preprocesadores CSS, Bootstrap,
              Tailwind, React Router, React Hook Forms, Zustand, Framer Motion,
              NPM etc.
            </p>
            <p className="text-blue-100 text-justify text-xs leading-relaxed ">
              Tambien tengo experiencia con{" "}
              <span style={{ color: "#5be2cd " }}>
                NODE.JS, EXPRESS.JS, MONGODB, MYSQL, PHP, POSTMAN, DOCKER, GIT,
                JIRA, POSTGRESQL
              </span>{" "}
              y otras tecnologias.
            </p> 
             
            
          </motion.div>
          <h4 className="text-blue-100 text-justify opacity-70 text-xs italic mx-16 leading-relaxed">
            &ldquo;Lo que me distingue es mi compromiso inquebrantable con mis clientes.
             Traigo a la mesa no solo experiencia técnica sino también una fuerte
             Ética de trabajo, sed de aprendizaje continuo y espíritu colaborativo.
             Enfoque de la dinámica de equipo. Mi dedicación a sus proyectos va
             más allá del mero trabajo; Me enorgullece personalmente alinearme con su
             visión y objetivos de la empresa. &rdquo;
          </h4>
        </div>
      </motion.div>
    </div>
  );
};

export default CardESP;
