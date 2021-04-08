import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import styles from '../styles/ContactUs.module.css';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

interface Message {
    name: string;
    email: string;
    phoneNumber: string;
    contents: string;
}


const ContactUs = () => {
    const [message, setMessage] = useState<Message>({
        name: '',
        email: '',
        phoneNumber: '',
        contents: ''
    })

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        try{
            await fetch('/api/contact',{
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(message)
            });
            const res = await fetch('/api/contact');
            const data = await res.json();
            console.log(data)
        } catch(err) {
            console.log('error');
        }

    }

    return (
        <div className={styles.contact} id="contactus">
            <Card className={styles.card} elevation={4}>
            <h2>Contact Us</h2>
            <p>납품/콜라보 및 기타 문의 있으시면 연락바랍니다</p>
            <form onSubmit={handleSubmit}>
                <input value={message.name} onChange={ e => setMessage({...message, name: e.target.value})}/>
                <input value={message.email} onChange={ e => setMessage({...message, email: e.target.value})} />
                <input value={message.phoneNumber} onChange={ e => setMessage({...message, phoneNumber: e.target.value})} />
                <input value={message.contents} onChange={ e => setMessage({...message, contents: e.target.value})} />
                <Button type="submit" variant="outlined" color="primary">보내기</Button>
            </form>
            </Card>
        </div>
    )
}

export default ContactUs
