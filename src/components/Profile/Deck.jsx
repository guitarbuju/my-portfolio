
import ProfessionalProfile from "./ProfessionalProfile";
import Portfolio from "./Portfolio";

function Deck({language,checked}) {
  return (
    <div className="lg:mt-20 mb-10 -ml-20 sm:mr-10">
        <ProfessionalProfile language={language} showExperience={checked} />
        {!checked && <Portfolio language={language} />}
      </div>
  )
}

export default Deck
