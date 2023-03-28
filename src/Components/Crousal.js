import './carousel.css'  
// import Slider from "react-slick";    
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
 
                     
const Crousal = () => {
  
  return (
   <div classname="container">
   <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner mdqr1 ">
    <div class="carousel-item active d-flex">
    <img src="/Images/im1.png" alt="im1" className="im1"  />
    <img src="/Images/im2.png" alt="im2" className="im2"  />
    <img src="/Images/im3.png" alt="im3" className="im3" />
    <div class="carousel-caption d-none d-md-block slidem1">
        <h5>innovation</h5>
      </div>
      <div class="carousel-caption d-none d-md-block slidem2">
        <h5>Data & Analysis</h5>
        <p  className="pragph"> lorem is not Every time you expand it will generate a 30-words <br />dummy text.  </p>
      </div>
      <div class="carousel-caption d-none d-md-block slidem3">
        <h5>Risk Management</h5>
      </div>
    </div>
    <div class="carousel-item d-flex">
    <img src="/Images/im1.png" alt="im1" className="im1"  />
    <img src="/Images/im2.png" alt="im2" className="im2"  />
    <img src="/Images/im3.png" alt="im3" className="im3" />
    <div class="carousel-caption d-none d-md-block slidem1">
        <h5>innovation</h5>
      </div>
      <div class="carousel-caption d-none d-md-block slidem2">
        <h5>Data & Analysis</h5>
        <p className="pragph"> lorem is not Every time you expand it will generate a 30-words<br /> dummy text.  </p>
      </div>
      <div class="carousel-caption d-none d-md-block slidem3">
        <h5>Risk Management</h5>
      </div>
    </div>
    <div class="carousel-item d-flex">
    <img src="/Images/im1.png" alt="im1" className="im1"  />
    <img src="/Images/im2.png" alt="im2" className="im2"  />
    <img src="/Images/im3.png" alt="im3" className="im3" />
    <div class="carousel-caption d-none d-md-block slidem1">
        <h5>innovation</h5>
      </div>
      <div class="carousel-caption d-none d-md-block slidem2">
        <h5>Data & Analysis</h5>
        <p  className="pragph"> lorem is not Every time you expand it will generate a 30-words<br /> dummy text.  </p>
      </div>
      <div class="carousel-caption d-none d-md-block slidem3">
        <h5>Risk Management</h5>
      </div>
    </div>
  </div>
  {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button> */}
  <img className='bgimg' src='/Images/reactb.png'/>
</div>


   {/* <div className="fluid-container">
   <div className='innovation'>
     <h1>innovation</h1>
     </div>
     <div >
      <h1 className="datadesc">Data & Analysis</h1>
      <p className='prg'> lorem is not enerator. Every time you expand it, <br /> splitted into a few sentences.  </p>
     </div>
     <div className="risk">
     <h1>Risk Management </h1>
     </div>
 <Slider className="" {...settings}>
      
     
  
      <div style={{width:"100%"}}>
      <img src="/Images/im1.png" alt="im1" style={{width:"500px", zIndex:"10",position:"relative",top:"50px",left:"30px"}} />
      </div>
  
      <div  style={{width:"100%" }}>
      <img src="/Images/im2.png" alt="im2" style={{width:"600px",position:"relative",right:"50px"}} />
      </div>
      <div style={{width:"100%"}}>
      <img src="/Images/im3.png" alt="im3" style={{width:"500px",zIndex:"10px" ,position:"relative",top:"50px",right:"20px"}} />
      </div>

      <div style={{width:"100%"}}>
      <img src="/Images/im1.png" alt="im1" style={{width:"500px", zIndex:"10",position:"relative",top:"50px",left:"30px"}} />
      </div>
  
      <div  style={{width:"100%" }}>
      <img src="/Images/im2.png" alt="im2" style={{width:"600px",position:"relative",right:"50px"}} />
      </div>
      <div style={{width:"100%"}}>
      <img src="/Images/im3.png" alt="im3" style={{width:"500px",zIndex:"10px" ,position:"relative",top:"50px",right:"20px"}} />
      </div>
      
    </Slider>
     
  </div>   */}
  </div>   
  );
}

export default Crousal;
