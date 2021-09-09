<script>
import {customPlan, exercises, user, userExercise} from '../Store/store'
import {handlePostExercise} from '../index'
$:console.log("user", $user);
let newExercise;
function addExercise() {
  $customPlan = [...$customPlan, newExercise];
  console.log("plan", $customPlan);
};
function savePlan() {
  $userExercise.exercise= $customPlan;
  $userExercise = {...$userExercise, user_id: $user.id}
  handlePostExercise($userExercise, "POST", "/api/exercises");
};
</script>

<div><h3>Exercise Name:</h3>
<input list="exercise" bind:value={newExercise}/>
  <datalist name="exercise" id="exercise">
  {#each $exercises as exercise}
  <option value={exercise}>{exercise}</option>
  {/each}
</datalist>
</div><br>

{#each $customPlan as plan}
<p>
  This is your plan {plan};
</p>
{/each}

<button on:click={addExercise}>Add New Exercise</button>
<button on:click={savePlan}>Save Your Plan</button>