import { ExternalLink, Github, X } from "lucide-react";
import type { CardProjectProps } from "./Projects";
import ButtonLink from "./ButtonLink";

interface ProjectModalProps {
    project: CardProjectProps;
    onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                
                {/* HEADER */}
                <div className="modal-header">
                    <h2>{project.title}</h2>
                    <button onClick={onClose}>
                        <X size={20} />
                    </button>
                </div>

                {/* IMAGE */}
                <img src={project.img} alt={project.title} className="modal-image" />

                {/* DESCRIPTION */}
{/*                 <p className="modal-description">{project.description}</p> */}

                {/* HIGHLIGHTS */}
                <ul className="modal-highlights">
                    {project.highlights.map((item: string, i: number) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>

                {/* ROLE */}
                <p className="modal-role">
                    <strong>Rol:</strong> {project.role}
                </p>

                <footer className="modal-footer">
                    <ul className="container-chips">
                        {project.list.map((item, index) => (
                            <li key={index} className="chip">{item}</li>
                        ))}
                    </ul>

                    <div className="container-buttons">
                        <ButtonLink href={project.link.github} icon={<Github size={16} />} className="links-icon" label="Visitar repositorio"/>
                        <ButtonLink href={project.link.page} icon={<ExternalLink size={16}/>} className="links-icon" label="Visitar pagina web"/>
                    </div>
                </footer>

            </div>
        </div>
    );
}