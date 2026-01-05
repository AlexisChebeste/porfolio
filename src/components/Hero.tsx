import { ArrowDown, Check, Github, Linkedin, Mail } from "lucide-react";
import ButtonLink from "./ButtonLink";
import { useState } from "react";
import { useScrollFade } from "../lib/useScrollFade";

export default function Hero() {
    const fadeRef = useScrollFade<HTMLDivElement>()    
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText("alexischebebeste499@gmail.com");
        setCopied(true);

        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section ref={fadeRef}className="hero block">
            <div>
                <p className="subtitle">Desarrollador Frontend</p>
                <h1>Alexis Chebeste</h1>
                <p className="text-hero">Diseño y desarrollo interfaces intuitivas y aplicaciones web escalables, con foco en usabilidad, rendimiento y buenas prácticas de desarrollo frontend.</p>
                <div className="container-hero-buttons">
                    <button onClick={handleCopy} className="hero-action contact-button">
                        <span 
                            className={`icon ${copied ? "copied" : ""}`}
                        >
                            {copied ? (
                                <Check size={16} /> 
                            ) : (
                                <Mail size={16} />
                            )}
                        </span>
                        <span>{copied? "Mail copiado" : "Copiar mail" }</span>
                    </button>
                    <ButtonLink href="https://github.com/AlexisChebeste" text="GitHub" icon={<Github size={16}/>} className="hero-button" label="Ir hacia Github"/>
                    <ButtonLink href="https://www.linkedin.com/in/alexis-chebeste/" text="LinkedIn" icon={<Linkedin size={16}/>} className="hero-button" label="Ir hacia linkedin"/>
                </div>
            </div>

            <div>
                <img src="/profile.png" alt="Foto de Alexis Chebeste"  className="hero-image" width={250} height={400}/>
            </div>

            <a href="#projects" aria-label="Ir hacia sección de educación" className="arrow">
                <ArrowDown size={24}/>
            </a>
        </section>
    )
}