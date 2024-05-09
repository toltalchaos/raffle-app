import { get, post } from 'svelte-sapper-firebase';

// Import the necessary dependencies

// Define the Firebase configuration
const firebaseConfig = {
    // Your Firebase configuration details here
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Define the GET function to fetch data from Firebase
export async function get(req, res) {
    try {
        // Fetch data from Firebase
        const data = await firebase.database().ref('your-collection').once('value');
        
        // Send the data as a response
        res.end(JSON.stringify(data.val()));
    } catch (error) {
        // Handle any errors
        console.error(error);
        res.statusCode = 500;
        res.end(JSON.stringify({ error: 'Internal Server Error' }));
    }
}

// Define the POST function to send data to Firebase
export async function post(req, res) {
    try {
        // Get the data from the request body
        const { name, email } = req.body;
        
        // Save the data to Firebase
        await firebase.database().ref('your-collection').push({ name, email });
        
        // Send a success response
        res.end(JSON.stringify({ message: 'Data saved successfully' }));
    } catch (error) {
        // Handle any errors
        console.error(error);
        res.statusCode = 500;
        res.end(JSON.stringify({ error: 'Internal Server Error' }));
    }
}