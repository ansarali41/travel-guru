import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import './Login.css'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    // email password login


    // google Login
    const googleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider).then(function (result) {
            const user = result.user;
            const { displayName, email } = user;
            const signedInUser = {
                name: displayName,
                email: email
            }
            setLoggedInUser(signedInUser);
            history.replace(from);
        })
            .catch(function (error) {
                var errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    // facebook sign in
    const facebookSignIn = () => {
        const fbProvider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(fbProvider).then(function (result) {
            const user = result.user;
            const { displayName, email } = user;
            const signedInUser = {
                name: displayName,
                email: email
            }
            setLoggedInUser(signedInUser);
            history.replace(from);
        })
            .catch(function (error) {
                var errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    // user sign in and create a new account

    const [isCreateAccount, setIsCreateAccount] = useState(false)
    const createAccountForm = (isCreateAccount) => {
        setIsCreateAccount(isCreateAccount);
    }
    const { register, handleSubmit, errors,watch } = useForm();
    const onSubmit = data => {
        // const { email, password } = data;
        console.log(data);
        // create acc
        // firebase.auth().createUserWithEmailAndPassword(email, password)
        //     .catch(function (error) {
        //         const errorMessage = error.message;
        //         console.log(errorMessage);

        //     });

        // user login
        // firebase.auth().signInWithEmailAndPassword(email, password)
        //     .catch(function (error) {
        //         const errorMessage = error.message;
        //         console.log(errorMessage);
        //     });
    };





    return (
        <div className="login-container">

            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                {isCreateAccount ? <h2>Create Account</h2> : <h2>Login</h2>}
                {isCreateAccount && <div>
                    <input name="firstName" placeholder="Your first name" ref={register({
                        required: "Required",
                        pattern: { value: /^/i, message: "invalid first name" }
                    })} />
                    <br />
                    {errors.firstName && <span style={{ color: 'red' }}>{errors.firstName.message}</span>}
                    <br />

                    <input name="lastName" placeholder="Your first name" ref={register({
                        required: "Required",
                        pattern: { value: /^/i, message: "invalid first name" }
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
                  value: 15,
                  message: "password must have max length of 15"
                }
              })} />
                <br />
                {errors.password && <span style={{ color: 'red' }}>{errors.password.message}</span>}
                <br />

                {isCreateAccount &&  <div>
                    <input type="password" name="repeatPassword" ref={register({
                    validate: (value) => value === watch('password') || "Passwords don't match."
                    })} placeholder="Repeat Password" required/>
                    {errors.repeatPassword && <span style={{ color: 'red' }}>{errors.repeatPassword.message}</span>}
                    <br/>
                </div> }

                {isCreateAccount ? <input type="submit" value="Create account" /> :<input type="submit" value="Login" />}

                {isCreateAccount ? <p>already have an account! <span className="create-account" onClick={() => createAccountForm(!isCreateAccount)}>Login here</span></p> :
                    <p>Don't have account? <span className="create-account" onClick={() => createAccountForm(!isCreateAccount)}>Create an account</span></p>
                }
            </form>
            
            <h5>or</h5>
            <hr />
            <button onClick={googleSignIn}>Continue with Google</button> <br />
            <button onClick={facebookSignIn}>Continue with Facebook</button> <br />

        </div>
    );
}

export default Login;