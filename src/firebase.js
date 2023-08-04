import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: "AIzaSyCCuoWNJggSToq6W0nN5MXyhsDvvhr-oTg",
	authDomain: "finance-management-8f447.firebaseapp.com",
	databaseURL: "https://finance-management-8f447-default-rtdb.firebaseio.com",
	projectId: "finance-management-8f447",
	storageBucket: "finance-management-8f447.appspot.com",
	messagingSenderId: "825828073447",
	appId: "1:825828073447:web:1878b39bc83bc75c512742",
	measurementId: "G-QYZG76LNN4"
  };

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const auth = getAuth(app);

export const signInWithGoogle = () => {
	signInWithPopup(auth, new GoogleAuthProvider())
		.then(res => console.log('Sign In with Google done!'))
		.catch(err => console.log(err)
	);
}

export const signOut = () => {
	auth.signOut()
		.then(res => console.log('Successfully Sign Out.'))
		.catch(err => console.log(err)
	);
}