import './carousel.css'                     
const Crousal = () => {
  
  return (
   <div classname="container">
   <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators my-0">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner  ">
    <div className="carousel-item active d-flex">
    <img src="/Images/im1.png" alt="im1" className="im1"  />
    <img src="/Images/im2.png" alt="im2" className="im2"  />
    <img src="/Images/im3.png" alt="im3" className="im3" />
    <div className="carousel-caption d-none d-md-block slidem1">
        <h5 className='hd'>innovation</h5>
      </div>
      <div className="carousel-caption d-none d-md-block slidem2">
        <h5 className='hd1'>Data & Analysis</h5>
        <p  className="pragph"> lorem is not Every time you expand it will generate a 30-words <br />dummy text.  </p>
      </div>
      <div className="carousel-caption d-none d-md-block slidem3">
        <h5 className='hd2'>Risk Management</h5>
      </div>
    </div>
    <div className="carousel-item slide d-flex">
    <img src="/Images/im1.png" alt="im1" className="im1"  />
    <img src="/Images/im2.png" alt="im2" className="im2"  />
    <img src="/Images/im3.png" alt="im3" className="im3" />
    <div className="carousel-caption d-none d-md-block slidem1">
        <h5  className='hd'>web development</h5>
      </div>
      <div className="carousel-caption d-none d-md-block slidem2">
        <h5 className='hd1'>Andriod Development</h5>
        <p className="pragph"> lorem is not Every time you expand it will generate a 30-words<br /> dummy text.  </p>
      </div>
      <div className="carousel-caption d-none d-md-block slidem3">
        <h5 className='hd2'>SEO</h5>
      </div>
    </div>
    <div className="carousel-item d-flex">
    <img src="/Images/im1.png" alt="im1" className="im1"  />
    <img src="/Images/im2.png" alt="im2" className="im2"  />
    <img src="/Images/im3.png" alt="im3" className="im3" />
    <div className="carousel-caption d-none d-md-block slidem1">
        <h5 className='hd'>Analytics</h5>
      </div>
      <div className="carousel-caption d-none d-md-block slidem2">
        <h5 className='hd1'>Cyber Security</h5>
        <p  className="pragph"> lorem is not Every time you expand it will generate a 30-words<br /> dummy text.  </p>
      </div>
      <div className="carousel-caption d-none d-md-block slidem3">
        <h5 className='hd2'>Data Science</h5>
      </div>
    </div>
  </div>

  <img className='bgimg' src='/Images/reactb.png'/>
</div>
  </div>   
  );
}

export default Crousal;
