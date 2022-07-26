<template>
    <div class="posts">
        <Post :post="post" v-for="post in posts" v-bind:key="post.timestamp" />
    </div>
</template>

<script>
import Post from './Post.vue';
export default {
    props: {
        posts: {
            required: false,
            type: Array,
            default: undefined
        }
    },
    computed: {
        posts: function () {
            if (this.posts) {
                return this.posts;
            } else {
                return this.$store.getters.posts;
            }
        }
    },
    components: { Post }
}

</script>

<style scoped>
.posts {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
}
</style>