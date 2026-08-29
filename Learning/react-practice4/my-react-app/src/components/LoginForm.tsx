import {type ChangeEvent, type SubmitEvent, useState} from 'react';

interface FormData {
    username: string;
    password: string;
}

const initialFormData : FormData = {
    username: "admin",
    password: "123",
}

const LoginForm = () => {
    const [formData, setFormData] = useState(initialFormData)
    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(initialFormData.username, initialFormData.password)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prevData => (
            { ...prevData,
              [name]: value }
          )
        )


    }

    return (
        <form className="col-6 mx-auto" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="username">Username</label>
            <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="password">Password</label>
            <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
        )
}

export default LoginForm