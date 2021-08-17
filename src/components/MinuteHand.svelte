<script>
    export let minutes;
    export let seconds;
</script>

<div class="minutesHand" style={`transform:rotate(${6 * minutes + seconds / 10}deg) translateY(-50%)`}></div>
<style>
    .minutesHand{
        position: absolute;
        height: 70px;
        width: 2px;
        background-color: #fff;
        left: 50%;
        top: 157px;
    }
</style>