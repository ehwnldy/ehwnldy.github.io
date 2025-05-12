"use client"

import { useState, useEffect } from "react"
import "../styles/Navbar.css"

const Navbar = ({ scrollToAbout, scrollToSkills, scrollToProjects, scrollToContact }) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <h2>포트폴리오</h2>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <button onClick={scrollToAbout}>소개</button>
          </li>
          <li className="navbar-item">
            <button onClick={scrollToSkills}>기술</button>
          </li>
          <li className="navbar-item">
            <button onClick={scrollToProjects}>프로젝트</button>
          </li>
          <li className="navbar-item">
            <button onClick={scrollToContact}>연락처</button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
