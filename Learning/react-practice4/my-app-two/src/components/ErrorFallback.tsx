import {type FallbackProps} from "react-error-boundary"


const ErrorFallback = ({error, resetErrorBoundary}: FallbackProps) => {
  const ErrorMessage = error instanceof Error ? error.message : 'Unknown error'

  return (
     <div className="error-fallback" role="alert">
       <h2>Щось пішло не так</h2>
       <p>{ErrorMessage}</p>
       <button type="button" onClick={resetErrorBoundary}>
         Спробувати знову
       </button>
     </div>
  )
}

export default ErrorFallback