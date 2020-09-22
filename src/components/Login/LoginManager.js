import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

export const initializeFirebase = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
}

// google sign in handler
export const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider).then(function (result) {
        const user = result.user;
        const { displayName, email } = user;
        const signedInUser = {
            name: displayName,
            email: email
        }
        return signedInUser;
    })
        .catch(function (error) {
            var errorMessage = error.message;
            console.log(errorMessage);
        });
}

// facebook sign in
export const handleFacebookSignIn = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(fbProvider).then(function (result) {
        const user = result.user;
        const { displayName, email } = user;
        const signedInUser = {
            name: displayName,
            email: email
        }
        return signedInUser;
    })
        .catch(function (error) {
            var errorMessage = error.message;
            console.log(errorMessage);
        });
}

// creating new user account
export const createNewUserAccount = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
            updateUserName(name);
            verifyEmail();
            const newMessage = {
                error: "Successfully created account,Please Verify your account, Check your email inbox"
            }
            return newMessage;
        })
        .catch(function (error) {
            const newMessage = {
                error: "This email has already an account"
            }
            return newMessage;
        });
}

// user login handler
export const userLoginHandler = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
            const newUser = {
                name: firebase.auth().currentUser.displayName,
                email: email
            }
            return newUser;
        })
        .catch(function (error) {
            const newMessage = {
                error: "Wrong password !"
            }
            return newMessage;
        });
}

// user logOut section
export const logOutHandler = () => {
    return firebase.auth().signOut().then(function () {
        const loggedOutUser = {
            name: '',
            email: ''
        }
        return loggedOutUser;

    }).catch(function (error) {
        // An error happened.
    });
}

// reset password
export const handleResetPassword = (email) => {
    return firebase.auth().sendPasswordResetEmail(email)
        .then(function () {
            const newMessage = {
                error: "To reset Password check your email inbox"
            }
            return newMessage;
        }).catch(function (error) {
            return error;
        });
}

// update user name
const updateUserName = name => {
    const user = firebase.auth().currentUser;
    user.updateProfile({
        displayName: name,
    }).catch((error) => {
        console.log(error);
    });
}

// email verification
const verifyEmail = () => {
    var user = firebase.auth().currentUser;
    user.updateEmail("user@example.com").then(function () {
        // Update successful.
    }).catch(function (error) {
        // An error happened.
    });
}