import "../styles/error.css"

interface ErrorProps {
  class_name?: string;
  message?: string;
}

export function ErrorNotFound({ class_name }: ErrorProps) {
  return (
    <div className={class_name ? class_name : "error"}>
      <h1>Error 404</h1>
      <p>Page not found</p>
    </div>
  );
}
