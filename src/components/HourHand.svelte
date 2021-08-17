<script>
    export let hours;
    export let minutes;
</script>

<div class="hoursHand" style={`transform:rotate(${30 * hours + minutes / 2}deg) translateY(-50%)`}></div>
<style>
    .hoursHand{
        position: absolute;
        height: 55px;
        width: 3px;
        background-color: #999;
        left: 50%;
        top: 165px;
    }
</style>