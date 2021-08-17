<script context="module">
    import { connect } from "svelte-mobx";
</script>

<script>
    import SecondHand from "./SecondHand.svelte";
    import HourHand from "./HourHand.svelte";
    import MinuteHand from "./MinuteHand.svelte";
    import Tooltip from "./Tooltip.svelte";

    export let store;
    const { autorun } = connect();
    let currentTimeString;
    let hours;
    let minutes;
    let seconds;
    let showTooltip = false;
    autorun(() => {
        currentTimeString = store.currentTimeString;
        hours = store.hours;
        minutes = store.minutes;
        seconds = store.seconds;
    });
</script>

<h1>Analog Clock</h1>
<div class="clockBody" >
    {#each [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55] as minute}
        <div class="mark" style={`transform:rotate(${30 * minute}deg)`}
             on:mouseenter={() => showTooltip = true} on:mouseout={() => showTooltip = false}></div>
    {/each}
    <HourHand hours={hours} minutes={minutes}></HourHand>
    <MinuteHand minutes={minutes} seconds={seconds}></MinuteHand>
    <SecondHand seconds={seconds}></SecondHand>
</div>
{#if showTooltip}
    <Tooltip currentTime={currentTimeString}></Tooltip>
{/if}
<style>
    .clockBody {
        width: 200px;
        height: 200px;
        border: 5px solid #fff;
        border-radius: 50%;
    }
    .mark{
        position: absolute;
        width: 200px;
        height: 200px;
        text-align: center;
    }
    .mark:after{
        content: "";
        position: absolute;
        height: 13px;
        width: 2px;
        top: 3%;
        background: #fff;
    }
</style>