interface FooterProps {
  class_name?: string;
}

export function Footer({ class_name }: FooterProps) {
  return (
    <footer
      className={(class_name ? class_name : "")}
    >
      <div style={{ textAlign: 'center', color: 'white' }}>
        <p style={{ margin: '0', fontSize: '0.9rem' }}>
          © 2024 DEVMULTIVERSE. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
