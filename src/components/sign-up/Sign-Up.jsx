import React from 'react';
import './sign-up.styles.scss'

import FormInput from '../form-input/Form-input'
import CustomButton from '../custom-button/Custom-button'

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';
import {createUserWithEmailAndPassword} from 'firebase/auth'

class SignUp extends React.Component {
    constructor(){
        super()
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const {displayName, email, password, confirmPassword} = this.state
        if (password !== confirmPassword){
            alert('Passwords do not match')
            return
        } else {
            try {
                const { user } = await createUserWithEmailAndPassword(auth, email, password)
                await createUserProfileDocument(user, {displayName})
                this.setState({
                    displayName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                })
            } catch (error) {
                console.log('error code:', error.code, 'error message:', error.message);
            }
        }
    }
    
    handleChange = (e)=>{
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    render(){
        const {displayName, email, password, confirmPassword} = this.state
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-from' onSubmit={this.handleSubmit}>
                    <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={this.handleChange}
                    label='Full Name'
                    required
                    />
                    <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                    label='Email'
                    required
                    />
                    <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={this.handleChange}
                    label='Password'
                    required
                    />
                    <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={this.handleChange}
                    label='Confirm Password'
                    required
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                    
                </form>


            </div>
          );
    }
}
 
export default SignUp;