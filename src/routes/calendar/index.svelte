<script>
  import DateCard from "$lib/Components/DateCard.svelte";
  let dates = [0, 1, 2, 3, 4, 5];
</script>
<div class="calendar">
{#each dates as date }
  <DateCard {date} />




  
{/each}
</div>