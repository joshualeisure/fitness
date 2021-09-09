<script>
  import {user} from '../Store/store'
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
    document.getElementById("welcome").innerText = "Thank you for joining, " + $user.name + "!";
  } catch (error) {
    console.error(error);
  }
  };

  async function login() {
    try {
    await fetch("api/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify($user),
    });
    document.getElementById("welcome").innerText = "Thank you for coming back, " + $user.name + "!";
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
