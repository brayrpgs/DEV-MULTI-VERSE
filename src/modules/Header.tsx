import { useEffect, useState } from "react";
import Bars from "../assets/Bars";
import LogoTransparent from "../assets/LogoTransparent";
import { ButtonAnchor } from "../components/ButtonAnchor";
import "../styles/header.css"

interface HeaderProps {
  class_name?: string;
}

export function Header({ class_name }: HeaderProps) {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 769);
  const [barIsOpen, setBarIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 769);
    };
    window.addEventListener("resize", handleResize);
  }, [isMobile])

  return (
    <header
      className={(class_name ? class_name : "")}
    >
      <LogoTransparent
        class_name="logo"
      />
      <nav className={(isMobile ? "glass" : "") + (barIsOpen ? " active" : "")}>
        <ButtonAnchor
          class_name="anchor_button animated_buttons"
          href="#"
          children="Servicios"
        />
        <ButtonAnchor
          class_name="anchor_button animated_buttons"
          href="#"
          children="Quienes somos"
        />
        <ButtonAnchor
          class_name="anchor_button animated_buttons"
          href="#"
          children="Aplicaciones"
        />
        <ButtonAnchor
          class_name="anchor_button animated_buttons"
          href="#"
          children="Clientes"
        />
        <ButtonAnchor
          class_name="anchor_button animated_buttons"
          href="#"
          children="Contactanos"
        />
      </nav>
      <Bars
        class_name="bars"
        onClick={() => {
          setBarIsOpen(!barIsOpen);
        }}
      />
    </header>
  );
}
