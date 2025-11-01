import {useState} from "react";
import styles from "./Login.module.css";

function Login() {

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
        <div className={styles.loginContainer}>
            <div className={styles.loginBox}>
                <h1 className={styles.loginTitle}>Login</h1>
                <form className={styles.loginForm} onSubmit={handleSubmit} noValidate>
                    <input
                        className={styles.input}
                        placeholder={"Email"}
                        type={"email"}
                        value={credentials.email}
                        name={"email"}
                        onChange={handleChange}
                    />
                    {errors.email && <span className={styles.error}>{errors.email}</span>}

                    <input
                        className={styles.input}
                        placeholder={"Password"}
                        type={"password"}
                        value={credentials.password}
                        name={"password"}
                        onChange={handleChange}
                    />
                    {errors.password && <span className={styles.error}>{errors.password}</span>}

                    <button className={styles.submitButton} type="submit">
                        Login
                    </button>
                </form>
                <p className={styles.registerPrompt}>
                    Don't have an account?
                    <button className={styles.registerButton}>Register Now</button>
                </p>
            </div>
        </div>
    )
}

export default Login;