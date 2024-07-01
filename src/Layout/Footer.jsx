import light from "../assets/footer_bg.png";
import logo from "../assets/Highlight-Logo.png";

function Footer() {
  return (
    <div className="footer">
      <img src={light} alt="light-image" className="footer-img" />

      <div className="footer-grid">
        <div>
          <img src={logo} alt="logo" className="footer-logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            omnis porro, exercitationem animi harum aliquam. 
          </p>
        </div>
        <div style={{justifySelf:'center'}}>
          <h3>Follow Us</h3>
        </div>
        <div style={{gridColumnStart:'1',gridColumnEnd:'3'}}>
          <h3>Opening hours</h3>
          <div style={{display:'flex', gap:'15px',paddingTop:'10px'}}>
            <div style={{display:'flex', gap:'8px',flexDirection:'column'}}>
              <span>Monday-friday</span>
              <span>8:00 am to 9:00 pm</span>
            </div>
            <div style={{display:'flex', gap:'8px',flexDirection:'column'}}>
            <span>Saturday</span>
            <span>8:00 am to 9:00 pm</span>
            </div>
            <div style={{display:'flex', gap:'8px',flexDirection:'column'}}>
            <span>Sunday</span>
            <span>Closed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
