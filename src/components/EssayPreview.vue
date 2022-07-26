<template>
    <router-link :to="fullEssayLink">
        <h2>{{ essay.title }}</h2>
        <Timestamp :datetime="essay.timestamp" />
        <p class="preview">{{ essay.preview }}</p>
    </router-link>
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
    computed: {
        fullEssayLink: function () {
            return "/p/" + this.essay.id;
        }
    },
    components: { Timestamp }
}
</script>

<style scoped>
.preview {
    font-weight: 300;
}
</style>
