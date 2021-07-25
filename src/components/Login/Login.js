import React from 'react';
import './Login.css';
import logo from '../../icons/logo.png';
import googleIcon from '../../icons/google.svg';
import fbIcon from '../../icons/facebook.svg';
import login_bg from '../../icons/login_bg.jpg';
import { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const Login = () => {
    const [signedInUser, setSignedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const url = window.location.href;
    if (url.includes('login')) {
        document.body.style.backgroundImage = `url(${login_bg})`;
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = 'cover';
    }

    const showRegisterForm = () => {
        document.getElementById("registerForm").style.display = "block";
        document.getElementById("loginForm").style.display = "none";
    }

    const showLoginForm = () => {
        document.getElementById("registerForm").style.display = "none";
        document.getElementById("loginForm").style.display = "block";
    }

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        cpassword: '',
        isValid: false
    })

    let isFieldValid = true;
    const handleBlur = (e) => {
        const newUserInfo = { ...user };

        let emailError = document.getElementById("emailHelp");
        if (e.target.name === "email" && /(.+)@(.+){2,}\.(.+){2,}/.test(e.target.value) === false) {
            emailError.style.display = "block";
            isFieldValid = false;
        } else {
            emailError.style.display = "none";
            isFieldValid = true;
        }

        let passwordError = document.getElementById("passHelp");
        if (e.target.name === "password" && (e.target.value.length > 8) === false) {
            passwordError.style.display = "block";
            isFieldValid = false;
        } else {
            passwordError.style.display = "none";
            isFieldValid = true;
        }

        let cpassError = document.getElementById("cpassHelp");
        if (e.target.name === "cpassword" && newUserInfo.password !== e.target.value) {
            cpassError.style.display = "block";
            isFieldValid = false;
        } else {
            cpassError.style.display = "none";
            isFieldValid = true;
        }

        newUserInfo[e.target.name] = e.target.value;
        newUserInfo['isValid'] = isFieldValid;
        setUser(newUserInfo);
    }

    const createNewUser = (e) => {
        if (user.isValid === true) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((result) => {
                    const createdUser = { ...user };
                    setUser(createdUser);
                    result.user.updateProfile({
                        displayName: user.name
                    })
                    setSignedInUser(createdUser);
                    history.replace(from);
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {

        }
        e.preventDefault();
        document.getElementById("registerForm").reset();
    }

    const getValue = (e) => {
        const userInfo = { ...user };

        if (e.target.name === "email" && /(.+)@(.+){2,}\.(.+){2,}/.test(e.target.value) === false) {
            isFieldValid = false;
        } else {
            isFieldValid = true;
        }

        if (e.target.name === "password" && (e.target.value.length > 8) === false) {
            isFieldValid = false;
        } else {
            isFieldValid = true;
        }
        userInfo[e.target.name] = e.target.value;
        userInfo['isValid'] = isFieldValid;
        setUser(userInfo);
    }

    const loginUser = (e) => {
        if (user.isValid === true) {
            let loginError = document.getElementById("loginError");
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((result) => {
                    loginError.innerText = '';
                    const createdUser = { ...user };
                    createdUser['name'] = result.user.displayName;
                    setUser(createdUser);
                    setSignedInUser(createdUser);
                    history.replace(from);
                })
                .catch((error) => {
                    loginError.innerText = error.message;
                });
        }
        e.preventDefault();
        document.getElementById("loginForm").reset();
    }

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider)
            .then((result) => {
                const createdUser = {
                    name: result.user.displayName,
                    email: result.user.email,
                    image: result.user.photoURL
                };
                setSignedInUser(createdUser);
                history.replace(from);
            }).catch((error) => {
                console.log(error);
            })
    }

    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    const handleFacebookSignIn = () => {
        firebase.auth().signInWithPopup(facebookProvider)
            .then((result) => {
                const createdUser = {
                    name: result.user.displayName,
                    email: result.user.email,
                    image: result.user.photoURL
                };
                setSignedInUser(createdUser);
                history.replace(from);
            }).catch((error) => {
                console.log(error);
            })
    }
    console.clear(signedInUser);
    return (
        <>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <Navbar.Brand>
                            <img id="logo" src={logo} alt="logo" />
                            Fruit Market
                        </Navbar.Brand>
                    </Link>
                </Container>
            </Navbar>
            <div className="container login-area">
                <div className="form-container">
                    <form id="registerForm" onSubmit={createNewUser}>
                        <h4>Create an account</h4>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" autoComplete="off" onBlur={handleBlur} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="new-email">Email address</label>
                            <input type="email" className="form-control" name="email" id="new-email" aria-describedby="emailHelp" placeholder="Enter your email" autoComplete="off" onBlur={handleBlur} />
                            <small id="emailHelp" className="form-text">Please enter a valid email address.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="new-password">Password</label>
                            <input type="password" className="form-control" name="password" id="new-password" aria-describedby="passHelp" placeholder="Enter your password" onBlur={handleBlur} />
                            <small id="passHelp" className="form-text">Password must be 8 characters long.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="cpassword">Confirm Password</label>
                            <input type="password" className="form-control" name="cpassword" id="cpassword" aria-describedby="cpassHelp" placeholder="Confirm Password" onBlur={handleBlur} />
                            <small id="cpassHelp" className="form-text">Password doesn't match.</small>
                        </div>
                        <button type="submit" className="btn btn-primary">Create an account</button>
                        <p>Already have an account?
                            <span onClick={showLoginForm} style={{ color: "#62442A", cursor: "pointer" }}> Login</span>
                        </p>
                    </form>
                    <form id="loginForm" onSubmit={loginUser}>
                        <h4>Login</h4>
                        <p id="loginError"></p>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="email" name="email" className="form-control" id="email" placeholder="Enter your email" autoComplete="off" aria-describedby="emailHelp" onBlur={getValue} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" className="form-control" id="password" placeholder="Enter your password" onBlur={getValue} />

                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="remember" />
                            <label className="form-check-label" htmlFor="remember">Remember me</label>
                            <span style={{ color: "#62442A", cursor: "pointer", float: "right" }}>Forgot Password</span>
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                        <p>Don't have an account?
                            <span onClick={showRegisterForm} style={{ color: "#62442A", cursor: "pointer" }}> Create an account</span>
                        </p>
                    </form>
                </div>
                <hr />
                <h4 id="or">Or</h4>
                <div className="auth-media">
                    <button onClick={handleGoogleSignIn} style={{ backgroundImage: `url(${googleIcon})` }}>Continue with Google</button>
                    <button onClick={handleFacebookSignIn} style={{ backgroundImage: `url(${fbIcon})` }}>Continue with Facebook</button>
                </div>
            </div>
        </>
    );
};

export default Login;