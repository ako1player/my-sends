import styles from './Home.module.css';
import { useFirestore } from '../../hooks/useFirestore';

export const SendsList = ({sends}:any) =>{
    const {deleteDocument, response} = useFirestore('sends');
    console.log(response);
    return(
        <ul className={styles.transactions}>
            <h2>Recent Sends</h2>
            {sends.map((send:any) =>(
                <li key={send.id}>
                    <p className={styles.name}>{send.grade}</p>
                    <p className={styles.amount}>{send.date}</p>
                    <button onClick={()=>deleteDocument(send.id)}>X</button>
                </li>
            ))}
        </ul>
    )
}