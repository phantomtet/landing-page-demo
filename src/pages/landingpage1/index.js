import { Stepper, IconButton, Step, TextField, StepLabel, Divider, Button, Dialog } from '@mui/material'
import { useLayoutEffect, useState } from 'react'
import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { useHistory } from 'react-router-dom';

const LandingPage1 = () => {
    const [step, setStep] = useState(-1)
    return (
        <div>
            <div align='center' style={{ padding: '50px 0' }}>
                <div style={{ marginBottom: 20, color: 'var(--secondary-color)', fontWeight: 600 }}>Get Access in Less than a Minute</div>
                <Stepper activeStep={step} style={{ maxWidth: 500 }}>
                    <Step key={1}>
                        <StepLabel>Create Account</StepLabel>
                    </Step>
                    <Step key={2}>
                        <StepLabel>Verify Account</StepLabel>
                    </Step>
                    <Step key={3}>
                        <StepLabel>Access Granted</StepLabel>
                    </Step>
                </Stepper>
            </div>
            <Divider />
            <div style={{ padding: '60px 0' }}>
                <Button onClick={() => setStep(0)} variant='contained' style={{ background: 'var(--green-color)', textTransform: 'capitalize', maxWidth: 300, width: '100%', height: 60, fontSize: 25, }}>
                    Get Started Now
                </Button>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                    <div style={{ minHeight: 15, minWidth: 15, maxHeight: 15, maxWidth: 15, backgroundColor: '#00ff44', borderRadius: '100%', marginRight: 10 }}></div>
                    <div >High Speed & Unlimited</div>
                </div>
            </div>
            <div style={{ marginBottom: 50, color: 'var(--secondary-color)', fontSize: 25 }}>
                Find out why people love our website
            </div>
            <div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                    <CheckIcon /><span>Global Access from anywhere and in any device</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                    <CheckIcon /><span>Your own space in the cloud 5TB of Cloud Storage space included</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                    <CheckIcon /><span>Unlimited Speed: no speed or transfer limits</span>
                </div>
            </div>
            <Step1Dialog open={step === 0} onClose={() => setStep(-1)} />
        </div>
    )
}

export default LandingPage1

const Step1Dialog = ({ step, ...props }) => {
    const [input, setInput] = useState({
        email: ''
    })
    const [error, setError] = useState('')
    const history = useHistory()
    const handeClickContinue = () => {
        const string = new URLSearchParams(input).toString()
        history.push('/step2?' + string)
    }
    useLayoutEffect(() => {
        if (input.email == '') setError('')
        else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.email)) setError('')
        else setError('Invalid email address')
    }, [input.email])
    return (
        <Dialog {...props}>
            <div style={{ maxWidth: 350 }}>
                <IconButton size='small' style={{ position: 'absolute', right: 0 }}>
                    <CloseIcon style={{ fill: 'white' }} />
                </IconButton>
                <div >
                    <div style={{ background: 'var(--secondary-color)', color: 'white', fontSize: 22, padding: '15px 0 20px 15px' }}>
                        <div style={{ fontWeight: 300 }}>Get Access to your content</div>
                        <div style={{ fontWeight: 700 }}>3 Easy Steps</div>
                    </div>
                </div>
                <div style={{ padding: 15 }}>
                    <Stepper orientation='vertical' activeStep={0} style={{}}>
                        <Step key={1} >
                            <StepLabel ><span style={{ color: 'var(--secondary-color)', fontWeight: 700 }}>Create your Free Account</span></StepLabel>
                        </Step>
                        <Step key={2} style={{}}>
                            <StepLabel>Verify your Account</StepLabel>
                        </Step>
                        <Step key={3} style={{}}>
                            <StepLabel>Get Access to your content</StepLabel>
                        </Step>
                    </Stepper>
                </div>
                <div style={{ padding: 15, background: 'lightgray' }}>
                    <TextField helperText={error || ' '} error={Boolean(error)} value={input.email} onChange={e => setInput(prev => ({ ...prev, email: e.target.value }))} autoComplete='new-password' placeholder='Fill in your email' InputProps={{ startAdornment: <EmailOutlinedIcon style={{ marginRight: 10 }} />, style: { background: 'white' } }} fullWidth style={{ backgroundColor: '', }} />
                    <Button onClick={handeClickContinue} disabled={Boolean(error) || input.email == ''} fullWidth variant='contained' color='success' style={{ textTransform: 'capitalize', height: 60, fontSize: 25, }}>
                        Continue
                    </Button>
                    <div style={{ marginTop: 15 }}>By clicking on "Continue", you agree with the Terms & Conditions and the Privacy Policy</div>
                </div>
            </div>
        </Dialog >
    )
}