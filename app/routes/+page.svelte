<script>
    function handleSubmit(event) {
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

        submit_raffle_entry(formData);
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

    <button type="submit">Submit</button>
</form>
</div>

<style>


</style>