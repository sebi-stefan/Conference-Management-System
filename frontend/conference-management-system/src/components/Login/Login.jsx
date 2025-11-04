import {useState} from "react";
import "../../index.css"
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({});

    function validateLogin() {
        const newErrors = {};

        if(!credentials.email || !credentials.email.includes('@')) {
            newErrors.email = 'Email required and must contain \'@\'';
        }
        if(!credentials.password) {
            newErrors.password = 'Password required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    function handleSubmit(e){

        e.preventDefault();

        if(!validateLogin()) return;

        // send to backend

        setCredentials({
            email: "",
            password: ""
        })
    }

    function handleChange(e) {
        const {name, value} = e.target;
        setCredentials((prevState) => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    return(
        <div className={"setup-container"}>
            <div className={"login-register-box"}>
                <h1 className={"setup-title"}>Login</h1>
                <form className={"login-register-form"} onSubmit={handleSubmit} noValidate autoComplete={'off'}>
                    <input
                        className={"input"}
                        placeholder={"Email"}
                        type={"email"}
                        value={credentials.email}
                        name={"email"}
                        onChange={handleChange}
                    />
                    {errors.email && <span className={"error"}>{errors.email}</span>}

                    <input
                        className={"input"}
                        placeholder={"Password"}
                        type={"password"}
                        value={credentials.password}
                        name={"password"}
                        onChange={handleChange}
                    />
                    {errors.password && <span className={"error"}>{errors.password}</span>}

                    <button className={"btn"} type="submit">
                        Login
                    </button>
                </form>
                <p className={"prompt"}>
                    Don't have an account?
                    <Link
                        to={'/register'}
                        className={"setup-link"}
                    >Register</Link>
                </p>

                <p className={"prompt"}>
                    Want to go back?
                    <Link
                        to={'/'}
                        className={"setup-link"}
                    >Home</Link>
                </p>
            </div>
        </div>
    )
}

export default Login;