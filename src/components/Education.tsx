import { CardAcademic } from "./Card"

export default function Education() {
    return (
        <section id="education" className="education block">
            <p className="subtitle">Educación</p>
            <h2>Formación académica</h2>
            <div className="cards container-education">
                <CardAcademic 
                    title="Licenciatura en Informática"
                    institution="Universidad Nacional de Hurlingham"
                    state="Cursando actualmente"
                    periodo="En curso"
                    description="Actualmente curso la Licenciatura en Informática en la UNAHUR, donde adquirí bases sólidas en programación, estructuras de datos y algoritmos."
                />
                <CardAcademic 
                    title="Tecnicatura Universitaria en Programación"
                    institution="Universidad Nacional de Hurlingham"
                    state="Título obtenido"
                    periodo="2025"
                    description="Completé la Tecnicatura en Programación en la Universidad Nacional de Hurlingham, donde desarrollé habilidades prácticas en diversos lenguajes de programación, bases de datos y metodologías de desarrollo ágil."
                />
            </div>

        </section>
    )
}