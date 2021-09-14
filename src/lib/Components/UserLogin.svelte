<script>
  import {customPlan, user, userExercise, userExerciseCalendar} from '../Store/store'
  async function register() {
    try {
      const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify($user),
    });
    const { rows } = await response.json();
    console.log("register-response", rows);
    $user = {...$user, id: rows.id}
    $customPlan = [];
    document.getElementById("welcome").innerText = "Thank you for joining, " + $user.name + "!";
  } catch (error) {
    console.error(error);
  }
  };

  async function login() {
    try {
    const response = await fetch("api/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify($user),
    });
    const { rows } = await response.json();
    if (rows.length) {
      $user = {...$user, id: rows[0].id}
      if (rows[0].exercise) { 
        $userExercise = { exercise: rows[0].exercise, date: rows[0].date, weights: rows[0].weights, sets: rows[0].sets, reps: rows[0].reps }
        console.log("login rows", rows);
        $userExerciseCalendar = rows;
        $customPlan = $userExercise.exercise;
      } else {
        $customPlan = [];
      }
      console.log("login-response", $user);
      console.log("date", $userExercise.date);
      document.getElementById("welcome").innerText = "Thank you for coming back, " + rows[0].name + "!";
    }
  } catch (error) {
    console.error(error);
  }
  }
  
</script>

<label for="name">Name:</label><br>
<input type='text' bind:value={$user.name}><br>
<label for="email">Email:</label><br>
<input type='text' bind:value={$user.email}><br>
<label for="password">Password:</label><br>
<input type='text' bind:value={$user.password}><br><br>
<button type="submit" on:click={register}>Register</button>
<button type="submit" on:click={login}>Login</button><br><br>
<p>user: {$user.id}</p>
