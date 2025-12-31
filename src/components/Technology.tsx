import { useScrollFade } from "../lib/useScrollFade";
import ListTech from "./ListTech";

const technologies = {
    frontend: ['HTML', 'CSS', 'JavaScript','React', 'TypeScript', "Tailwind CSS"],
    backend: ['Node.js', 'MongoDB', 'SQLite', 'Express.js'],
    herramientas: ['Git', 'Docker', 'Astro']
}

export default function Technology() {
  const fadeRef = useScrollFade<HTMLDivElement>()
  return (
    <div   id="skills" className="skills block">
        <div ref={fadeRef} className="scroll-fade">
            <p className="subtitle">Habilidades técnicas</p>
            <h2>Tecnologías</h2>
        </div>
        <div className="technology-sections">
            {Object.entries(technologies).map(([category, techs]) => (
                <ListTech category={category}
                    techs={techs}
                />
            ))}
        </div>
    </div>
  );
}

