import {Suspense} from "react"
import Loader from "./Loader.tsx"
import UserList from "./UserList.tsx"
import {ErrorBoundary} from "react-error-boundary"
import ErrorFallback from "./ErrorFallback.tsx"

const Root = () => {
  return (
      <div>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Suspense fallback={<Loader />}>
                  <UserList />
              </Suspense>
          </ErrorBoundary>
      </div>
  )
}

export default Root