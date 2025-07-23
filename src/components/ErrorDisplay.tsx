import { ButtonAnchor } from "./ButtonAnchor";
import "../styles/errorDisplay.css";

interface ErrorDisplayProps {
  class_name?: string;
  errorCode?: string | number;
  title?: string;
  message?: string;
  showBackButton?: boolean;
  onBackClick?: () => void;
  actionButton?: {
    text: string;
    onClick: () => void;
  };
}

export function ErrorDisplay({ 
  class_name,
  errorCode = "404",
  title = "Página no encontrada",
  message = "Lo sentimos, la página que buscas no existe.",
  showBackButton = true,
  onBackClick,
  actionButton 
}: ErrorDisplayProps) {
  
  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
    } else {
      window.history.back();
    }
  };

  return (
    <div className={`error-display ${class_name || ""}`}>
      <div className="error-content">
        <h1 className="error-number">{errorCode}</h1>
        <h2 className="error-title">{title}</h2>
        <p className="error-description">{message}</p>
        
        <div className="error-actions">
          {showBackButton && (
            <ButtonAnchor
              onClick={handleBackClick}
              class_name="error-button-back"
            >
              Volver Atrás
            </ButtonAnchor>
          )}
          
          {actionButton && (
            <ButtonAnchor
              onClick={actionButton.onClick}
              class_name="error-button-action"  
            >
              {actionButton.text}
            </ButtonAnchor>
          )}
        </div>
      </div>
    </div>
  );
}