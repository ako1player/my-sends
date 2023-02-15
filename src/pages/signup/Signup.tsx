import styles from './Signup.module.css';
import { useState } from 'react';

export const Signup = () =>{
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [displayName, setDisplayName] = useState<string>('');

    return (
        <form className={styles['signup-form']}>
            <h2>Sign Up</h2>
            <label>
                <span>Display Name:</span>
                <input
                type='text'
                onChange={(e) => setDisplayName(e.target.value)}
                value={displayName}
                />
            </label>
            <label>
                <span>Email:</span>
                <input
                type='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                />
            </label>
            <label>
                <span>Password:</span>
                <input
                type='password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                />
            </label>
            <button className='btn'>Sign Up</button>
        </form>
    )
}