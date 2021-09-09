<script>
	import ExerciseName from './Components/ExerciseName.svelte';
	import Weights from './Components/Weights.svelte';
	import DateString from './Components/Date.svelte';
	import UserInfo from './Components/UserInfo.svelte';
	import UserLogin from './Components/UserLogin.svelte';
	import { user } from './Store/store';
</script>

<main>
	<h1>Track Your Goals</h1>
	<p>Enter your information to track your progress</p>
	<h3>Register/Login:</h3>
	<UserLogin />
	<div id="welcome">Register by creating an account or login above!</div>
	<DateString />
	<Weights />
	<ExerciseName /><br><br>
	<UserInfo />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>