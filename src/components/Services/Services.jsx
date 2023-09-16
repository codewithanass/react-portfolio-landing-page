import './Services.css'
import CardIcon1 from '../../assets/icon1.svg'
import CardIcon2 from '../../assets/icon2.svg'
import CardIcon3 from '../../assets/icon3.svg'

const Services = () => {
  return (
    <div className='container '>
      <div className="services-con py-5">
        <div className="headings text-center">
            <span className='text-primary'>My Services</span>
            <h2 >Why hire me for your next project?</h2>
        </div>
        <div className="services-cards grid grid-3 py-4">
            <div className="card">
                <img src={CardIcon1} alt="" />
                <h4>Blog Articles</h4>
                <p>Mauris vel quam nunc. Quisque tempor tempus aliquet. Donec egestas odio et tempor.</p>
            </div>
            <div className="card">
                <img src={CardIcon2} alt="" />
                <h4>SEO strategy</h4>
                <p>Mauris vel quam nunc. Quisque tempor tempus aliquet. Donec egestas odio et tempor.</p>
            </div>
            <div className="card">
                <img src={CardIcon3} alt="" />
                <h4>Content architecture</h4>
                <p>Mauris vel quam nunc. Quisque tempor tempus aliquet. Donec egestas odio et tempor.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Services
