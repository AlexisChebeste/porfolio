import { useScrollFade } from "../lib/useScrollFade";

export default function AboutMe() {
    const fadeRef = useScrollFade<HTMLDivElement>()

    return (
        <section id="about-me" className="about-me " >
            <div ref={fadeRef} className="scroll-fade">
                <p className="subtitle">Educación</p>
                <h2>Sobre mí</h2>
            </div>
            <ArticleAboutMe />
        </section>
    );
}

export function ArticleAboutMe() {
    const fadeRef = useScrollFade<HTMLDivElement>()

    return(
        <div ref={fadeRef} className="about-section scroll-fade">
            <article>
                <p>
                    Soy desarrollador frontend con experiencia en proyectos académicos y personales,
                    desde landing pages hasta sistemas de gestión desarrollados en equipo.
                </p>
                <p>
                    Me motiva resolver problemas reales con código y crear interfaces claras,
                    intuitivas y pensadas para el usuario.
                </p>
                <p>Estoy enfocado en seguir aprendiendo y construyendo proyectos que me permitan crecer como desarrollador y aportar valor en equipos de trabajo. </p>
            </article>
        
            <div>
                <img src="/profile2.jpg" alt="Foto de perfil" className="about-image" loading="lazy" 
                    width={300}
                    height={300}
                />
            </div>
        </div>
    )
}