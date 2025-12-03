import '../styles/buttons.css'
interface ButtonAnchorProps {
  class_name?: string
  children?: React.ReactNode
  href?: string
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void
}
export function ButtonAnchor({ class_name, children, href,onClick }: ButtonAnchorProps) {
  return (
    <a
      href={href ? href : ""}
      className={class_name ? class_name : ""}
      onClick={onClick ? onClick : undefined}
    >
      {children ? children : "Button default"}
    </a>
  )
}
