<script>
import {userExercise} from '../Store/store'

function addWeight() {
  $userExercise.weights = [...$userExercise.weights, 0];
}
function removeWeight() {
  $userExercise.weights = [...$userExercise.weights.slice(0,$userExercise.weights.length - 1)];
}
// $: weightTotal = $weights.reduce((total, current) => total + current, 0); 

</script>

<div><h3>Weights</h3>
{#each $userExercise.weights as weight}
  <input type="number" bind:value={weight}>
{/each}
<button on:click={addWeight}>Add Weight</button>

<button on:click={removeWeight}>Remove Weight</button>
</div>











































<!-- {#if weightTotal >= 200}
  <p class="heavy">This is heavy</p>
{:else if weightTotal > 100}
  <p class="medium">This is medium</p>
{:else}
  <p class="light">This is light</p>
{/if} -->
<!-- 
<style>
  .heavy {
    background-color: red;
    padding: 5%;
    font-size: 3em;
  }

  .medium {
    background-color: yellow;
    padding: 5%;
    font-size: 2em;
  }

  .light {
    background-color: green;
    padding: 5%;
  }
</style> -->