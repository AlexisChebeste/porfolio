import { useScrollFade } from "../lib/useScrollFade";

export default function AboutMe() {
    const fadeRef = useScrollFade<HTMLDivElement>()

    return (
        <section ref={fadeRef}className="about-me block" >
            <p className="subtitle">Educación</p>
            <h2>Sobre mí</h2>
            <div className="about-section">
                <article>
                    <p>Tengo 22 años y soy desarrollador con experiencia en frontend y backend. Actualmente estoy cursando la Licenciatura en Informática y en 2025 obtuve mi título de Técnico Universitario en Programación.
                    </p>
                    <p>He trabajado en proyectos variados: desde landing pages hasta sistemas completos de gestión para logística de viajes desarrollados en equipo para la universidad. Me gusta resolver problemas reales con código y crear interfaces que realmente funcionen.</p>
                    <p>Estoy enfocado en seguir aprendiendo y construyendo proyectos que me permitan crecer como desarrollador. Mi objetivo es ingresar a la industria tech y contribuir en equipos que construyan productos de calidad.</p>
                </article>
            
                <div>
                    <img src="/profile2.jpg" alt="Foto de perfil" className="about-image" loading="lazy" />
                </div>
            </div>
        </section>
    );
}