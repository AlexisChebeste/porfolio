

export default function ButtonLink({ href, icon, text, className }: { href: string; icon: React.ReactNode; text?: string; className?: string }) {
    return (
        <a href={href} className={`button-link ${className}`} target="_blank" rel="noopener noreferrer">
            {icon}
            {text}
        </a>
    )
}