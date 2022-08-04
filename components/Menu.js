import React from 'react'

function Menu() {
  return (
    <nav className='navbar-container'>
      {/* <img src="" alt="" className="logo" /> */}
      <h2 className="logo">Polly Miners</h2>
      <ul className="nav-links">
        <li className="link"><a href="#">Home</a></li>
        <li className="link"><a href="#">About Us</a></li>
        <li className="link"><a href="#">Mining Service</a></li>
        <li className="link"><a href="#">Contact Us</a></li>
      </ul>


    </nav>
  )
}

export default Menu