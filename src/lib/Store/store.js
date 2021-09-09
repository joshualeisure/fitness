import { writable } from 'svelte/store';

export const user = writable({});

export const userExercise = writable({
  exercise: '',
  date: '',
  weights: [0]
});

export const customPlan = writable([]);
export const exercises = writable(
  [
    "Squats",
    "Bench Press",
    "Chest Press",
    "Goblet Squats",
    "DB Chest flys",
    "DB Side Lunges",
    "Tricep Reverse Pushdown",
    "Russian Twist",
    "Plank",
    "DB Lateral Raise",
    "DB Incline Press",
    "Bar Tricep Extension",
    "Calf Raises",
    "Shoulder Press",
    "Lower Ab Raises",
    "Tricep Rope Pushdown",
    "Incline Bench Press",
    "DB Row",
    "Sumo Squats",
    "DB Pullover",
    "Good Mornings",
    "Hammer Curl",
    "Bench sit ups",
    "Rear delt raises",
    "Straight Arm Pulldown",
    "Stiff-legged deadlift",
    "Bar Row",
    "Donkey kicks ",
    "Bicep Curl",
    "Bicycles",
    "Shrugs",
    "Deadlift"
  ]
);