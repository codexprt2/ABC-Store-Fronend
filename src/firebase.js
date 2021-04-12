import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDnlygkogs2hQd8YigZQoimjyNmSJx_TgQ",
	authDomain: "abc-store-e3c1d.firebaseapp.com",
	projectId: "abc-store-e3c1d",
	storageBucket: "abc-store-e3c1d.appspot.com",
	messagingSenderId: "678901132677",
	appId: "1:678901132677:web:4e60ca35dc3fcf3278e8ec",
	measurementId: "G-7REDFP03ST",
};
firebase.initializeApp(firebaseConfig);
export default firebase;
export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
	auth
		.signInWithPopup(googleProvider)
		.then((res) => {
			console.log(res.user);
		})
		.catch((error) => {
			console.log(error.message);
		});
};
export const logOut = () => {
	auth
		.signOut()
		.then(() => {
			console.log("logged out");
		})
		.catch((error) => {
			console.log(error.message);
		});
};
