import React from 'react';
import CustomButton from '../custom-button/Custom-button';
import FormInput from '../form-input/Form-input';

import './sign-in.styles.scss'

import {signInWithGoogle, auth} from '../../firebase/firebase.utils'
import { signInWithEmailAndPassword } from 'firebase/auth'

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = event => {
        const {value, name} = event.target
        this.setState({[name] : value})

    }
    handleSubmit= async event => {
        event.preventDefault()
        const {email, password} = this.state
        try {
            await signInWithEmailAndPassword(auth, email, password)
            this.setState({email: '', password: ''})
        } catch (err) {
            console.log(err)
        }
    }

    render(){
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in wit your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' value={this.state.email} required handleChange={this.handleChange} label='Email'/>
                    <FormInput name='password' type='password' value={this.state.password} required handleChange={this.handleChange} label='Password'/>
                    <div className="buttons">
                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn