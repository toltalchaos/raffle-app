<script>
	let name = '';
	let dateOfBirth = '';
	let email = '';
	let phone = '';

	async function handleSubmit(event) {
		if (new Date(dateOfBirth) > new Date(new Date().getFullYear() - 18, new Date().getMonth(), new Date().getDate())) {
			alert("You must be at least 18 years old to submit the form.");
			return;
		}
		const formData = {
			name,
			dateOfBirth,
			email,
			phone
		};
		// Send form data to server
		const resp = await fetch('/api', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(formData)
		});
		alert(await resp.text());
	}
</script>

<div class="container">
	<form class="entry-form">
		<label for="name"
			>Name:
			<input type="text" id="name" name="name" required bind:value={name} />
		</label>

		<label for="dateOfBirth"
			>Date of Birth:
			<input type="date" id="dateOfBirth" name="dateOfBirth" required bind:value={dateOfBirth} max="{new Date().toISOString().split('T')[0]}" />
		</label>

		<label for="email"
			>Email:
			<input type="email" id="email" name="email" required bind:value={email} />
		</label>

		<label for="phone"
			>Phone Number:
			<input type="tel" id="phone" name="phone" required bind:value={phone} />
		</label>

		<button type="submit" on:click={handleSubmit}>Submit</button>
	</form>
</div>

<style>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 3rem auto;
    }
    .entry-form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    label {
        margin: 0.5rem;
    }
</style>
