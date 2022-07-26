<template>
    <component :is="postType" :essay="postTargeted" :memo="postTargeted" v-if="postTargeted !== undefined" />
    <p v-else>
        Post does not exist
    </p>
</template>

<script>
import Memo from '@/components/Memo.vue'
import Essay from '@/components/Essay.vue'
import Post from '../components/Post.vue';

export default {
    computed: {
        postType: function () {
            if (this.postTargeted.type === "memo") {
                return Memo;
            }
            else {
                return Essay;
            }
        },
        postTargeted: function () {
            return this.$store.getters.postById(this.$route.params.id);
        }
    },
    components: { Post }
}

</script>
