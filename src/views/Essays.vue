<template>
    <Posts :posts="essays" />
</template >

<script>
import Posts from '../components/Posts.vue'

export default {
    computed: {
        essays: function () {
            return this.$store.getters.essays;
        }
    },
    components: { Posts }
}
</script>
