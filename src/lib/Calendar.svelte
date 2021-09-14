<script>
  import DateCard from "$lib/Components/DateCard.svelte";
  import Date from "$lib/Components/DateField.svelte";
  import { userExerciseCalendar } from "./Store/store";
  
</script>
{#each $userExerciseCalendar as cardDate}
  <DateCard {cardDate} /> 
  <!-- <div class="column"></div>
  <div class="column"></div>
  <div class="column"></div> -->
{/each}

<style>
  /* .column {
    float: left;
    width: 33.33%;
    box-shadow: 0 1px 1px 0 black;
    padding: 1em;
    margin: 2px;
    background-color: hsl(0, 0%, 100%);
    box-shadow: 0 1px 1px 0 black;
    } */
</style>