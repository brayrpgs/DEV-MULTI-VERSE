import { Footer } from "../modules/Footer";
import { Header } from "../modules/Header";

export function LayoutHomePage() {
  return (
    <>
      {
        /**
         * Header component should have a class name for responsive design,
         * declared in header.css or common.css. 
         */
      }
      <Header class_name="header_responsive glass slide_up_to_down" />
      <main style={{ minHeight: 'calc(100vh - 300px)', padding: '1rem' }}>
        {/* Contenido principal aquí */}
      </main>
      <Footer class_name="footer_responsive glass slide_down_to_up"/>
    </>
  )
} 
