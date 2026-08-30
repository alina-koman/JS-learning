// import LoginForm from "./LoginForm.tsx";
import {useEffect, useState} from "react";
import {fetchData} from "../api/api.ts";

interface User {
    id: number;
    name: string
}

function App() {
    const [users, setUsers] = useState<User[]>([])
    const [isLoading, setLoading] = useState<boolean>(true );
    const [isError, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchDataAndHandleLoading = async () => {
            try {
                setLoading(true)
                setError(null)

            const data = await fetchData()
                 setUsers(data)
            } catch(error: unknown) {
                if(error instanceof Error)
                    setError(error.message)
            } finally {
                setLoading(false)
            }
        }

        fetchDataAndHandleLoading()
    }, [])

    if (isError) {
        return <div>
            <h3>Something went wrong</h3>
            <h3>{isError}</h3>
        </div>
    }

    if (isLoading) {
        return <h3>Loading...</h3>;
    }

  return <div>
      <h1>Users</h1>
      <ul>
          {users.map((user) =>
              <li key={user.id}>{user.name}</li>)}
      </ul>
  </div>
}

export default App
