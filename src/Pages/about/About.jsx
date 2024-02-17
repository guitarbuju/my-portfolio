import { useState } from "react";
import Deck from "../../components/Card/Deck";
import TitleBoard from "../../components/Card/TitleBoard";
import { Link } from "react-router-dom"
import camera from "../../assets/icons8-camera-24.png";
import espana from '../../assets/icons8-spain-48.png'
import usa from '../../assets/icons8-usa-48.png'


const About = () => {
  const [checked, setChecked] = useState(true);

  const handleCheck = () => {
    setChecked(!checked);
  };

  const [language, setLanguage] = useState(true);

  const handleLanguage = () => {
    setLanguage(!language);
    console.log(language);
  };

  return (
    <div className="flex gap-10 justify-center flex-row ">
      <div className="mt-40 ml-40 w-96 hidden lg:block">
        <TitleBoard
          handleCheck={handleCheck}
          handleLanguage={handleLanguage}
          language={language}
        />
      </div>
      <div className=" flex-col items-center">
        <header className="  lg:hidden flex-col justify-center text-2xl mt-5">
        <h1 className=" flex justify-center align-middle text-blue-100">Gerardo Madrid Developer</h1>
        <div className="flex align-middle justify-center gap-2  mb-2  ">
            <img src={usa} className="w-6 opacity-80"/>
            <input
              type="checkbox"
              className="toggle toggle-xs mt-2"
              onChange={handleLanguage}
            />
            <img src={espana} className="w-8 opacity-80"/>
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
          </div>
          <div className="mt-2 flex justify-center">
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
          <p className=" text-xs flex justify-center align-middle text-blue-100 -mt-5">gerardoamadrid@gmail.com</p>
        </header>
        <Deck language={language} checked={checked} />
      </div>
    </div>
  );
};

export default About;
