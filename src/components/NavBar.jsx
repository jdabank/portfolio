import React from "react"
import "../App.css"

function NavBar({switcher}) {
    
    return (
      <div className="nav">
        <p onClick={()=> switcher("about")}>About</p>
        <p onClick={()=> switcher("projects")}>Projects</p>
        <p onClick={()=> switcher("resume")}>Resume</p>
        <p onClick={()=> switcher("contact")}>Contact</p>
      </div>
    )
  }
  
  export default NavBar
  