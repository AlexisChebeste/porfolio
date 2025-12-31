import { useScrollFade } from "../lib/useScrollFade";
import Chip from "./Chip";

const technologies = {
    frontend: ['HTML', 'CSS', 'JavaScript','React', 'TypeScript', "Tailwind CSS"],
    backend: ['Node.js', 'MongoDB', 'SQLite', 'Express.js'],
    herramientas: ['Git', 'Docker', 'Astro']
}

export default function Technology() {
  const fadeRef = useScrollFade<HTMLDivElement>()
  return (
    <div  ref={fadeRef} id="skills" className="skills block">
        <p className="subtitle">Habilidades técnicas</p>
        <h2>Tecnologías</h2>
        <div className="technology-sections">
            {Object.entries(technologies).map(([category, techs]) => (
                <div key={category} className="technology-section">
                    <h3 className="technology-category">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                    <div className="technology-tags">
                        {techs.map(tech => (
                            <Chip key={tech} tag={tech} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}

