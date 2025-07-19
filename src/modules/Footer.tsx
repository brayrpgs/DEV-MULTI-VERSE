import LogoTransparent from "../assets/LogoTransparent";
import LinkedIn from "../assets/LinkedIn";
import GitHub from "../assets/GitHub";
import Twitter from "../assets/Twitter";
import { ButtonAnchor } from "../components/ButtonAnchor";
import { footerConfig } from "../config/footerConfig";
import "../styles/footer.css"

interface FooterProps {
  class_name?: string;
}

export function Footer({ class_name }: FooterProps) {
  return (
    <footer className={class_name || ""} role="contentinfo">
      <div className="footer_container">
        <div className="footer_section footer_brand">
          <LogoTransparent class_name="footer_logo" />
        </div>
        
        <div className="footer_section footer_nav">
          <h3 className="footer_title">{footerConfig.navigation.label}</h3>
          <div className="footer_links">
            {footerConfig.navigation.links.map((link) => (
              <ButtonAnchor
                key={link.href}
                class_name="footer_link"
                href={link.href}
                children={link.label}
              />
            ))}
          </div>
        </div>

        <div className="footer_section footer_social">
          <h3 className="footer_title">{footerConfig.social.label}</h3>
          <div className="footer_social_links">
            {footerConfig.social.links.map((social) => {
              const IconComponent = social.platform === 'LinkedIn' ? LinkedIn 
                : social.platform === 'GitHub' ? GitHub 
                : Twitter;
              
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  className="footer_social_link"
                  aria-label={social.ariaLabel}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconComponent class_name="footer_icon" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="footer_section footer_legal">
          <h3 className="footer_title">{footerConfig.legal.label}</h3>
          <div className="footer_links">
            {footerConfig.legal.links.map((link) => (
              <ButtonAnchor
                key={link.href}
                class_name="footer_link"
                href={link.href}
                children={link.label}
              />
            ))}
          </div>
        </div>
      </div>
      
      <div className="footer_copyright">
        <p>© {footerConfig.company.year} {footerConfig.company.name}. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
