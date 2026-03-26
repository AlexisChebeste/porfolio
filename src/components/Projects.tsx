import { useScrollFade } from "../lib/useScrollFade";
import CardProject from "./Card";

const projectsData = [
    
    {
        title: "E-commerce de Ropa - LUMEN",
        periodo: "2026",
        description: "Plataforma de comercio electrónico de alta gama con catálogo dinámico y gestión de inventario. Implementé un flujo de compra completo, desde la selección de variantes (talles/colores) hasta la persistencia del carrito, priorizando la velocidad de carga y una estética minimalista.",
        list: ["Next.js", "TypeScript", "Supabase", "Zod"],
        link: {page: "https://tienda-lumen.vercel.app/", github: "https://github.com/AlexisChebeste/tienda-lumen"},

        img: "/project3.webp"
    },
    {
        title: "Sistema de Gestión de Viajes (Fullstack)",
        periodo: "2025",
        description: "Aplicación web para la gestión integral de viajes de una empresa logística. Desarrollé una interfaz de administración avanzada para la creación de perfiles de conductores, vehículos y rutas, consumiendo una API REST robusta y manejando estados de carga complejos.",
        list: ["React", "TypeScript", "Tailwind CSS", "Express", "MongoDB"],
        link: {page: "https://gestion-de-viajes.vercel.app/", github: "https://github.com/DesApp-2025-C1-Grupo-1/gestion-de-viajes-frontend"},
        img: "/proyecto.webp"
    },    
    /* {
        title: "Clon de Trello - Gestión de Tareas",
        periodo: "2024-2025",
        description: "Aplicación web que replica las funcionalidades básicas de Trello, permitiendo a los usuarios crear tableros, listas y tarjetas para organizar tareas.",
        list: ["React", "TypeScript", "DndKit", "Tailwind CSS", "Redux", "Node.js", "Express", "MongoDB"],
        link: {page: "https://trello-clone-ts-tau.vercel.app//", github: "https://github.com/AlexisChebeste/trello-clone-ts"}
    }, */
    {
        title: "Coffee Shop Landing Page",
        periodo: "2024",
        description: "Landing page premium para una cafetería de especialidad. Enfocada en el Storytelling visual y el rendimiento, utilizando técnicas de optimización de imágenes y animaciones fluidas para retener al usuario y mejorar la tasa de conversión.",
        list: ["React", "TypeScript", "Tailwind CSS", "Responsive Design"],
        link: {page: "https://coffee-shop-iota-jade.vercel.app/", github: "https://github.com/AlexisChebeste/coffee-shop"},
        img: "/project1.webp"
    },
];

export default function Projects() {
    const fadeRef = useScrollFade<HTMLDivElement>()

    return (
        <section  id="projects" className="projects ">
            <div ref={fadeRef} className="scroll-fade">
                
                <p className="subtitle">Proyectos</p>
                <h2>Mis trabajos recientes</h2>
            </div>
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