import './Container6.scss'
import long_right from './long_right.svg'
import line2 from './Rectangle (4).svg'
import philips from './6.svg'
import Logitech from './Logitech.svg'
import amazon from './4.svg'
import Facebook from './Facebook.svg'
import Google1 from './Google.svg'
import Linked from './Linked In.svg'

export const Container6 =() =>{
    return (
        <div className="container6">
        <p className="pp8">
          The Is Closing Headline To Make A Impact For Call To Action
        </p>
        <p className="pp9">
          Nowadays, it isn’t uncommon to see lenders rapidly adopting a digital
          lending strategy to streamline the lending process nowadays, it isn’t
          uncommon to see lenders rapidly
        </p>
        <button className="btn6">
          Book A Meeting <img src={long_right} alt="" />
        </button>
        <img className="line2" src={line2} alt="" />
        <div className="logo6">
          <img className="philips" src={philips} alt="" />
          <img
            className="logitech"
            src={Logitech}
            alt=""
          />
          <img className="amazon" src={amazon} alt="" />
          <img className="fb1" src={Facebook} alt="" />
          <img className="google1" src={Google1} alt="" />
          <img
            className="linked"
            src={Linked}
            alt=""
          />
        </div>
      </div>
    )
}