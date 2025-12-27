import { Github, LucideLinkedin } from "lucide-react";
import ButtonLink from "./ButtonLink";

export default function Footer(){
    return (
        <footer>
            <div className="footer-profile">
                <h4>Alexis Chebeste</h4>
                <p>Desarrollador Frontend · Buenos Aires, Argentina</p>
                <div className="container-buttons">
                    <ButtonLink href="https://github.com/alexischebeste" icon={<Github size={16} />} />
                    <ButtonLink href="https://alexischebeste.com" icon={<LucideLinkedin size={16} />} />
                </div>
            </div>
            <div className="divider-footer">
                <p className="footer-text">© 2025 Alexis Chebeste. Todos los derechos reservados.</p>
            </div>
        </footer> 
    )
}