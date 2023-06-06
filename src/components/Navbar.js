import React from 'react'
import {Link} from 'react-router-dom'

export default function navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
  <div className="container-fluid">
    <Link className="navbar-brand fs-2" to="#">Star Foods</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active fs-3" aria-current="page" to="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fs-5" to="/login">Login</Link>
        </li>
        <li className="nav-item">
        <form className="d-flex">
            <input className="form-control me-4" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-light bg-success" type="submit">Search</button>
        </form>
        </li>
          
       
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
