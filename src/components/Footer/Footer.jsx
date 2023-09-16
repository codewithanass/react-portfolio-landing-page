import './Footer.css'
import FLogo from '../../assets/footerlogo.png'
import Icons from '../../assets/ICON.png'

const Footer = () => {
  return (
    <div className='container footer-con flex py-4'>
      <div className="col">
        <div className="footer-info">
            <img src={FLogo} alt="" />
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffere</p>
        </div>
      </div>

      <div className="col">
        <div className="socials flex">
            <p>Follow Me</p>
            <img src={Icons} alt="" />
        </div>
      </div>

      <div className="col">
        <div className="newsletter flex">
            <p>Newsletter</p>
            <input type="text" placeholder='Submit your email ...' />
        </div>
      </div>
    </div>
  )
}

export default Footer
