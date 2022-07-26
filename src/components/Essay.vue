<template>
    <div>
        <h2>{{ essay.title }}</h2>
        <Timestamp :datetime="essay.timestamp" />
        <p>{{ essay.content }}</p>
    </div>
</template>

<script>
import Timestamp from './base/Timestamp.vue';
export default {
    props: {
        essay: {
            required: true,
            type: Object
        }
    },
    components: { Timestamp }
}
</script>
