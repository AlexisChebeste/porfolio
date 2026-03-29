import { ExternalLink, Github, GraduationCap } from "lucide-react";
import ButtonLink from "./ButtonLink";
import { useScrollFade } from "../lib/useScrollFade";

interface CardProps {
    title: string;
    periodo: string;
    description: string;
    list: string[];
    link: {page: string, github: string};
    img: string;
    highlights: string[];
    role: string;
    onOpen: () => void; // 👈 nuevo
}


export default function CardProject({ title, periodo, description, list, link, img, highlights, onOpen }: CardProps) {
    const fadeRef = useScrollFade<HTMLDivElement>()
    
    return (
        <div ref={fadeRef} className="card card-project scroll-fade " onClick={onOpen}>
            <a href={link.page} target="_blank" rel="noopener noreferrer" className="project-link">
                <img src={img} alt={title} loading="lazy" className="project-image" 
                    width={600}
                    height={400}
                />
            </a>
            <div className="card-content">
                <header className="card-header">
                    <h3>{title}</h3>
                    <span className="card-periodo">{periodo}</span>
                </header>
                <section className="card-body">
                    <p>{description}</p>
                    <ul className="project-highlights">
                        {highlights.slice(0, 2).map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>

{/*                     <p className="project-role">
                        <strong>Rol:</strong> {role}
                    </p> */}
                </section>
            </div>
            <FooterCard 
                technologys={list}
                links={link}
            />
        </div>
    )
}

export function CardAcademic({ title, institution, periodo, description }: { title: string, institution: string, periodo: string, description: string, state: string }) {
    const fadeRef = useScrollFade<HTMLDivElement>()
    return (
        <div ref={fadeRef} className="card card-academic scroll-fade">
            <header className="card-header">
                <section className="card-section-header">
                    <div className="card-icon-title">
                        <div className="card-icon">
                            <GraduationCap size={28} />
                        </div>
                    
                        <h3>{title}</h3>
                    </div>

                    <div className="card-title">
                        <p className="card-state">{institution}</p>
                        
                        <span className="card-periodo">{periodo}</span>
                    </div>
                </section>
                
            </header>
            <section className="card-body">
                <p>{description}</p>
            </section>
        </div>
    )
}

export function FooterCard({technologys, links}: {technologys : string[], links: {page: string, github: string}}) {
    return(
        <footer>
            <ul className="container-chips">
                {technologys.slice(0, 3).map((item, index) => (
                    <li key={index} className="chip">{item}</li>
                ))}
            </ul>

            <div className="container-buttons">
                <ButtonLink href={links.github} icon={<Github size={16} />} className="links-icon" label="Visitar repositorio"/>
                <ButtonLink href={links.page} icon={<ExternalLink size={16}/>} className="links-icon" label="Visitar pagina web"/>

            </div>

        </footer>
    )
}