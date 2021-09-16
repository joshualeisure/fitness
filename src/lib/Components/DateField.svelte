<script>
    import {userExercise} from '../Store/store';

	let now = new Date();
	
	let date = now.toISOString().split("T")[0];
    $userExercise.date = date

    // $userExercise.date = new Date(now.getTime() - (now.getTimezoneOffset() * 60000 )).toISOString().substring(0, 10);

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


