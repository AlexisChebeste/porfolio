import { useScrollFade } from "../lib/useScrollFade";
import CardProject from "./Card";

const projectsData = [
    {
        title: "Sistema de Gestión de Viajes",
        periodo: "2025",
        description: "Aplicación web para la gestión integral de viajes de una empresa logística. Permite planificar rutas, administrar viajes, realizar el seguimiento de vehículos y gestionar choferes mediante una interfaz clara y eficiente, optimizada para el uso diario.",
        list: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
        link: {page: "https://gestion-de-viajes.vercel.app/", github: "https://github.com/DesApp-2025-C1-Grupo-1/gestion-de-viajes-frontend"},
        img: "/proyecto.png"
    },    
    /* {
        title: "Clon de Trello - Gestión de Tareas",
        periodo: "2024-2025",
        description: "Aplicación web que replica las funcionalidades básicas de Trello, permitiendo a los usuarios crear tableros, listas y tarjetas para organizar tareas.",
        list: ["React", "TypeScript", "DndKit", "Tailwind CSS", "Redux", "Node.js", "Express", "MongoDB"],
        link: {page: "https://trello-clone-ts-tau.vercel.app//", github: "https://github.com/AlexisChebeste/trello-clone-ts"}
    }, */
    {
        title: "Landing Page - Café",
        periodo: "2024",
        description: "Landing page para una cafetería, con diseño moderno y totalmente responsive, enfocada en presentar la marca, el ambiente del local y mejorar la experiencia del usuario.",
        list: ["React", "TypeScript", "Tailwind CSS"],
        link: {page: "https://coffee-shop-iota-jade.vercel.app/", github: "https://github.com/AlexisChebeste/coffee-shop"},
        img: "/project1.png"
    },
];

export default function Projects() {
    const fadeRef = useScrollFade();

    return (
        <section ref={fadeRef} id="projects" className="projects block">
            <p className="subtitle">Proyectos</p>
            <h2>Mis trabajos recientes</h2>
            <div className="cards cards-project">
                {projectsData.map((project, index) => (
                    <CardProject
                        key={index}
                        title={project.title}
                        periodo={project.periodo}
                        description={project.description}
                        list={project.list}
                        links={project.link}
                        img={project.img}
                    />
                ))}
            </div>
        </section>
    )
}