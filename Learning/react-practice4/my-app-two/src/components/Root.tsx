import {Suspense, useState} from "react"
import Loader from "./Loader.tsx"
import UserList from "./UserList.tsx"
import {fetchData} from "../api/api.ts"
import type {UserInterface} from "../types/user.interface.ts"
import AppErrorBoundary from "./AppErrorBoundary.tsx"

const Root = () => {
    const [usersPromise, setUsersPromise] =
    useState<Promise<UserInterface[]>>(() => fetchData(false))

    const handleSimulateError = () => {
        setUsersPromise(fetchData(true))
    }

    const handleRetry = () => {
        setUsersPromise(fetchData(false))
    }

  return (
      <div>
          <AppErrorBoundary onReset={handleRetry}>
              <Suspense fallback={<Loader />}>
                  <UserList promise={usersPromise}/>
                  <button onClick={handleSimulateError}>Simulate Error</button>
              </Suspense>
          </AppErrorBoundary>
      </div>
  )
}

export default Root