import { Download, Menu, X } from "lucide-react";
import ButtonLink from "./ButtonLink";
import { useState } from "react";
import "../styles/navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="nav-container">
        <a href="#" className="logo">
          AC
        </a>
        <div className="list-nav">
          <ul >
            <li><a href="#about-me">Sobre mí</a></li>
            <li><a href="#projects">Proyectos</a></li>
            <li><a href="#skills">Habilidades</a></li>
            <li><a href="#education">Educación</a></li>
          </ul>
          <ButtonLink href="mailto:alexischebeste@gmail.com" text="CV" className="contact-button" icon={<Download size={16}/>}/>
        
        </div>
        <button className="button-menu" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X size={24} />
          ) : ( 
          <Menu size={24}  />
          )}
        </button>

      </div>
      {isOpen && (
        <div className="mobile-menu">
          <ul className="list-nav-mobile">
            <li><a href="#about-me" onClick={() => setIsOpen(false)}>Sobre mí</a></li>
            <li><a href="#projects" onClick={() => setIsOpen(false)}>Proyectos</a></li>
            <li><a href="#skills" onClick={() => setIsOpen(false)}>Habilidades</a></li>
            <li><a href="#education" onClick={() => setIsOpen(false)}>Educación</a></li>
          </ul>
          <ButtonLink href="mailto:alexischebeste@gmail.com" text="Descargar CV" className="contact-button" icon={<Download size={16}/>}/>
        </div>
      )}
    </nav>
  )
}