// import LoginForm from "./LoginForm.tsx";
import {useEffect, useState} from "react";

interface User {
    id: number;
    name: string
}

function App() {
    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchDataAndHandleLoading = async () => {
            try {
                fetch('https://jsonplaceholder.typicode.com/users')
                    .then(response => response.json())
                    .then((users) => {
                        console.log(users)
                        setUsers(users)
                    })
            } catch(error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }

        fetchDataAndHandleLoading()
    }, [])

    if (users.length === 0) {
        return <h3>Wrongggg</h3>
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
