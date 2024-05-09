<script>
    async function handleSubmit(event) {
        event.preventDefault();
        const name = event.target.name.value;
        const age = event.target.age.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;

        const formData = {
            name,
            age,
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
        })

        alert(resp.text());
    }
    
</script>

<div>
<form>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>

    <label for="age">Age:</label>
    <input type="number" id="age" name="age" required>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <label for="phone">Phone Number:</label>
    <input type="tel" id="phone" name="phone" required>

    <button type="submit" on:click={handleSubmit}>Submit</button>
</form>
</div>

<style>


</style>