<script>
    export let seconds;
</script>

<div class="secondHand" style={`transform:rotate(${6 * seconds}deg) translateY(-50%)`}></div>

<style>
    .secondHand{
        position: absolute;
        height: 85px;
        width: 1px;
        background-color: #ff9900;
        left: 50%;
        top: 150px;
    }
</style>