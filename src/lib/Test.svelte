<script>
  import {userExercise, exercises} from "$lib/Store/store";
  // export let componentName;
  // export let exerciseProp;

  let newExercise;

  function recreate() {

    const container = document.getElementById("container");
    const wrapper = document.getElementById("wrapper");
    container.appendChild(wrapper.cloneNode(true));
    container.querySelectorAll('#addSet').forEach((event) => {
      event.addEventListener("click", addSets);
    });
    console.log(container.querySelectorAll('#addSet'));
  };

  function addExercise() {
      $userExercise.exercise = [...$userExercise.exercise, newExercise];
      console.log("plan", $userExercise.exercise);
  };
  function addSets() {
      $userExercise.sets += 1;
      $userExercise.reps = [...$userExercise.reps, 0];
      $userExercise.weights = [...$userExercise.weights, 0];
    }
    function removeSets() {
      $userExercise.sets -= 1;
      $userExercise.reps = [...$userExercise.reps.slice(0,$userExercise.reps.length - 1)];
      $userExercise.weights = [...$userExercise.weights.slice(0,$userExercise.weights.length - 1)];
    }
</script>

<div id="container">
    <div id="wrapper">
    <h3>Exercises:</h3>
    <input list="exercise" bind:value={newExercise}/>
      <datalist name="exercise" id="exercise">
      {#each $exercises as exercise, i}
      <option value={exercise}>{i +1}: {exercise}</option>
      {/each}
    </datalist>

      <h3>Sets</h3>
      <h2>{$userExercise.sets}</h2>
      <button id="addSet" on:click={addSets}>Add Set</button>
      <button id="removeSet" on:click={removeSets}>Remove Set</button>

      <div><h3>Reps</h3>
        {#each $userExercise.reps as rep}
         <input type="number" bind:value={rep}>
        {/each}
      </div>

  </div>
</div>

  <button on:click={addExercise}>Add New Exercise</button>
  <button id="recreateId" on:click={recreate}>Add New Field</button>
