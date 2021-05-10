import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import styles from '../styles/ContactUs.module.css';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


// Customize Font Size of Inputs
const theme = createMuiTheme({
    overrides: {
        MuiInputLabel: { 
          root: { 
            fontSize: "calc(3px + 1vw)", 
          },
        },
      }
  });

interface ErrorMessage {
    message: string;
    code: string[];
};


const ContactUs = () => {
    
    // Form  
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [contents, setContents] = useState<string>('');


    // Send Operator
    const [valid, setValid] = useState<boolean>(false);

    // Message Confirmation
    const [submitted, setSubmitted] = useState<string>('false');
    const [errorMessage, setErrorMessage] = useState<ErrorMessage>({
        message: '',
        code: ['']
    });


    const re = /^[^\s@]+@[^\s@]+$/;


    const handleSubmit = async (e:any) => {
        await e.preventDefault();
        await sendMail();

    };

    // Send Mail Function
    const sendMail = async () => {
        try{
            const form = {name, email, phone, contents}
            await setSubmitted('pending')
            const res = await fetch('/api/contact',{
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(form)
            });
            await setSubmitted('true');
            const data = await res.json();
            setErrorMessage(data);
        } catch(err) {
            setErrorMessage(err)
        };
    };



    return (

        <ThemeProvider theme={theme} >
    
        <div className={styles.contact} id="contact">
            <h1>Contact us<small>.</small></h1>
            <Card className={styles.card} elevation={4}>
            {submitted === 'false' 
            ?
            <div>
                <h2>납품/매장/콜라보/OEM 관련 문의</h2>
                <form onSubmit={handleSubmit}>

                        <TextField label="이름" value={name} placeholder="(예시: 김꿀꺽)" onChange={e => setName(e.target.value)}  error={name.length < 2 && name !== ''} helperText={name.length < 2 && name !== '' ? "2글자 이상 입력해주세요.": '' } variant="standard" margin="normal" fullWidth />

                        <TextField label="이메일" type="text" value={email} placeholder="(예시: ggeekbeer@ggeekbeer.com)" onChange={ e => setEmail(e.target.value)} error={!re.test(email) && email !== ''} variant="standard" margin="normal" helperText={(!re.test(email) && email !== '') ? '올바른 이메일을 써주세요 (예시: ggeekbeer@ggeekbeer.com)' : ''} fullWidth/>

                        <TextField label="전화번호" type="tel" value={phone} placeholder="(예시: 01012345678)" onChange={ e => setPhone(e.target.value)}  error={((phone.length < 8 || phone.length > 20) && phone.length !== 0) } helperText={((phone.length < 8 || phone.length > 20) && phone.length !== 0) ? '8자리 이상 전화번호를 입력해주세요 (예시: 01012345678)' : ''} variant="standard"  margin="normal" fullWidth/>

                        <TextField  label="문의사항"  value={contents} placeholder="(예시: 아니 어쩜 이렇게 맥주가 맛있는거죠?)" onChange={ e => setContents(e.target.value)} error={(contents.length < 10 || contents.length > 1000) && contents.length !== 0} helperText={(contents.length < 10 || contents.length > 1000) && contents.length !== 0 ? '문의하실 내용을 입력해주세요.(10자 이상/ 1000자 미만)' : '' } variant="standard" margin="normal" fullWidth multiline rows={7}/>

                    <Button type="submit" variant="outlined" color="primary" fullWidth>보내기</Button>
                </form> 
                </div>
                : submitted === 'pending' ? <div><img width="100%" src="/loading-bottle.gif"/></div>
                : submitted === 'true' ? <div>
                    <h2>{errorMessage.message}</h2>
                    {errorMessage.code.map(item => <div><small>{item}</small></div>)}
                    <Button variant="outlined" color="primary" fullWidth={true} onClick={() => setSubmitted('false')} >다시보내기</Button></div> : ''}
                </Card>
        </div>
        </ThemeProvider>
    )
};

export default ContactUs
