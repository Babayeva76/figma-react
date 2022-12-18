import './Container5.scss'
import {useState} from 'react' ;
import { Cards } from './Cards';
import indication from './Indication.svg'



export const Container5 = () =>{

const cards =[
  {
    id: 1,
    indication: indication,
    pp6: "Ideate",
    pp7: "Turn your idea from concept to MVP",
  },

  {
    id: 2,
    indication: indication,
    pp6: "Design",
    pp7: "Sketch out the product to align the user needs",
  },

  {
    id: 3,
    indication: indication,
    pp6: "Develop",
    pp7: "Convert the designs into a live application",
  },

  {
    id: 4,
    indication: indication,
    pp6: "Deploy",
    pp7: "Launching the application to the market",
  },

  {
    id: 5,
    indication: indication,
    pp6: "Ideate",
    pp7: "Turn your idea from concept to MVP",
  },

  {
    id: 6,
    indication: indication,
    pp6: "Design",
    pp7: "Sketch out the product to align the user needs",
  },

  {
    id: 7,
    indication: indication,
    pp6: "Develop",
    pp7: "Convert the designs into a live application",
  },

  {
    id: 8,
    indication: indication,
    pp6: "Deploy",
    pp7: "Launching the application to the market",
  },
]
const Container5Width=286;
const [currentSlideNumber, setCurrentSlideNumber] = useState(0);
const leftButtonClickHandler = () => {
    setCurrentSlideNumber(currentSlideNumber-1);
}

const rightButtonClickHandler = () => {
    setCurrentSlideNumber(currentSlideNumber+1);
}


    return(
        <div className="container5">
        <div className="mainpart5">
          <p className="pp5">The process we follow</p>
          <div className="iddd">
          {
                    cards.map((card, index) =>(
                    <Cards indication={card.indication} pp6={card.pp6} pp7={card.pp7} marginLeft={index===0 ? `${-Container5Width * currentSlideNumber}px` : ""}/>     
                    ))}
          </div>
          <div className="carusel">
            <button className="carousel-button left" disabled={currentSlideNumber===0} onClick={leftButtonClickHandler}>Left</button>
            <button className="carousel-button right" disabled={currentSlideNumber===cards.length-4} onClick={rightButtonClickHandler}>Right</button>
          </div>
        </div>
      </div>
      
    );
};