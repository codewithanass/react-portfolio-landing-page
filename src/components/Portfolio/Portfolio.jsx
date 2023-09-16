import './Portfolio.css'
import Portfolio1 from '../../assets/portfolio1.png'
import Portfolio2 from '../../assets/portfolio2.png'
import Portfolio4 from '../../assets/portfolio3.png'
import Portfolio3 from '../../assets/portfolio4.png'
import Portfolio5 from '../../assets/portfolio5.png'
import Portfolio6 from '../../assets/portfolio6.png'

const Portfolio = () => {
  return (
    <div className='portfolio-con py-5'>
      <div className="portfolio-heading text-center">
        <h1 >Let's a have a look at my portfolio</h1>
        <p className='py-2'>I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>
      </div>
      <div className="container">
        <div className="grid">
            <img src={Portfolio1} alt="" />
            <img src={Portfolio2} alt="" />
            <img src={Portfolio3} alt="" />
            <img src={Portfolio4} alt="" />
            <img src={Portfolio5} alt="" />
            <img src={Portfolio6} alt="" />
        </div>
        <button className='btn btn-secondary flex'>View More</button>
      </div>
    </div>
  )
}

export default Portfolio
