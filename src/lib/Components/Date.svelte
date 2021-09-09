<script>
    import {userExercise} from '../Store/store';

	let now = new Date();
	
	$: date = new Date(now.getTime() - (now.getTimezoneOffset() * 60000 )).toISOString().split("T")[0];
    $userExercise.date = date

</script>

<label>
<input type=date bind:value={$userExercise.date}>
</label>



<!-- <script>
	import { onMount } from 'svelte';
    import {userExercise} from '../Store/store';
	
	let now = new Date(), month, day, year;
	let date;
	let dates;

	onMount(()=> {
        month = '' + (now.getMonth() + 1),
        day = '' + now.getDate(),
        year = now.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    dates = [year, month, day].join('-');
    date = dates.toISOString();
	})
</script>

<div><h3>Date:</h3>
<input type=date bind:value={$userExercise.date}>
</div> -->

<!-- <label for="name">Name:</label><br>
<input type='text' bind:value={$user.name}><br>
<label for="email">Email:</label><br>
<input type='text' bind:value={$user.email}><br>
<label for="password">Password:</label><br>
<input type='text' bind:value={$user.password}><br><br>
<button type="submit" on:click={register}>Register</button>
<button type="submit" on:click={login}>Login</button><br><br> -->
