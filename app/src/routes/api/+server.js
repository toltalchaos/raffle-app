// @ts-nocheck
import {
	PRIVATE_FIREBASE_API_KEY,
	PRIVATE_FIREBASE_AUTH_DOMAIN,
	PRIVATE_FIREBASE_PROJECT_ID,
	PRIVATE_FIREBASE_STORAGE_BUCKET,
	PRIVATE_FIREBASE_MESSAGING_SENDER_ID,
	PRIVATE_FIREBASE_APP_ID,
	PRIVATE_FIREBASE_MEASUREMENT_ID
} from '$env/static/private';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, child, get } from 'firebase/database';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

// Import the necessary dependencies

// Define the Firebase configuration
const firebaseConfig = {
	apiKey: PRIVATE_FIREBASE_API_KEY,
	authDomain: PRIVATE_FIREBASE_AUTH_DOMAIN,
	projectId: PRIVATE_FIREBASE_PROJECT_ID,
	storageBucket: PRIVATE_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: PRIVATE_FIREBASE_MESSAGING_SENDER_ID,
	appId: PRIVATE_FIREBASE_APP_ID,
	measurementId: PRIVATE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const firestoreApp = getFirestore(app);
const db = getDatabase(app);
const auth = getAuth(app);

// Define the GET function to fetch data from Firebase
export async function GET(requestEvent) {
	const username = await requestEvent.request.headers.get('username');
	const password = await requestEvent.request.headers.get('password');
	try {
		const entryData = await signInWithEmailAndPassword(auth, username, password)
			.then(async (userCredential) => {
				// Now you can read from the database
				const dbref = ref(db);
				const entries = await get(child(dbref, 'entries'));
				return new Response(JSON.stringify(entries.val()));
			})
			.catch((error) => {
				var errorCode = error.code;
				var errorMessage = error.message;
				// Handle Errors here.
				throw new Error(errorCode + errorMessage);
			});
		return entryData;
	} catch (error) {
		console.log(error);
		return new Response('ERROR');
	}
}

// Define the POST function to send data to Firebase
export async function POST(requestEvent) {
	try {
		// Get the data from the request body
		const { name, age, email, phone } = await requestEvent.request.json();
		// Save the data to Firebase
         await set(ref(db, 'entries/' + name + phone), {
			name: name,
			age: age,
			email: email,
			phone: phone
		});
		// Send a success response
		return new Response('contest entered successfully! ' + name, { status: 200 });
	} catch (error) {
		// Handle any errors
		console.error(error);
		return new Response('Invalid entity', { status: 400 });
	}
}
