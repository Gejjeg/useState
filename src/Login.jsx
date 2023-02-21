import { useState } from "react"

export function LoginForm() {
    const [data, setData] = useState({
        username: "",
        password: "",
        remember: false
    })

    const handleForm = (event) => {
        const { name, type, value, checked} = event.target

        setData(data => {
            return {
                ...data,
                [name]: type === "checkbox" ? checked : value,
            }
        })
    }

    return (
        <form>
            <input name="username" value={data.username} onChange={handleForm} />
            <input name="password" type="password" value={data.password} onChange={handleForm} />
            <input name="remember" type="checkbox" value={data.remember} onChange={handleForm} />
            <button >Login</button>
            <button>Reset</button>
        </form>
    )
}