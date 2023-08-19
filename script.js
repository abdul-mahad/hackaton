import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, updateDoc, collection, query, orderBy, where, onSnapshot, getDocs, addDoc, serverTimestamp, increment } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";
// import { getStorage, ref, uploadBytes, uploadBytesResumable, getDownloadURL, deleteObject } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-storage.js";



const firebaseConfig = {
    apiKey: "AIzaSyC9p8daWupGgB12NV120HBJ4IsBsmuV-as",
    authDomain: "hackaton-f239d.firebaseapp.com",
    projectId: "hackaton-f239d",
    storageBucket: "hackaton-f239d.appspot.com",
    messagingSenderId: "506547542068",
    appId: "1:506547542068:web:4f3bb3dd3378a91b71d261",
    measurementId: "G-PQYQL3DKQ5"
  };
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const db = getFirestore(app);
// const provider = new GoogleAuthProvider();
// const userUid = localStorage.getItem("userUid");

const logoutBtn = document.getElementById("logout-btn")

logoutBtn && logoutBtn.addEventListener('click', () => {
    signOut(auth).then(() => {
        localStorage.clear()
        location.href = "index.html"
    }).catch(() => {
        // An error happened.
    });

})



const registerBtn = document.getElementById('register-btn');

registerBtn && registerBtn.addEventListener("click", (e) => {
    e.preventDefault()
    let firstname = document.getElementById("first-name");
    let lastname = document.getElementById("last-name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then(async (userCredential) => {
            try {
                const user = userCredential.user;
                await setDoc(doc(db, "users", user.uid), {
                    firstname: firstname.value,
                    lastname: lastname.value,
                    email: email.value,
                    password: password.value
                });
                Swal.fire({
                    icon: 'success',
                    title: 'User register successfully',
            })
                localStorage.setItem("uid", user.uid)
                location.href = "profile.html"
            } catch (err) {
                console.log(err)
            }
        })
        // .catch((error) => {
        //     const errorMessage = error.message;
        //     Swal.fire({
        //         icon: 'error',
        //         title: 'Oops...',
        //         text: errorMessage,
        //     })
        // });
})


const loginBtn = document.getElementById('login-btn');

loginBtn && loginBtn.addEventListener("click", (e) => {
    e.preventDefault()
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then(async (userCredential) => {
            try {
                Swal.fire({
                    icon: 'success',
                    title: 'User login successfully',
                })
                localStorage.setItem("uid", userCredential.user.uid)
                location.href = "profile.html"
            } catch (err) {
                console.log(err)
            }
        })
        .catch((error) => {
            const errorMessage = error.message;
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: errorMessage,
            })
        });
})

function sub(){
    alert("Sign out Secessfully")
    
}
sub()