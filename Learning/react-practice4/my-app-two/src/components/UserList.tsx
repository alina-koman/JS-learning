import {use} from "react"
import type {UserInterface} from "../types/user.interface.ts"

interface UserListProps {
    promise: Promise<UserInterface[]>
}

const UserList = ({promise}: UserListProps) => {
    const users = use(promise)

    return (
        <div className="user-list">
            <h1>Список користувачів</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id} className="user-list-item">
                        <strong>{user.name}</strong>
                        <span>{user.email}</span>
                    </li>
                ))}
            </ul>
        </div>
  )
}

export default UserList