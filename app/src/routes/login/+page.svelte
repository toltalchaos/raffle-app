<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let username = '';
	let password = '';

	async function login() {
		console.log('Logging in...', username, password);
		try {
			// Authenticate user with Firebase Auth
			const response = await firebase.auth().signInWithEmailAndPassword(username, password);
			console.log('Login successful:', response);
			// Store user credentials in local storage
			localStorage.setItem('user', JSON.stringify(response.user));

			// Redirect to home page or perform any other action
			// Redirect to home page or perform any other action
			goto('/admin');
		} catch (error) {
			console.error('Login failed:', error);
			// Handle login error
			//https://firebase.google.com/docs/auth/web/password-auth#sign_in_a_user_with_an_email_address_and_password
			// ...
		}
	}

	onMount(() => {
		// Initialize Firebase SDK
		firebase.initializeApp({
			// Your Firebase configuration
			// ...
		});
	});
</script>

<main>
	<h1>Login</h1>
	<form on:submit|preventDefault={login}>
		<label>
			Username:
			<input type="text" bind:value={username} />
		</label>
		<label>
			Password:
			<input type="password" bind:value={password} />
		</label>
		<button type="submit">Login</button>
	</form>
</main>

<style>
	/* Your CSS styles */
</style>
