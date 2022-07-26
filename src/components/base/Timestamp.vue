<template>
    <sub class="timestamp">
        {{ formattedTimestamp }}
    </sub>
</template>

<script>
export default {
    props: {
        datetime: {
            required: true,
            type: Date
        }
    },
    computed: {
        formattedTimestamp: function () {
            const dt = this.datetime;
            return padStr(dt.getFullYear()) + "-" +
                padStr(1 + dt.getMonth()) + "-" +
                padStr(dt.getDate()) + " " +
                padStr(dt.getHours()) + ":" +
                padStr(dt.getMinutes());
        }
    }
}

function padStr(i) {
    return (i < 10) ? "0" + i : "" + i;
}

</script>

<style scoped>
@import "@/assets/base.css";

.timestamp {
    font-family: 'Inter', sans-serif;
}
</style>