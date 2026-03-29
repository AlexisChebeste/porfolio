import { useState } from "react";
import { useScrollFade } from "../lib/useScrollFade";
import CardProject from "./Card";
import ProjectModal from "./ProjectModal";

const projectsData = [
    
    {
        title: "E-commerce de Ropa - LUMEN",
        periodo: "2026",
        description: "Plataforma de comercio electrónico de alta gama con catálogo dinámico y gestión de inventario. Implementé un flujo de compra completo, desde la selección de variantes (talles/colores) hasta la persistencia del carrito, priorizando la velocidad de carga y una estética minimalista.",
        list: ["Next.js", "TypeScript", "Supabase", "Zod"],
        link: {page: "https://tienda-lumen.vercel.app/", github: "https://github.com/AlexisChebeste/tienda-lumen"},
        img: "/project3.webp",
        highlights: [
            "CRUD completo de productos desde panel admin",
            "Filtros dinámicos sincronizados con URL (deep linking)",
            "Sistema de carrito con persistencia de estado",
            "Generación y gestión de órdenes de compra",
            
            "Arquitectura modular con separación de responsabilidades y servicio"
        ],
        role: "Fullstack Developer - desarrollo completo del sistema",
    },
    {
        title: "Sistema de Gestión de Viajes",
        periodo: "2025",
        description: "Aplicación web para la gestión integral de viajes de una empresa logística. Desarrollé una interfaz de administración avanzada para la creación de perfiles de conductores, vehículos y rutas, consumiendo una API REST robusta y manejando estados de carga complejos.",
        list: ["React", "TypeScript", "MongoDB","Tailwind CSS", "Express" ],
        link: {page: "https://gestion-de-viajes.vercel.app/", github: "https://github.com/DesApp-2025-C1-Grupo-1/gestion-de-viajes-frontend"},
        img: "/proyecto.webp",
        highlights: [
            "Modelado de entidades complejas (viajes, vehículos, choferes, empresas)",
            "Sistema de estados de viaje con validaciones de negocio",
            "Integración entre módulos independientes (viajes, tarifas, remitos)",
            "Consumo de API REST con manejo de estados asincrónicos",
            "Coordinación entre múltiples equipos para integración del sistema"
        ],
        role: "Team Lead & Frontend Developer - liderazgo del módulo principal e integración intergrupal",
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
        img: "/project1.webp",
        highlights: [
            "Optimización de imágenes para mejorar performance",
            "Diseño responsive centrado en UX",
            "Animaciones suaves para mejorar interacción",
        ],
        role: "Frontend Developer",
    },
];

export interface CardProjectProps {
    title: string;
    periodo: string;
    description: string;
    list: string[];
    link: {page: string, github: string};
    img: string;
    highlights: string[];
    role: string;
}

export default function Projects() {
    const fadeRef = useScrollFade<HTMLDivElement>()
    const [selectedProject, setSelectedProject] = useState<any>(null);

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
                        {...project}
                        onOpen={() => setSelectedProject(project)}
                    />
                ))}
            </div>
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>

    )
}