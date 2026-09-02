import {ErrorBoundary} from "react-error-boundary"
import ErrorFallback from "./ErrorFallback.tsx"

interface AppErrorBoundaryProps {
    children: React.ReactNode
    onReset: () => void
}

const AppErrorBoundary = ({children, onReset}: AppErrorBoundaryProps) => {
  return (
    <div>
        <ErrorBoundary FallbackComponent={ErrorFallback} onReset={onReset} >
            {children}
        </ErrorBoundary>
    </div>
  )
}

export default AppErrorBoundary