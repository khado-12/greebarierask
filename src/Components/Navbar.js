
import './navbar.css'
function Navbar() {
  return (
    <>
   <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container d-flex disp">
    <a className="navbar-brand" href="#">
    <img width= "100px" src="/Images/logo.png" alt= "logo"/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5 d-flex px-5 disp ">
        <li className="nav-item mx-2 ">
          <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
        </li>
       
        <li className="nav-item dropdown mx-2">
          <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Expertise
          </a>
          <ul className="dropdown-menu bg-primary" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Web Developmment</a></li>
            <li><a className="dropdown-item" href="#">Andriod Development</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Search Engin Optimization</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown mx-2">
          <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Industries
          </a>
          <ul className="dropdown-menu bg-primary" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">IT</a></li>
            <li><a className="dropdown-item" href="#">Marketing</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Develoment</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown mx-2">
          <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Capital Structure
          </a>
          <ul className="dropdown-menu bg-primary" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Architecture</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown mx-2">
          <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          People
          </a>
          <ul className="dropdown-menu bg-primary" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">single</a></li>
            <li><a className="dropdown-item" href="#">Team</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown mx-2">
          <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Careers
          </a>
          <ul className="dropdown-menu bg-primary" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Careers Garding</a></li>
            <li><a className="dropdown-item" href="#">Decision Making</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown mx-2">
          <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          About Us
          </a>
          <ul className="dropdown-menu bg-primary" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">About</a></li>
            <li><a className="dropdown-item" href="#">Our Company</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown mx-2">
          <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Contact Us
          </a>
          <ul className="dropdown-menu bg-primary" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Contact</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown mx-3">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img className='flage' src="https://images.unsplash.com/photo-1494419470281-65c2b001a42b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dWslMjBmbGFnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"  />
          </a>
          <ul className="dropdown-menu bg-primary" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">pak</a></li>
            <li><a className="dropdown-item" href="#">Ind</a></li>
            <li><a className="dropdown-item" href="#">US</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>

      </ul>
      
    </div>
  </div>
</nav>

  {/* <nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <div className="container  d-flex" >
    <a className="navbar-brand"  href="#"> 
    <img width= "100px" src="/Images/logo.png" alt= "logo"/>
     </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end   mx-5">
        <li className="nav-item mx-2 ">
          <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
        </li>
        
        <li className="nav-item dropdown mx-2 ">
          <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown  mx-2 ">
          <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Expertise
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown  mx-2 ">
          <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Industries
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown  mx-2 ">
          <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Capital Structure
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown  mx-2 ">
          <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            People
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown  mx-2 ">
          <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Careers
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li><li className="nav-item dropdown  mx-2 ">
          <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About Us
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown  mx-2">
          <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Contact Us
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown  mx-2">
          <a className="nav-link dropdown-toggle text-white bg" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img className='flage' src="https://images.unsplash.com/photo-1494419470281-65c2b001a42b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dWslMjBmbGFnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"  />
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          </ul>
        </li>
      </ul>
      
    </div>
  </div>
</nav> */}
    </>
  )
}

export default Navbar
