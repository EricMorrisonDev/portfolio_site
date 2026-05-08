import { Header } from "./components/Header"
import { Nav } from "./components/Nav"
import { ProjectList } from "./components/ProjectList"
import { Skills } from "./components/Skills"
import { ButtonBar } from "./components/ButtonBar"
import { Testimonials } from "./components/Testimonials"
import { ContactInfo } from "./components/ContactInfo"
import { AboutMe } from "./components/AboutMe"
import { Footer } from "./components/Footer"
import { useState } from "react"
import { WebsiteList } from "./components/WebsiteList"

function App() {

  const [navHeight, setNavHeight] = useState(0)
  
  return (
    <>
      <Nav
        navHeight={navHeight}
        setNavHeight={setNavHeight}
        />
      <div className="mt-24 md:mt-38">
        <Header />
        <ButtonBar 
          navHeight={navHeight}
        />
        <div id="websites">
          <WebsiteList />
        </div>
        <div id="projects">
          <ProjectList />
        </div>
        <Testimonials />
        <div id="skills">
          <Skills />
        </div>
        <div id="about">
          <AboutMe />
        </div>
        <div id="contact">
          <ContactInfo />
        </div>
        <Footer />
      </div>
      
    </>
  )
}

export default App
