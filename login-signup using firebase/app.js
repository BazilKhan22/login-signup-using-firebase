
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAb96mYLw_f-x815yV0nYpdflb27m6EodI",
  authDomain: "login-signup-project-90e59.firebaseapp.com",
  projectId: "login-signup-project-90e59",
  storageBucket: "login-signup-project-90e59.firebasestorage.app",
  messagingSenderId: "486602968353",
  appId: "1:486602968353:web:5720aaa73015ff5e154260",
  measurementId: "G-W9EQBMRT2N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// For the login form
const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  
  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Redirect to the profile page
      window.location.href = "profile.html";
    })
    .catch((error) => {
      console.error(error.message);
    });
});



// For the signup form
const signupForm = document.getElementById("signup-form");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Redirect to the profile page
      window.location.href = "profile.html";
    })
    .catch((error) => {
      console.error(error.message);
    });
});



// Check if the user is logged in and display the profile page
auth.onAuthStateChanged((user) => {
    if (user) {
      document.getElementById("user-name").textContent = user.email;
    } else {
      // If not logged in, redirect to the login page
      window.location.href = "index.html";
    }
  });
  
  // Logout functionality
  document.getElementById("logout-button").addEventListener("click", () => {
    auth.signOut()
      .then(() => {
        window.location.href = "index.html";
      })
      .catch((error) => {
        console.error(error.message);
      });
  });
  