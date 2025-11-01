import React from 'react';
import styles from './LandingPage.module.css';

function LandingPage() {
    return (
        <div className={styles.landingContainer}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Welcome to ConferenceHub
                </h1>
                <p className={styles.description}>
                    Host, attend and manage your conferences, all in one place!
                </p>
                <div className={styles.buttonContainer}>
                    <button className={`${styles.btn} ${styles.btnLogin}`}>
                        Login
                    </button>
                    <button className={`${styles.btn} ${styles.btnSignup}`}>
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;

