<script>
  import { user, userExercise, userExerciseCalendar} from '../Store/store'
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
    $userExercise.exercise = [];
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
      } else {
        $userExercise.exercise = [];
      }
      console.log("login-response", $user);
      console.log("date", $userExercise.date);
      document.getElementById("welcome").innerText = "Thank you for coming back, " + rows[0].name + "!";
    }
  } catch (error) {
    console.error(error);
  }
  }
function logout() {
  $user = {};
  $userExercise = {exercise: '', date: '', weights: [0], sets: 1, reps: [0]};
  // window.location.reload();
};
</script>

<label for="name"><h5>Name:</h5></label><br>
<input type='text' bind:value={$user.name}><br>
<label for="email"><h5>Email:</h5></label><br>
<input type='text' bind:value={$user.email}><br>
<label for="password"><h5>Password:</h5></label><br>
<input type='text' bind:value={$user.password}><br><br>
<button type="submit" on:click={register}>Register</button>
<button type="submit" on:click={login}>Login</button><br><br>
<button type="submit" on:click={logout}>Logout</button><br><br>
<p>user: {$user.id}</p>
