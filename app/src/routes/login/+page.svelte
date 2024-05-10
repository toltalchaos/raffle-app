<script>
	import { goto } from '$app/navigation';
	export let data; //get the async data from our server file

	let username = '';
	let password = '';

	async function login() {
		try {
			// Authenticate user with Firebase Auth
			const response = await fetch('/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					username: username,
					password: password,
				}
			});
			if (response.ok) {
				// Store user credentials in local storage
				const userData = await response.json();
				localStorage.setItem('userToken', userData.stsTokenManager.accessToken);
				localStorage.setItem('user', JSON.stringify(userData.user));
				localStorage.setItem("loginTime", new Date().getTime());

				goto('/admin');
			}
			else {
				console.error('Login failed:', response);
				throw new Error('Login failed. Please check your username and password.');
			}
		} catch (error) {
			console.error('Login failed:', error);
			alert(error.message);
		}
	}
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
