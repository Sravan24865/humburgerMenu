// Write your code here
// Write your code here
import Header from '../Header'

import './index.css'

const About = () => (
  <div className="about-container">
    <Header />
    <div className="about-image-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        className="mobile-about-image"
        alt="About"
      />
      <img
        className="desktop-about-image"
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="About"
      />
    </div>
  </div>
)

export default About
