import React from 'react'

const Navbar = () => {
  return (
    <div><>
  {/* Navbar */}
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    {/* Container wrapper */}
    <div className="container">
      {/* Navbar brand */}
      <a className="navbar-brand me-2 p-0" href="">
        <img
          src="/log.png"
          height={30}
          alt="magic blog"
          loading="lazy"
          style={{ marginTop: "-1px" }}
        />
      </a>
      {/* Toggle button */}
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarButtonsExample"
        aria-controls="navbarButtonsExample"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars" />
      </button>
      {/* Collapsible wrapper */}
      <div className="collapse navbar-collapse" id="navbarButtonsExample">
        {/* Left links */}
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              BrowseBlog
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Viewblog
            </a>
          </li>
        </ul>
        {/* Left links */}
        <div className="d-flex align-items-center">
          <button type="button" className="btn btn-link px-3 me-2">
            <a href="/main/Login">

            Login
            </a>
          </button>
            <a href="/main/Signup">
          <button type="button" className="btn btn-primary me-3">

            Sign up for free
          </button>
            </a>
         
        </div>
      </div>
      {/* Collapsible wrapper */}
    </div>
    {/* Container wrapper */}
  </nav>
  {/* Navbar */}
</>
</div>
  )
}

export default Navbar