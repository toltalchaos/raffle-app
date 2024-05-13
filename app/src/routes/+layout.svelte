<script>
// @ts-nocheck

</script>

<div>
    <a href="/"><h1>Contest Entry!</h1></a>
    <img src="../static/lucidlogo.png" alt="Lucid Logo" />
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
</style>