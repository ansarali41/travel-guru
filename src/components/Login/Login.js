import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import './Login.css'
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { initializeFirebase, handleGoogleSignIn, handleFacebookSignIn, createNewUserAccount, userLoginHandler, handleResetPassword } from './LoginManager';
import Header from '../Header/Header';

const Login = () => {
    initializeFirebase();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    // google sign 
    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                setLoggedInUser(res);
                history.replace(from);
            })
    }

    // facebook sign in
    const facebookSignIn = () => {
        handleFacebookSignIn()
            .then(res => {
                setLoggedInUser(res);
                history.replace(from);
            })
    }

    // user sign in and create a new account
    const [isCreateAccount, setIsCreateAccount] = useState(false)
    const createAccountForm = (isCreateAccount) => {
        setIsCreateAccount(isCreateAccount);
        setMessage({});
    }

    const [message, setMessage] = useState({})
    const [userEmail, setUserEmail] = useState({})

    //login and create account form handle here
    const { register, handleSubmit, errors, watch } = useForm();
    const onSubmit = data => {
        const { firstName, lastName, email, password } = data;
        const name = firstName + ' ' + lastName;

        // creating new user account
        if (isCreateAccount && email && password) {
            createNewUserAccount(name, email, password)
                .then(res => {
                    setMessage(res);
                })
        }

        // user login
        if (!isCreateAccount && email && password) {
            setUserEmail(email);

            userLoginHandler(email, password)
                .then(res => {
                    if (res.name) {
                        setLoggedInUser(res);
                        history.replace(from)
                    }
                    else {
                        setMessage(res);
                    }
                })
        }
    };


    // reset user password
    const resetPassword = (email) => {
        if (email.length > 10) {
            handleResetPassword(email)
                .then(res => {
                    console.log(res);
                        if(res.message){
                            const newMessage = {
                                error: res.message
                            }
                            setMessage(newMessage);
                        }
                        else{
                            setMessage(res)
                        }                   
                })
        }
        else {
            const newMessage = {
                error: "At first input email address and try to login"
            }
            setMessage(newMessage)
        }
    }

    return (
        <div>
            <Header></Header>
            <div className="login-container">
            <p style={{ color: 'red' }}>{message.error}</p>

            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                {isCreateAccount ? <h2>Create Account</h2> : <h2>Login</h2>}

                {isCreateAccount && <div>
                    <input name="firstName" placeholder="Your first name" ref={register({
                        required: {
                            value: true,
                            message: "First Name is required"
                        }
                    })} />
                    <br />
                    {errors.firstName && <span style={{ color: 'red' }}>{errors.firstName.message}</span>}
                    <br />

                    <input name="lastName" placeholder="Your last name" ref={register({
                        required: {
                            value: true,
                            message: "Last Name is required"
                        }
                    })} />
                    <br />
                    {errors.lastName && <span style={{ color: 'red' }}>{errors.lastName.message}</span>}
                    <br />
                </div>
                }

                <input name="email" placeholder="Your email address" ref={register({
                    required: "Required",
                    pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "invalid email address" }
                })} />
                <br />
                {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}
                <br />

                <input type="password" name="password" placeholder="Your password" ref={register({
                    minLength: {
                        value: 8,
                        message: "password must have min length of 8"
                    },
                    required: {
                        value: true,
                        message: "password is required"
                    },
                    maxLength: {
                        value: 25,
                        message: "password must have max length of 25"
                    }
                })} />
                <br />
                {errors.password && <span style={{ color: 'red' }}>{errors.password.message}</span>}
                <br />

                {isCreateAccount && <div>
                    <input type="password" name="repeatPassword" ref={register({
                        validate: (value) => value === watch('password') || "Passwords don't match."
                    })} placeholder="Repeat Password" required />
                    {errors.repeatPassword && <span style={{ color: 'red' }}>{errors.repeatPassword.message}</span>}
                    <br />
                    <br />
                </div>}

                {!isCreateAccount && <p style={{ color: 'orange', cursor: 'pointer' }} onClick={() => resetPassword(userEmail)}>Forget Password</p>}

                {isCreateAccount ? <input type="submit" className="submit-btn" value="Create account" /> : <input className="submit-btn" type="submit" value="Login" />}

                {isCreateAccount ? <p>already have an account! <span className="create-account" onClick={() => createAccountForm(!isCreateAccount)}>Login here</span></p> :
                    <p>Don't have account? <span className="create-account" onClick={() => createAccountForm(!isCreateAccount)}>Create an account</span></p>
                }

            </form>

            <h5>or</h5>
            <hr />
            <button className="sign-in-btn" onClick={facebookSignIn}> <img src="https://i.ibb.co/nCysGJT/fb.png" alt="" /> Continue with Facebook</button> <br />

            <button className="sign-in-btn" onClick={googleSignIn}> <img src="https://i.ibb.co/DpHxMj0/google.png" alt="" /> Continue with Google</button> <br />
        </div>
        </div>
    );
}

export default Login;