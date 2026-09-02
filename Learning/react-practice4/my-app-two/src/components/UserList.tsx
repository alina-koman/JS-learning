import {useEffect, useState} from "react"
import type {UserInterface} from "../types/user.interface.ts"
import {fetchData} from "../api/api.ts"

const UserList = () => {
    const [users, setUsers] = useState<UserInterface[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        setLoading(true)
        setError(null)

        fetchData()
            .then(data => {
                setUsers(data)
            })
            .catch ((error: Error) => {
                setError(error)
            })
            .finally(() => {
                setLoading(false)
            })
     }, [])

    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error: {error.message}</div>
    }

    return (
        <div>
            <h1>Список користувачів</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name}: {user.email}
                    </li>
                ))}
            </ul>
        </div>
  )
}

export default UserList