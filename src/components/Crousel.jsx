import './Crousel.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';



const Crousel = () => {
   


  

  return (
    <>

        {/* crousel for mobile */}
<div className='slider'>
        <Slider
        infinite={true}
        arrows={false}
        autoplay={true}
        autoplaySpeed={2000}
        >
       
           {/* first comp */}
           <div>
            <div className='first-one'>
                <img className='img-one' src='/nasa-fitness-tracking-mobile-app.png'/>
                <img className='img-two' src='/measure-total-body-weight-through-fitness-app.png'/>
            </div>
            <div className='first-two'>
                <h1>ABC 2</h1>
                <p>This is sample text for ABC 2</p>
                <span>CASE STUDY - <button className='comming-soon'>Comming soon</button></span>
            </div>
            </div>
            {/* second comp */}
            <div>
            <div className='second-one'>
                <img className='img-three' src='/pizza_box.png'/>
                <img className='img-four' src='/domi-img1.png'/>
                <img className='img-five' src='/ux-strategy-for-mobile-app-devlopment.png'/>
                <img className='img-six' src='/on-demand-app-development-company.png'/>
                <img className='img-seven' src='/dominos-bread.png'/>
                <img className='img-eight' src='/dominos-masala.png'/>
                <img className='img-nine' src='/dominos-bread1.png'/>
            </div>
            <div className='second-two'>
                <h1>ABC 3</h1>
                <p>This is sample text for ABC 3</p>
                <span>View Case Study -</span>
            </div>
            </div>
            {/* third comp */}
            <div>
            <div className='third-one'>
                <span>
                <img className='img-ten' src='/karavan-social-networking-app-screen.png'/>
                <img className='img-eleven' src='/karavan_2.png'/>
                </span>
                <span>
                <img className='img-twelve' src='/social-networking-app-case-study.png'/>
                <img className='img-thirteen' src='/karavan-social-networking-app-screen-2.png'/>
                </span>
                <img className='img-forteen' src='/developers-for-social-media-app.png'/>
            </div>
            <div className='third-two'>
                <h1>ABC 4</h1>
                <p>This is sample text for ABC 4</p>
                <span>View Case Study -</span>
            </div>
            </div>
            {/* forth comp */}
            <div>
            <div className='forth-one'>
            <img className='img-fifteen' src='/erp-app-development-service.png'/>
            </div>
            <div className='forth-two'>
                <h1>ABC 4</h1>
                <p>This is sample text for ABC 4</p>
                <span>View Case Study -</span>
            </div>
            </div>
            {/* fifth comp */}
            <div>
            <div className='fifth-one'>
                <img className='img-sixteen' src='/melltoo-img2.png'/>
                <img className='img-seventeen' src='/melltoo-img1.png'/>
            </div>
            <img className='entrepreneur' src='/mobile-app-of-the-year-by-entrepreneur.png'/>
            <div className='fifth-two'>
                <h1>XYZ 123</h1>
                <p>This is sample text for XYZ 123.</p>
                <span>CASE STUDY - <button className='fifth-button'>Comming Soon</button></span>
            </div>
            </div>
            {/* sixth comp */}
            <div>
            <div className='sixth-one'>
                <img className='img-eightteen' src='/nexgtv-entertainment-mobile-app-development.png'/>
                <img className='img-nineteen' src='/nexgtv-mobile-app-ui-design.png'/>
            </div>
            <img className='awards' src='/world-communication-awards-for-best-digital-experience.png'/>
            <div className='sixth-two'>
                <h1>ABC 123</h1>
                <p>This is sample text for ABC 123</p>
                <span>View Case study -</span>
            </div>
            </div>
            {/* seventh comp */}
            <div>
            <div className='seventh-one'>
                <img className='img-twenty' src='/veme-blockchain-app-developed.png'/>
                <img className='img-twentyone' src='/veme-app-ui-design.png'/>
            </div>
            <div className='seventh-two'>
                <h1>ABC 1</h1>
                <p>This is sample text for ABC 1</p>
                <span>CASE STUDY - <button className='seventh-button'>Comming Soon</button></span>
            </div>
            </div>

        

        </Slider>
        </div>


    </>
  )
}

export default Crousel