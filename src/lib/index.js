

// Post-Exercise

export async function handlePostExercise(userExercise, method, action) {
  try {
    console.log("here in post-exercise", userExercise);
    const response = await fetch(action, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userExercise),
    });
    console.log("postResponse", response);
    const { rows } = await response.json();
    console.log("row", rows );
  } catch (error) {
    console.error(error);
  }
};

// Post-Exercise (update DB)

// export async function handlePostExercise(user, method, action) {
//   try {
//     console.log("here", user);
//     const response = await fetch(action, {
//       method,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(user),
//     });
//     console.log("postResponse", response);
//     const { rows } = await response.json();
//     console.log("row", rows );
//   } catch (error) {
//     console.error(error);
//   }
// };


