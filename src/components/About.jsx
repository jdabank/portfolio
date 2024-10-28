import React from "react"
import "../App.css"
import me from "../../public/me.png"

function About() {
  
    return (
      <div className="about">
        <div>
        <p className="description">I’m Jordan Bank, a software developer from New York City. I currently teach software engineering at General Assembly in the Flatiron District of Manhattan. I'm also a graphic designer and photographer.</p>
        <p className="description">I'm passionate about using my skillset to educate and solve complex problems.</p>
        <p className="description">In my spare time I like cooking, playing video games, reading, and activities such as hiking, ice skating, and tennis. I also believe in the value of just taking a day to do absolutely nothing every once in a while. I'm a fan of the New York Knicks, New York Giants, and New York Mets and I have spent a lot of my life watching those teams lose.</p>
        </div>
        <img src={me}/>
      </div>
    )
  }
  
  export default About
  