import { useState, useEffect, ReactNode, FC } from 'react';

interface IProps {
  children: ReactNode;
}

const ErrorBoundary: FC<IProps> = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      // Log the error to an error reporting service
      console.error("ErrorBoundary caught an error:", event.error);
      // Update state to show the fallback UI
      setHasError(true);
    };

    // Listen for unhandled promise rejections
    window.addEventListener("error", handleError);

    return () => {
      // Clean up the event listener
      window.removeEventListener("error", handleError);
    };
  }, []);

  if (hasError) {
    // Render the fallback UI
    return <h1>Something went wrong.</h1>;
  }

  return <>{children}</>;
};

export default ErrorBoundary;
