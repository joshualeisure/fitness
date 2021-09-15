<script>
import {userExercise} from '../Store/store';

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

<div class="container">
  <h3>Sets</h3>
  <div class="row align-items-start">
    <h2>{$userExercise.sets}</h2><br><br>
    <div class="col">
      <button on:click={addSets}>+ Set</button>
    </div>
    <div class="col">
      <button on:click={removeSets}>- Set</button>
    </div>
  </div>
</div>

 
 

