
import Card from "../../components/Card/Card";
import Card3 from "../../components/Card/Card3";
import Card4 from "../../components/Card/Card4";
import CardESP from "../../components/Card/CardESP";

function Deck({language,checked}) {
  return (
    <div className="mt-20 mb-10 -ml-20 sm:mr-10">
        {language ? <Card /> : <CardESP />}
        {checked ? <Card3 language={language} /> : <Card4 language={language}/>}
      </div>
  )
}

export default Deck