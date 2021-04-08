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

    // Form Component 
    const [message, setMessage] = useState<Message>({
        name: '',
        email: '',
        phoneNumber: '',
        contents: ''
    });
    const handleSubmit = async (e:any) => {
        e.preventDefault();
        try{
            await setSubmitted('pending')
            await fetch('/api/contact',{
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(message)
            });
            const res = await fetch('/api/contact');
            const data = await res.json();
            await setSubmitted('true')
            setErrorMessage(data.message);
        } catch(err) {
            setErrorMessage(err)
        };
    };

    // Message Confirmation
    const [submitted, setSubmitted] = useState<string>('false')
    const [errorMessage, setErrorMessage] = useState<string>('hello message')

    return (
        <div className={styles.contact} id="contactus">
            <h1>Contact us<small>.</small></h1>
            <Card className={styles.card} elevation={4}>

            {submitted === 'false' 
            ?
            <div>
            
            <h2>납품/매장/콜라보/OEM 관련 문의</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input id="name" value={message.name} onChange={ e => setMessage({...message, name: e.target.value})}/>
                <label htmlFor="email">Email</label>
                <input id="email" type="text" value={message.email} onChange={ e => setMessage({...message, email: e.target.value})} />
                <label htmlFor="phone-number">Phone Number</label>
                <input id="phone-number" value={message.phoneNumber} onChange={ e => setMessage({...message, phoneNumber: e.target.value})} />
                <label htmlFor="contents">Message</label>
                <textarea id="contents" rows={5} value={message.contents} onChange={ e => setMessage({...message, contents: e.target.value})} />
                <Button type="submit" variant="outlined" color="primary">보내기</Button>
            </form> 
            </div>
             : submitted === 'pending' ? <div><img width="100%" src="/loading-bottle.gif"/></div>
             : submitted === 'true' ? <div>
                 <h2>{errorMessage}</h2>
                 <Button variant="outlined" color="primary" onClick={() => setSubmitted('false')}>다시보내기</Button></div> : ''}
            </Card>
        </div>
    )
}

export default ContactUs
