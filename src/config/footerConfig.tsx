export interface FooterConfig {
  company: {
    name: string;
    year: number;
  };
  navigation: {
    label: string;
    links: Array<{
      label: string;
      href: string;
    }>;
  };
  social: {
    label: string;
    links: Array<{
      platform: string;
      url: string;
      ariaLabel: string;
    }>;
  };
  legal: {
    label: string;
    links: Array<{
      label: string;
      href: string;
    }>;
  };
}

export const footerConfig: FooterConfig = {
  company: {
    name: "DEVMULTIVERSE",
    year: new Date().getFullYear(),
  },
  navigation: {
    label: "Navegación",
    links: [
      { label: "Servicios", href: "#servicios" },
      { label: "Quiénes somos", href: "#nosotros" },
      { label: "Aplicaciones", href: "#aplicaciones" },
      { label: "Contacto", href: "#contacto" },
    ],
  },
  social: {
    label: "Síguenos",
    links: [
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/",
        ariaLabel: "Síguenos en LinkedIn",
      },
      {
        platform: "GitHub",
        url: "https://github.com/",
        ariaLabel: "Ver nuestro código en GitHub",
      },
      {
        platform: "Twitter",
        url: "https://twitter.com/",
        ariaLabel: "Síguenos en Twitter",
      },
    ],
  },
  legal: {
    label: "Legal",
    links: [
      { label: "Términos de Servicio", href: "#terminos" },
      { label: "Política de Privacidad", href: "#privacidad" },
    ],
  },
};
