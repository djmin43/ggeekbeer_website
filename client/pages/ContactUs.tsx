import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import styles from '../styles/ContactUs.module.css';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';


const ContactUs = () => {
    return (
        <div className={styles.contact} id="contactus">
            <Card className={styles.card} elevation={4}>
            <Typography variant="h2" gutterBottom align="center">Contact Us
            <form>
                <TextField label="이름/회사이름" variant="outlined" margin="dense" color="primary" fullWidth />
                <TextField label="이메일" variant="outlined" margin="dense" color="primary" fullWidth />
                <TextField label="전화번호" variant="outlined" margin="dense" color="primary" fullWidth />
                <TextField label="문의내용" variant="outlined" margin="dense" color="primary" fullWidth multiline={true} rows="10"  />
                <Button variant="outlined" color="primary">보내기</Button>
            </form>
            </Typography> 
            </Card>
        </div>
    )
}

export default ContactUs
