<script>
	import { goto } from '$app/navigation';

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
					password: password
				}
			});
			console.log('Login response:', response);
			if (response.ok && response.status === 200) {
				// Store user credentials in local storage
				localStorage.setItem('username', username);
				localStorage.setItem('password', password);
				localStorage.setItem('loginTime', new Date().getTime());

				goto('/admin');
			} else {
				throw new Error('Login failed. Please check your username and password.');
			}
		} catch (error) {
			alert(error.message);
		}
	}
</script>

<div >
	<h1>Login</h1>
	<form on:submit|preventDefault={login} class="the-form">
		<label>
			Email:
			<input type="text" bind:value={username} />
		</label>
		<label>
			Password:
			<input type="password" bind:value={password} />
		</label>
		<button type="submit">Login</button>
	</form>
</div>

<style>
	.the-form{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	label {
		display: flex;
		flex-direction: column;
		margin: 1rem;
	}
</style>
