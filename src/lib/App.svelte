<script>
	import ExerciseName from './Components/ExerciseName.svelte';
	import Weights from './Components/Weights.svelte';
	import DateField from './Components/DateField.svelte';
	import UserInfo from './Components/UserInfo.svelte';
	import UserLogin from './Components/UserLogin.svelte';
	import Sets from './Components/Sets.svelte';
	import Reps from './Components/Reps.svelte';
	import { user, userExercise } from './Store/store';
</script>

<main>
	<h1>Track Your Goals</h1>
	<p>Enter your information to track your progress</p>
	<h3>Register/Login:</h3>
	<UserLogin />
	<div id="welcome">Register by creating an account or login above!</div>
	<DateField />
	<ExerciseName /><br><br>
	<Sets />
	<Reps componentName="Reps" exerciseProp={$userExercise.reps} />
	<Reps componentName="Weights" exerciseProp={$userExercise.weights} />
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