interface FooterProps {
  class_name?: string;
}

export function Footer({ class_name }: FooterProps) {
  return (
    <footer
      className={(class_name ? class_name : "")}
    >
      hola este es el footer
    </footer>
  )
}
