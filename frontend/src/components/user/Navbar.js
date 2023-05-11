import React from 'react'

const Navbar = () => {
  return (
    <div>
      <>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          {/* Container wrapper */}
          <div className="container">
            {/* Navbar brand */}
            <a className="navbar-brand me-2" href="https://mdbgo.com/">
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
                  <a className="nav-link" href="/user/AddBlog">
                    AddBlog
            </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/user/ManageBlog">
                    ManageBlog
            </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/user/Managevideos">
                    Managevideos
            </a>
                </li>
              </ul>
              {/* Left links */}
              
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