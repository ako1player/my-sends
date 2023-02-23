import styles from './Signup.module.css';
import { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';
import Modal from '../../components/Modal';

export const Signup = () =>{
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [displayName, setDisplayName] = useState<string>('');
    const [customError, setCustomError] = useState('');
    const {signup, isPending, error} = useSignup();
    const [showModal, setShowModal] = useState(true);

    const handleClose = () =>{
      setShowModal(false);
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        if(password !== confirmPassword){
            setCustomError("Password and Confirm Password do not match");
            return;
        }
        signup(email, password, displayName);
    }

    return (
        <>
        <form className={styles['signup-form']} onSubmit={handleSubmit}>
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
            <label>
                <span>Confirm Password:</span>
                <input
                type='password'
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                />
            </label>
            {!isPending && <button className='btn'>Sign Up</button>}
            {isPending && <button className='btn' disabled>Loading</button>}
            {error && <p className='error'>{error}</p>}
            {customError && <p className='error'>{customError}</p>}
        </form>
        {showModal && 
            <Modal handleClose={handleClose}>
            <h2>About mySends</h2>
            <p>The purpose of this is to keep track of grades done to show cimbing progress</p>
            </Modal>
        }
            
        </>
    )
}