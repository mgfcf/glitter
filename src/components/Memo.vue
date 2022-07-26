<template>
    <div class="memo">
        <p>{{ memo.content }}</p>
        <Timestamp class="timestamp" :datetime="memo.timestamp" />
    </div>
</template>

<script>
import Timestamp from './base/Timestamp.vue';
export default {
    props: {
        memo: {
            required: true,
            type: Object
        }
    },
    components: { Timestamp }
}

</script>

<style scoped>
@import "@/assets/base.css";

.memo {
    border: 0.5px solid var(--color-border);
    border-radius: .5rem;
    padding: 0.5rem 1rem;
    width: 25rem;
    max-width: 25rem;
    margin-left: 5rem;
    /* box-shadow: -0.4rem 0.4rem 1.1rem black; */
}

.timestamp {
    float: right;
}
</style>