import { useState } from 'react'
import styles from '../../styles.module.css'
import { Title } from '../Title';

export const FormLogin = () => {

    
    const [userName, setUserName] = useState ("");
    const [password, setPassword] = useState ("");
    
    const onChangeUserName = (e) => setUserName(e.target.value);
    
    const onChangePassword = (e) => setPassword(e.target.value);
    
    const onSubmit = (e) => {
        e.preventDeault()
        alert(`Bienvenido: ${userName}`);
    };

    return (
        <div className={styles.container}>
            <Title>6. Login Fomrm</Title>
            <h3>Log in</h3>

            <form onSubmit={onSubmit}>
                <label htmlFor="Email Address"></label>
                <input 
                    type="text"
                    placeholder='Email Address'
                    value={userName}
                    onChange={onChangeUserName}
                />
                <input 
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={onChangePassword}
                />
                <div>
                    <button 
                    type="submit"
                    >Continue</button>
                </div>
            </form>
        </div>
    );
};