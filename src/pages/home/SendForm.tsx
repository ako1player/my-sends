import { useEffect, useState } from "react";
import { useFirestore } from "../../hooks/useFirestore";

const SendForm = ({uid}:any) =>{
    const [grade, setGrade] = useState<string>('');
    const [date, setDate] = useState<string>(''); 
    const { addDocument, response } = useFirestore('sends');

    const handleSubmit = (e:React.FormEvent) =>{
        e.preventDefault();
        console.log(uid, grade, date)
        addDocument({uid, grade, date,})
    }

    useEffect(()=>{
        if(response.success){
            setGrade('');
            setDate('');
        }
    },[response.success])

    return(
        <>
            <h3>Add a Send</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Grade:</span>
                    <input
                    type='text'
                    required
                    onChange={(e) => setGrade(e.target.value)}
                    value={grade}
                    />
                </label>
                <label>
                    <span>Date:</span>
                    <input
                    type='date'
                    required
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                    />
                </label>
                <button>Add Send</button>
            </form>
        </>
    )

}

export default SendForm;
