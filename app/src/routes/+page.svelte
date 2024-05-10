<script>
    let name = '';
    let age = '';
    let email = '';
    let phone = '';


    async function handleSubmit(event) {
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
        });
        alert(await resp.text());
    }
    
</script>

<div>
<form>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required bind:value={name}>

    <label for="age">Age:</label>
    <input type="number" id="age" name="age" required bind:value={age}>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required bind:value={email}>

    <label for="phone">Phone Number:</label>
    <input type="tel" id="phone" name="phone" required bind:value={phone}>

    <button type="submit" on:click={handleSubmit}>Submit</button>
</form>
</div>

<style>


</style>