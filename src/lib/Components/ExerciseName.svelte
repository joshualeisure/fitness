<script>
import {customPlan, exercises, user, userExercise} from '../Store/store'

let newExercise;
function addExercise() {
  $customPlan = [...$customPlan, newExercise];
  console.log("plan", $customPlan);
};

async function savePlan() {
  $userExercise.exercise = $customPlan;
  $userExercise = {...$userExercise, user_id: $user.id}
  console.log("userExercise", $userExercise);
  try {
    const response = await fetch("/api/exercises", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify($userExercise),
    });
    // console.log("plan response", response);
    const { rows } = await response.json();
    console.log("plans-response", rows );
  } catch (error) {
    console.error(error);
  }
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
  This is your plan: {plan};
</p>
{/each}

<button on:click={addExercise}>Add New Exercise</button>
<button on:click={savePlan}>Save Your Plan</button>