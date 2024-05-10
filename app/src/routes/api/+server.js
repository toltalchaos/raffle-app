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
import { getAuth, signInWithCustomToken } from "firebase/auth";


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
    try {
        // Get the user access token from the request headers
        const accessToken = await requestEvent.request.headers.get("authorization");
        const loginTime = await requestEvent.request.headers.get("loginTime");

        if (isValidToken(accessToken, loginTime)) {
            // Access token is valid, proceed with fetching data from Firebase
            const dbref = ref(db);
            const entries = await get(child(dbref, 'entries'));
            if (entries.exists()) {
                return new Response(JSON.stringify(entries.val()), { status: 200 });
            } else {
                return new Response('entries not found', { status: 404 });
            }
        } else {
            // Access token is invalid, return an unauthorized response
            return new Response('Unauthorized', { status: 401 });
        }
    } catch (error) {
        // Handle any errors
        console.error(error);
        return new Response('entries not found', { status: 500 });
    }
}

// Define the POST function to send data to Firebase
export async function POST(requestEvent) {
    try {

        // Get the data from the request body
        const { name, age, email, phone } = await requestEvent.request.json();;        
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


//define a function to validate the user access token
async function isValidToken(accessToken, loginTime) {
    try {
        // Validate the access token
        // const user = await signInWithCustomToken(auth, accessToken);
        // Validate the login time
        // if (user.metadata.lastSignInTime === loginTime) {
        //     return true;
        // } else {
        //     return false;
        // }
        if (accessToken && loginTime < Date.now() - (2 * 60 * 60 * 1000)) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error(error);
        return false;
    }
}