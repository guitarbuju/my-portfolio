
import axios from "axios";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import camera from "../../assets/icons8-camera-24.png";
import espana from '../../assets/icons8-spain-48.png'
import usa from '../../assets/icons8-usa-48.png'


const TitleBoard = ({handleCheck, handleLanguage, language}) => {
 

  const [randomQuote, SetRandomQuote] = useState({});

  const options = {
    method: "GET",
    url: "https://type.fit/api/quotes",
  };

  const getQuotes = async () => {
    try {
      const response = await axios.request(options);

      const randomIndex = Math.floor(Math.random() * 16);

      const { text, author } = response.data[randomIndex];

      const trimAuthor = author.split(",")[0].trim();

      SetRandomQuote({ text, trimAuthor });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getQuotes();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex gap-10 justify-center flex-row fixed   ">
      <AnimatePresence >
        <motion.div
       
        >
        {/* TOGGLE LANGUAGE */}
          <div className="flex align-middle justify-center gap-2  mb-2 mr-60 ">
            <img src={usa} className="w-6 opacity-80"/>
            <input
              type="checkbox"
              className="toggle toggle-xs mt-2"
              onChange={handleLanguage}
            />
            <img src={espana} className="w-8 opacity-80"/>
          </div>

          <h1 className="text-blue-100 text-5xl">Gerardo Madrid</h1>
            
            <h2 className="text-blue-100 text-2xl opacity-60 mt-2">
            {language ? 'Developer' : 'Desarrollador'}</h2>
          <p className="text-blue-100  opacity-40 mt-0 text-sm">
          {language ? 'inspiring, engaging and functional development' : 'desarrollo funcional que conecta e inspira ...'}  
          </p>
        
          
          
         
          
          <p className="text-blue-100  opacity-40 mt-0 text-xs">
            <a href="mailto:gerardoamadrid@gmail.com">
              gerardoamadrid@gmail.com
            </a>
          </p>
          <div className="mt-2">
            <Link to="/portfolio">
              <p
                className="flex align-middle gap-1 mt-0 text-xs italic opacity-80"
                style={{ color: "#5be2cd" }}
              >
                {language ? '...Take a look at my gallery....' : 'Mira mi galeria de Imagenes ...'}
                <span className="w-10 mb-6">
                  <img src={camera} />
                </span>
              </p>
            </Link>
          </div>
          <div className="flex gap-2 justify-center align-middle">
            <div>
              <h1 className="w-20 text-center text-xs  text-blue-100 leading-relaxed opacity-50 mt-2 mr-2">
               {language ? 'Experience & Education': 'Experiencia y Educaciòn'} 
              </h1>
            </div>
            <input
              type="checkbox"
              className="toggle toggle-xs mt-4"
              onChange={handleCheck}
            />
            <h1 className="w-20 text-xs text-center text-blue-100 leading-relaxed opacity-50 mt-4">
             {language ? 'Portfolio' : 'Portafolio'} 
            </h1>
          </div>

          <div className="flex gap-4 justify-center mt-10 opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 "
              fill="#e1e8f0"
              viewBox="0 0 24 24"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
            <a href='https://github.com/guitarbuju' >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 hover:scale-125"
              fill="#e1e8f0"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            </a>
            <a href="https://www.linkedin.com/in/gerardomadriddev/"  >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 hover:scale-125"
                fill="#e1e8f0"
                viewBox="0 0 24 24"
                
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="#e1e8f0"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </div>

          <blockquote className="relative mt-20 ">
            <svg
              className="absolute opacity-70 top-0 left-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-gray-100 dark:text-gray-700"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                fill="#e1e8f0"
              />
            </svg>

            <div className="relative z-10 -mt-10">
              <p className="italic sm:text-xs ml-10 text-blue-100 opacity-70 ">
                <em>{randomQuote.text} ...</em>
              </p>
            </div>

            <footer className="mt-2">
              <div
                className="sm:text-xs ml-40 italic opacity-60"
                style={{ color: "#5be2cd " }}
              >
                {randomQuote.trimAuthor }
              </div>
            </footer>
          </blockquote>
        </motion.div>
      </AnimatePresence>

    </div>
  );
};

export default TitleBoard;

