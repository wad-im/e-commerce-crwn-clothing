import React from 'react';
import SignIn from '../../components/sign-in/Sign-in';
import SignUp from '../../components/sign-up/Sign-Up';

import './signin-signup.scss'



const SiginInAndSignUpPage = () => {
    return (  
        <div className="sign-in-and-sign-up">
            <SignIn/>
            <SignUp/>
        </div>
    );
}
 
export default SiginInAndSignUpPage;