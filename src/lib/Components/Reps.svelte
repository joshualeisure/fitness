<script>
  import {userExercise} from '../Store/store';
  export let componentName;
  export let exerciseProp;
  console.log($userExercise.reps)
 
</script>

 <div><h3>{componentName}</h3>
   {#each exerciseProp as rep}
    <input type="number" bind:value={rep}>
   {/each}
</div>
