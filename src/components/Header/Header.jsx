import './Header.css'
import Herobg from '../../assets/headerUser.png'

const Header = () => {
  return (
    <div className='container header-con flex'>
      <div className="header-left">
        <div className="header-content p-3">
            <h1 className='lg'>I am <span className='text-primary'>William</span> a UX Designer from the Bronx</h1>
            <p className='text-light my-2'>Hi, my name is Alex Smith and I love creating unique interfaces using code. Pixel perfect every time just try me out.</p>
            <button className="btn">- My Work</button>
        </div>
        
      </div>
      <div className="header-right">
        <img src={Herobg} alt="user-img" />
      </div>
    </div>
  )
}

export default Header
