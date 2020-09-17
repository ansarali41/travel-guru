import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import './Login.css'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    if(!firebase.apps.length){
        firebase.initializeApp(firebaseConfig);
    }
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    // email password login
    

    // google Login
    const googleSignIn = () => {
        const  googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider).then(function(result) {
            const user = result.user;
            const {displayName, email} = user;
            const signedInUser = {
                name: displayName,
                email: email
            }
            setLoggedInUser(signedInUser);
            history.replace(from);
          })
          .catch(function(error) {
            var errorMessage = error.message;
            console.log(errorMessage);
          });
    }

    // facebook sign in
    const facebookSignIn= () => {
        const fbProvider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(fbProvider).then(function(result) {
            const user = result.user;
            const {displayName, email} = user;
            const signedInUser = {
                name: displayName,
                email: email
            }
            setLoggedInUser(signedInUser);
            history.replace(from);
          })
          .catch(function(error) {
            var errorMessage = error.message;
            console.log(errorMessage);
          });
    }

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            <label>Email</label> <br/>
                <input name="email" placeholder="Your email address" ref={register({
                    required: "Required",
                    pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "invalid email address" }
                })} />
                <br/>
                {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}
                <br />

                <label>Password</label> <br/>
                <input name="password" placeholder="Your password" ref={register({
                    required: "Required",
                    pattern: { value: /^/i, message: "invalid Password" }
                })} />
                <br/>
                {errors.password && <span style={{ color: 'red' }}>{errors.password.message}</span>}
                <br />


                {/* <input name="password" placeholder="Your password" ref={register({ required: true })} /> <br />
                {errors.password && <span style={{ color: 'red' }}>Enter your password</span>}
                <br /> */}

                <input type="submit" />
            </form>
            <h5>or</h5>
            <hr/>
            <button onClick ={googleSignIn}>Continue with Google</button> <br/>
            <button onClick ={facebookSignIn}>Continue with Facebook</button> <br/>

        </div>
    );
}

export default Login;