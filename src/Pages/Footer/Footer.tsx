import './Footer.scss'
import logo10 from './Logo (1).svg'
import line3 from './Rectangle.svg'
import long_right from './long_right.svg'

export const Footer = () =>{
    return(
        <footer className="mf">
      <div className="mainft">
        <div className="mainft1">
          <div className="leftft">
            <img className="logo10" src={logo10} alt="" />
            <div className="leftft2">
              <p className="pp10">About Tweakful</p>
              <p className="pp111">
                Tweakful is HubSpot Theme Based On Engagement Design Framework,
                designed & developed by Openthrive.
              </p>
              <button className="btn7">
                Button Text<img src={long_right} alt="" />
              </button>
            </div>
          </div>
          <div className="rightft">
            <div className="rightft1">
              <span className="ft">Contact</span>
              <span className="ft">Career</span>
              <span className="ft">Privacy Plocy</span>
              <span className="ft">Terms Of Services</span>
              <span className="ft">GDPR</span>
              <span className="ft">FAQs</span>
            </div>
            <div className="rightft2">
              <span className="ft">Blog</span>
              <span className="ft">Capabilities</span>
              <span className="ft">Resources</span>
              <span className="ft">Partnership Integration</span>
            </div>
          </div>
        </div>
        <img className="line3" src={line3} alt="" />
        <div className="the-end">
          <p className="pp12">
            B2B website and engagement design solution that transform marketing
            and sales performance like never before.
          </p>
          <p className="pp13">© 2015-2020 Openthrive. All right reserved.</p>
        </div>
      </div>
      <script src="java.js"></script>
    </footer>
    )
}