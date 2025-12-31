type ButtonLinkProps = {
  href: string
  icon: React.ReactNode
  label: string
  className?: string
  text?: string
  badge?: string
  variant?: "default" | "cv"
}


export default function ButtonLink({
    href, 
    icon,
    text,
    className,
    badge,
    label,
    variant = "default"
} : ButtonLinkProps) {

    return (
        <a 
            href={href} 
            className={`hero-action ${className} button-link--${variant} `} 
            target="_blank" 
            aria-label={label}
            rel="noopener noreferrer"
        >
            <span className="icon">{icon}</span>

           {text &&  <span className="text">{text}</span>}

            {badge && (
                <span className="button-link__badge">
                {badge}
                </span>
            )}
        </a>
    )
}