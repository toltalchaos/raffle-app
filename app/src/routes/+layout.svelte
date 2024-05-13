<script>
// @ts-nocheck
import lucidlogo from '$lib/lucidlogo.png';

</script>

<div class="container">
    <a href="/"><h1>Contest Entry!</h1></a>
    <img src={lucidlogo} alt="Lucid Logo" />
    <slot />
    <hr/>
    <a href="/login">Admin Login</a>
</div>

<style>
    /* reset css styles */
    :global(body) {
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
    }
    a {
        text-decoration: none;
        color: black;
    }
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        padding: 20px;
        max-width: 800px;
    }   
</style>