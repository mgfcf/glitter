<template>
    <Posts :posts="memos" />
</template >

<script>
import Posts from '../components/Posts.vue'

export default {
    computed: {
        memos: function () {
            return this.$store.getters.memos;
        }
    },
    components: { Posts }
}
</script>
