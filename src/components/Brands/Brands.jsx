import './Brands.css'
import Brand1 from '../../assets/brand1.png'
import Brand2 from '../../assets/brand2.png'
import Brand3 from '../../assets/brand3.png'

const Brands = () => {
  return (
    <div className='brands-con my-4'>
        <div className="container flex brands-content py-2">
            <div>
                <h3>Our Trusted Clients</h3>
                <p>Proin eget tortor risus cras ultricies ligula sed portavamus suscipit tortor</p>
            </div>

            <img src={Brand3} alt="" />
            <img src={Brand1} alt="" />
            <img src={Brand2} alt="" />
        </div>
    </div>
  )
}

export default Brands
