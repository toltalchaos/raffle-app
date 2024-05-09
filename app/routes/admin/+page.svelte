<script>
    import { onMount } from 'svelte';

    let raffleEntries = [];

    onMount(async () => {
        try {
            const response = await fetch('/api/get_raffle_entries');
            raffleEntries = await response.json();
        } catch (error) {
            console.error('Error fetching raffle entries:', error);
        }
    });
</script>

<h1>Admin Page</h1>

{#if raffleEntries.length > 0}
    <ul>
        {#each raffleEntries as entry}
            <li>
                <p>Name: {entry.name}</p>
                <p>Age: {entry.age}</p>
                <p>Email: {entry.email}</p>
                <p>Phone Number: {entry.phoneNumber}</p>
            </li>
        {/each}
    </ul>
{:else}
    <p>No raffle entries found.</p>
{/if}