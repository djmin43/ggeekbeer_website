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
            fontSize: "calc(9px + 1vw)", 
          },
        },
      }
  });

//   Types



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

    // Form Error 
    const [nameError, setNameError] = useState<boolean>(false);
    const [emailError, setEmailError] = useState<boolean>(false);
    const [phoneError, setPhoneError] = useState<boolean>(false);
    const [contentsError, setContentsError] = useState<boolean>(false);

    // Send Operator
    const [valid, setValid] = useState<boolean>(false);

    // Message Confirmation
    const [submitted, setSubmitted] = useState<string>('false');
    const [errorMessage, setErrorMessage] = useState<ErrorMessage>({
        message: '',
        code: ['']
    });



    const handleSubmit = async (e:any) => {
        await e.preventDefault();
        await validator();

    };

    // Validator Function
    const validator = () => {
        // email validation regex
        const re = /^[^\s@]+@[^\s@]+$/;
        if (name.length < 2){
            setNameError(true);
        } else {
            setNameError(false)
        };
        if (re.test(email) === false){
            setEmailError(true);
        } else {
            setEmailError(false);
        };
        if (phone.length < 5 || phone.length > 20){
            setPhoneError(true);
        } else {
            setPhoneError(false);
        };
        
        if (contents.length < 10 || contents.length > 1000) {
            setContentsError(true);
        } else {
            setContentsError(false);
        };

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
            const data = await res.json();
            await setSubmitted('true');
            setErrorMessage(data);
        } catch(err) {
            setErrorMessage(err)
        };
    };



    return (

        <ThemeProvider theme={theme} >
        <div className={styles.contact} id="contactus">
            <h1>Contact us<small>.</small></h1>
            <Card className={styles.card} elevation={4}>
            {submitted === 'false' 
            ?
            <div>
                <h2>납품/매장/콜라보/OEM 관련 문의</h2>
                <form onSubmit={handleSubmit}>

                        <TextField label="이름" value={name} placeholder="예시: 김꿀꺽" onChange={e => setName(e.target.value)} error={nameError} variant="standard" margin="normal" fullWidth />
                        {nameError === true ? <h4>두 글자 이상의 이름 또는 업체명을 입력해주세요.</h4> : ''}

                        <TextField label="이메일" type="text" value={email} placeholder="예시: ggeekbeer@ggeekbeer.com" onChange={ e => setEmail(e.target.value)} error={emailError} variant="standard" margin="normal" fullWidth/>
                        {emailError === true ? <h4>올바른 이메일을 입력해주세요. (예시: ggeekbeer@ggeekber.com)</h4> : ''}

                        <TextField label="전화번호" type="tel" value={phone} placeholder=" - 제외 전화번호 (예시: 01012345678)" onChange={ e => setPhone(e.target.value)}  error={phoneError} variant="standard"  margin="normal" fullWidth/>
                        {phoneError === true ? <h4>"-"를 제외하고 전화번호를 입력해주세요.</h4> : ''}

                        <TextField  label="문의사항"  value={contents} placeholder="문의하실 내용을 적어주세요." onChange={ e => setContents(e.target.value)} error={contentsError} variant="standard" margin="normal" fullWidth multiline rows={7}/>
                        {contentsError === true ? <h4>10자 이상 내용을 적어주세요. (1000자 미만).</h4> : ''}

                    <Button type="submit" variant="outlined" color="primary" fullWidth>보내기</Button>
                </form> 
                </div>
                : submitted === 'pending' ? <div><img width="100%" src="/loading-bottle.gif"/></div>
                : submitted === 'true' ? <div>
                    <h2>{errorMessage.message}</h2>
                    <p>{errorMessage.code}</p>
                    <Button variant="outlined" color="primary" fullWidth={true} onClick={() => setSubmitted('false')} >다시보내기</Button></div> : ''}
                </Card>
        </div>
        </ThemeProvider>

    )
};

export default ContactUs
