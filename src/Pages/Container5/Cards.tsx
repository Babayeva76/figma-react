
import './Cards.scss';
interface ICardsProps{
    indication: string;
    pp6: string;
    pp7: string;
    marginLeft?: string;
}

 export const Cards =(props: ICardsProps) =>{
 const { indication , pp6, pp7, marginLeft}= props;
return(
    <div className="ipp" style={marginLeft ? { marginLeft: marginLeft } : {}}> 
    <img src={indication} alt=""/> 
    <p className="pp6">{pp6}</p> 
    <p className="pp7">{pp7}</p> 
  </div> 
)
 }