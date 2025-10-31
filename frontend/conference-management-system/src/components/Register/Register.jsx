import styles from "./Register.module.css";
import {useState} from "react";

function Register() {

    const [userData, setUserData] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        bio: "",
        organization: ""
    });

    const [errors, setErrors] = useState({});

    function handleOnChange(e) {
        e.preventDefault();
        const {name, value} = e.target;
        setUserData((prevState) => {
            return  {
                ...prevState,
                [name]: value
            }
        })
    }

    function validateForm() {
        const newErrors = {};

        if(!userData.firstName || userData.firstName.length < 2 || userData.firstName.length > 20) {
            newErrors.firstName = 'First name must be between 2 and 20 characters long';
        }
        if(!userData.lastName || userData.lastName.length < 2 || userData.lastName.length > 255) {
            newErrors.lastName = 'Last name must be between 2 and 255 characters long';
        }
        if(!userData.email || userData.email.length < 10 || userData.email.length > 30 || !userData.email.includes('@')) {
            newErrors.email = 'Email must be between 10 and 30 characters long and include \'@\' sign';
        }
        if(!userData.password || userData.password.length < 6 || userData.password.length > 100) {
            newErrors.password = 'Password must be between 6 and 100 characters long';
        }
        if(userData.bio.length > 500) {
            newErrors.bio = 'Bio must not exceed 500 characters';
        }
        if(userData.organization.length > 50) {
            newErrors.organization = 'Organization must not exceed 50 characters';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    function handleSubmit(e) {
        e.preventDefault();

        if(!validateForm()) return;

        try {
            // send data
        } catch (err) {
            console.error('Error: ', err)
            setErrors({submit: 'Connection error. Try again...'})
        }

    }

    return (
        <div className={styles.registerContainer}>
            <div className={styles.registerBox}>
                <h1 className={styles.registerTitle}>Create Account</h1>
                <form className={styles.registerForm} onSubmit={handleSubmit} noValidate>
                    <input
                        className={styles.input}
                        placeholder="First Name"
                        type="text"
                        name="firstName"
                        value={userData.firstName}
                        onChange={handleOnChange}
                    />
                    {errors.firstName &&
                        <span className={styles.error}>{errors.firstName}</span>}

                    <input
                        className={styles.input}
                        placeholder="Last Name"
                        type="text"
                        name="lastName"
                        value={userData.lastName}
                        onChange={handleOnChange}
                    />
                    {errors.lastName &&
                        <span className={styles.error}>{errors.lastName}</span>}

                    <input
                        className={styles.input}
                        placeholder="Email"
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={handleOnChange}
                    />
                    {errors.email &&
                        <span className={styles.error}>{errors.email}</span>}

                    <input
                        className={styles.input}
                        placeholder="Password"
                        type="password"
                        name="password"
                        value={userData.password}
                        onChange={handleOnChange}
                    />
                    {errors.password &&
                        <span className={styles.error}>{errors.password}</span>}

                    <textarea
                        className={styles.textarea}
                        placeholder="Bio (optional)"
                        name="bio"
                        rows="4"
                        value={userData.bio}
                        onChange={handleOnChange}
                    />
                    {errors.bio &&
                        <span className={styles.error}>{errors.bio}</span>}

                    <input
                        className={styles.input}
                        placeholder="Organization (optional)"
                        type="text"
                        name="organization"
                        value={userData.organization}
                        onChange={handleOnChange}
                    />
                    {errors.organization &&
                        <span className={styles.error}>{errors.organization}</span>}


                    {errors.submit && <span className={styles.error}>{errors.submit}</span>}

                    <button className={styles.submitButton} type="submit">Register</button>
                </form>
                <p className={styles.loginPrompt}>
                    Already have an account?
                    <button className={styles.loginButton} type="button">Login</button>
                </p>
            </div>
        </div>
    );
}

export default Register;