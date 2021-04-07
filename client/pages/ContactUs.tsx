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
            })
            console.log('message sent!')
        } catch(err) {
            console.log('error')
        }

    }

    return (
        <div className={styles.contact} id="contactus">
            <Card className={styles.card} elevation={4}>
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <TextField value={message.name} onChange={ e => setMessage({...message, name: e.target.value})} label="이름/회사이름" variant="outlined" margin="dense" color="primary" fullWidth />
                <TextField value={message.email} onChange={ e => setMessage({...message, email: e.target.value})} label="이메일" variant="outlined" margin="dense" color="primary" fullWidth />
                <TextField value={message.phoneNumber} onChange={ e => setMessage({...message, phoneNumber: e.target.value})} label="전화번호" variant="outlined" margin="dense" color="primary" fullWidth />
                <TextField value={message.contents} onChange={ e => setMessage({...message, contents: e.target.value})} label="문의내용" variant="outlined" margin="dense" color="primary" fullWidth multiline={true} rows="10"  />
                <Button type="submit" variant="outlined" color="primary">보내기</Button>
            </form>
            </Card>
        </div>
    )
}

export default ContactUs
