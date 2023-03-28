import React from 'react';
import './banner.css';
import Crousal from './Crousal';
import Footer from './Footer';
import Navbar from './Navbar';
const Banner = () => {
  return (
    <div className='fluid-container'>
      <div className='banner_img'>
        <Navbar />
        <div className=" d-flex flex-wrap flex-column my-5 content">
          <h1 className='heading'>A Strong <br></br>Strategy For Your Business</h1>
          <p className="para"> lorem is not just a normal snippet—it’s actually a generator. Every time you expand it, <br /> it will generate a 30-words dummy text, splitted into a few sentences.  </p>

        </div>
        <img className='bgshadow' src="/Images/bannershadow.png" alt="images" />
        <img className='elipse' src="/Images/curve.png" alt="curve" />
        <img className='trans_curve' src="/Images/transparentCurve.png" alt="transparentimg" />
        <div className='curve'>
          <div className="lc">
            <img className='lc' src="/Images/lc.png" alt="l-curve" />
          </div>
          <div className="rc">
            <img className='rc' src="/Images/rc.png" alt="r-curve" />
          </div>
        </div>
      </div>
      <div className='section1 container d-flex '>
        <div className='contact d-flex flex-column'>
          <h1 className="about">About Us</h1>
          <p className="pg1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis no
            cupidatat non proident, sunt in culpa qui officia deserunt.
            <br />
            <br />
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor repaire
            mollit anim id est laborum.Duis aute irure dolor repaire
            mollit
          </p>
        </div>

        <div className='images'>
          <div className="c1  ">
            <img width="130px" classname=" c" src="/Images/trns1.png" alt="img" />
          </div>
          <img width="300px" classname=" cimg w-10" src="/Images/img.png" alt="img" />

          <div className="c2  ">
            <img width="130px" classname=" cimg w-10" src="/Images/trns2.png" alt="img" />

          </div>

        </div>
      </div>
      <div className='section2 d-flex my-5 py-5  justify-content-center '>
        <div className='shape d-flex '>
          <div className='s1'>
            <svg width="110" height="250" viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="124.986" y="-3" width="181" height="181" rx="8" transform="rotate(45 124.986 -3)" fill="url(#paint0_linear_28_260)" />
              <defs>
                <linearGradient id="paint0_linear_28_260" x1="124.986" y1="-3" x2="330.948" y2="142.719" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#0EA1EF" />
                  <stop offset="1" stop-color="#064BCA" />
                </linearGradient>
              </defs>
            </svg>

          </div>
          <div className='s2'>
            <svg width="110" height="250" viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="124.986" y="-3" width="181" height="181" rx="8" transform="rotate(45 124.986 -3)" fill="url(#paint0_linear_28_260)" />
              <defs>
                <linearGradient id="paint0_linear_28_260" x1="124.986" y1="-3" x2="330.948" y2="142.719" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#0EA1EF" />
                  <stop offset="1" stop-color="#064BCA" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className='s3'>
            <svg width="80" height="185" viewBox="0 0 185 185" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="92.4795" y="-2.29289" width="134.028" height="134.028" rx="7.5" transform="rotate(45 92.4795 -2.29289)" fill="#CFEAFB" stroke="black" />
            </svg>

          </div>
          <div className='s4'>
            <svg width="80" height="185" viewBox="0 0 185 185" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="92.4795" y="-2.29289" width="134.028" height="134.028" rx="7.5" transform="rotate(45 92.4795 -2.29289)" fill="#CFEAFB" stroke="black" />
            </svg>
          </div>
          <div className='s5'>
            <svg width="40" height="185" viewBox="0 0 185 185" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="92.4795" y="-2.29289" width="134.028" height="134.028" rx="7.5" transform="rotate(45 92.4795 -2.29289)" fill="#CFEAFB" stroke="black" />
            </svg>
          </div>
          <div className='s6'>
            <svg width="40" height="250" viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="124.986" y="-3" width="181" height="181" rx="8" transform="rotate(45 124.986 -3)" fill="url(#paint0_linear_28_260)" />
              <defs>
                <linearGradient id="paint0_linear_28_260" x1="124.986" y1="-3" x2="330.948" y2="142.719" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#0EA1EF" />
                  <stop offset="1" stop-color="#064BCA" />
                </linearGradient>
              </defs>
            </svg>

          </div>
          <div className='s7'>
            <svg width="40" height="250" viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="124.986" y="-3" width="181" height="181" rx="8" transform="rotate(45 124.986 -3)" fill="url(#paint0_linear_28_260)" />
              <defs>
                <linearGradient id="paint0_linear_28_260" x1="124.986" y1="-3" x2="330.948" y2="142.719" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#0EA1EF" />
                  <stop offset="1" stop-color="#064BCA" />
                </linearGradient>
              </defs>
            </svg>

          </div>
        </div>
        <div className='expert'>
          <h1 className='ex'>Expertise</h1>
          <p className='pg2'>Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    incididunt et dolore magna aliqua.  </p>

        </div>
      </div>
      <div className='slider'>
        <Crousal />

      </div>
    
      <div className='section3 d-flex justify-content-around '>
        <div className='primary d-flex flex-column'>
        <h2 classname="chead">Capital Structure</h2>
          <p className="pg3">
            Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et 
            magna aliqua.Lorem is ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusm.</p>
        </div>
        <div className='secondary'>
        <div className="skew1 d-flex ">
            <div className="m1 mx-2">
              <img width="300px" className='' src="/Images/m1.png" alt="img" />
            </div>
            <div className="m2">
              <img width="200px" className='' src="/Images/m2.png" alt="img" />
            </div>

          </div>
          <div className="skew2 my-2 d-flex">
            <div className="m3 mx-2">
              <img width="200px" className='' src="/Images/m3.png" alt="img" />
            </div>
            <div className="m4">
              <img width="300px" className='' src="/Images/m4.png" alt="img" />
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

export default Banner;
