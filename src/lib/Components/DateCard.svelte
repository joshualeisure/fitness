<script>
  import Weights from "./Weights.svelte";
  import ExerciseName from "./ExerciseName.svelte";
  import {exercises, userExercise, customPlan} from '../Store/store';
  import { onMount } from 'svelte';
import { each } from "svelte/internal";
  export let cardDate;
  cardDate.date = new Date(cardDate.date);
  console.log("card weight", cardDate.weights)
  // let eLen = $userExercise.exercise.length
  // let text = "<ul>";
  //   for (let i = 0; i < eLen; i++) {
  //     text += "<li>" + $userExercise.exercise[i] + "</li>";
  //   }
  //   text += "</ul>";
    
  // let wLen = $userExercise.weights.length
  // let weightText = "<ul>";
  //   for (let j = 0; j < wLen; j++) {
  //     weightText += "<li>" + $userExercise.weights[j] + "</li>";
  //   }
  //   weightText += "</ul>";
    
  //   onMount(() => {
  //     document.getElementById("exercisePar").innerHTML = text;
  //     document.getElementById("weightPar").innerHTML = weightText;
  //   });
</script>

<div class="container">
  <div class="card">
    <div class="row align-items-start">
      <div class="col-md-3">
        <div class="title">
          <h2>Date</h2>
        </div>
        <div class="dateDisplay">
          <p>{cardDate.date.toLocaleString('default', { month: 'long' })}</p>
          <h3>{cardDate.date.getDate()}</h3>
        </div>
      </div>
      <div class="col">
        <div class="row">
          <div class="col-sm-12 col-md-3">
          <h2>Exercises</h2>
            {#each cardDate.exercise as exercise}
            <span class="exercise" id="exercise">{exercise}</span>      
            {/each}
        </div>
        <div class="col-sm-12 col-md-3">
          <h2>Sets</h2>
            <span class="sets" id="sets">{$userExercise.sets}</span> 
        </div>
        <div class="col-sm-12 col-md-3">
          <h2>Weights</h2>
            {#each cardDate.weights as weight}
              <span class="weight" id="weight">{weight}</span>
            {/each}
        </div>
        <div class="col-sm-12 col-md-3">
          <h2>Reps</h2>
            {#each cardDate.reps as rep}
              <span class="reps" id="reps">{rep}</span>
            {/each}
        </div>
      </div>
    </div>
  </div>
  </div>
</div>

<!-- <div class="card">
  <div class="column" style="background-color: hsl(0, 0%, 100%);">
    <div class="title">
      <h2>Date</h2>
    </div>
    <div class="dateDisplay">
      <p>{cardDate.date.toLocaleString('default', { month: 'long' })}</p>
      <h3>{cardDate.date.getDate()}</h3>
    </div>

  </div> -->
  <!-- <div class="column" style="background-color:#aaa;">
    <h2>Exercises</h2>
      {#each cardDate.exercise as exercise, i}
      <p id="exercisePar">{exercise}</p>      
      {/each}
  </div> -->

  <!-- edit -->
  <!-- <div class="column" style="background-color: hsl(0, 0%, 100%);">
    <h2>Sets</h2>
    <span class="sets" id="sets">{$userExercise.sets}</span> 
  </div>

  <div class="column" style="background-color:#aaa;">
    <h2>Weights</h2>
    {#each cardDate.weights as weight}
    <span class="weight" id="weightPar">{weight}</span>
    {/each}
  </div> -->
<!-- </div> -->

<!-- edit -->
<!-- edit -->
<!-- <div class="column" style="background-color: hsl(0, 0%, 100%);">
  <h2>Reps</h2>
  {#each cardDate.reps as rep}
  <span class="reps" id="reps">{rep}</span>
  {/each}
</div> -->

<style>
  .card {
    /* padding: 5em; */
    margin: 10px;
    background-color: hsl(0, 0%, 100%);
    box-shadow: 0 1px 2px 0 black;
  }
  span {
    font-size: 1.5rem;
    text-align: center;
  }
</style>
