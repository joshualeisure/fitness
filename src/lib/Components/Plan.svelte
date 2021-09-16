<script>
  import {userExercise} from '../Store/store'
  let newPlan;
  function addPlan() {
    $userExercise.plans = [...$userExercise.plans, newPlan];
  }
</script>

<div><h3>Your Plan:</h3>
  <input list="plan" bind:value={newPlan}/>
  <datalist name="plan" id="plan">
    {#each $userExercise.plans as plan}
    <option value={plan}>{plan}</option>
    {/each}
  </datalist>
<button on:click={addPlan}>Save</button>
</div>