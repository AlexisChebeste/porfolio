import { CodeXml } from "lucide-react";
import { useScrollFade } from "../lib/useScrollFade";
import Chip from "./Chip";

interface ListTechProps {
    category: string
    techs: string[]
}

export default function ListTech({category, techs}: ListTechProps) {
    const fadeRef = useScrollFade<HTMLDivElement>()
    return(
        <div ref={fadeRef} className="technology-section scroll-fade">
            <div className="subtitle-tec">
                <CodeXml size={28}  className="tec-icon"/>
                <h3 className="technology-category">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
            </div>
            <div className="technology-tags">
                {techs.map(tech => (
                    <Chip key={tech} tag={tech} />
                ))}
            </div>
        </div>
    )
}