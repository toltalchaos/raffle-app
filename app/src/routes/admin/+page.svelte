<script>
	import { onMount } from 'svelte';

	let raffleEntries = null;
    let chosenEntry = null;

    async function chooseRandom() {
        const keys = Object.keys(raffleEntries);
        const randomIndex = Math.floor(Math.random() * keys.length);
        chosenEntry = raffleEntries[keys[randomIndex]];
    }

	onMount(async () => {
		try {
			const response = await fetch('/api', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					username: localStorage.getItem('username') || '',
					password: localStorage.getItem('password') || ''
				}
			});
            
			raffleEntries = await response.json();
			console.log(raffleEntries);
		} catch (error) {
			console.error('Error fetching raffle entries:', error);
		}
	});
</script>

<h1>Admin Page</h1>
<div class="container">
    {#if chosenEntry}
    <div class="chosen-entry">
        <h2>Chosen Entry</h2>
        <p>Name: {chosenEntry.name}</p>
        <p>Age: {chosenEntry.age}</p>
        <p>Email: {chosenEntry.email}</p>
        <p>Phone Number: {chosenEntry.phone}</p>
    </div>
    {/if}
    
    {#if raffleEntries}
    <button on:click={chooseRandom}>Choose Random Entry</button>
        <ul>
            {#each Object.keys(raffleEntries) as entryKey}
                <li>
                    <p>Name: {raffleEntries[entryKey].name}</p>
                    <p>Age: {raffleEntries[entryKey].age}</p>
                    <p>Email: {raffleEntries[entryKey].email}</p>
                    <p>Phone Number: {raffleEntries[entryKey].phone}</p>
                </li>
            {/each}
        </ul>
    {:else}
        <p>No raffle entries found.</p>
    {/if}
</div>


    <style>
        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        ul {
            list-style-type: none;
            padding: 0;
        }

        li {
            border: 1px solid #ccc;
            margin: 10px;
            padding: 10px;
        }

        .chosen-entry {
            margin-top: 20px;
            border: 1px solid #ccc;
            padding: 10px;
        }
    </style>
