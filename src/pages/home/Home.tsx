import styles from './Home.module.css'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection'
import  SendForm  from './SendForm'
import {SendsList}  from './SendsList'

export const Home = () =>{
    const {user}:any = useAuthContext();
    const {documents, error} = useCollection(
        'sends',
        ["uid", "==", user.uid],
        ["createdAt", "desc"]
    );

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {error && <p>{error}</p>}
                {documents && <SendsList  sends={documents}/>}
            </div>
            <div className={styles.sidebar}>
                <SendForm uid={user.uid}/>
            </div>
        </div>
    )
}