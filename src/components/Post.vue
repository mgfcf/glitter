<template>
    <component :is="postType" :essay="post" :memo="post" />
</template>

<script>
import Memo from '@/components/Memo.vue'
import EssayPreview from '@/components/EssayPreview.vue'

export default {
    props: {
        post: {
            required: true,
            type: Object
        }
    },
    computed: {
        postType: function () {
            if (this.post.type === "memo") {
                return Memo;
            } else {
                return EssayPreview;
            }
        }
    }
}

</script>
