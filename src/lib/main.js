import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});
// const calendar = new App({
// 	target: document.body
// });

export default app;
// export default calendar;