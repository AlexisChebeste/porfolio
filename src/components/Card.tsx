import { ExternalLink, Github, GraduationCap } from "lucide-react";
import ButtonLink from "./ButtonLink";

interface CardProps {
    title: string;
    periodo: string;
    description: string;
    list: string[];
    links: {page: string, github: string};
    img: string;
}

export default function CardProject({ title, periodo, description, list, links, img }: CardProps) {
    return (
        <div className="card">
            <a href={links.page} target="_blank" rel="noopener noreferrer" className="project-link">
                <img src={img} alt={title} className="project-image"/>
            </a>
            <header className="card-header">
                <h3>{title}</h3>
                <span className="card-periodo">{periodo}</span>
            </header>
            <section className="card-body">
                <p>{description}</p>
            </section>
            <FooterCard 
                technologys={list}
                links={links}
            />
        </div>
    )
}

export function CardAcademic({ title, institution, periodo, description }: { title: string, institution: string, periodo: string, description: string, state: string }) {
    return (
        <div className="card card-academic">
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
                {technologys.map((item, index) => (
                    <li key={index} className="chip">{item}</li>
                ))}
            </ul>

            <div className="container-buttons">
                <ButtonLink href={links.github} icon={<Github size={16} />} className="links-icon"/>
                <ButtonLink href={links.page} icon={<ExternalLink size={16}/>} className="links-icon"/>
            </div>
        </footer>
    )
}