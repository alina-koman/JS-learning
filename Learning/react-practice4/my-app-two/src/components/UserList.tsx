import {use} from "react"
import {fetchData} from "../api/api.ts"

const UserList = () => {
    const users = use(fetchData)

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