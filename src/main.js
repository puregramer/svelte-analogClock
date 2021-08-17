import Clock from './components/Clock.svelte';
import mobxStore from "./store/mobxStore";

const clock = new Clock({
    target: document.getElementById('analogClock'),
    props: {
        store: new mobxStore()
    }
});

export default clock;