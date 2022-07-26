import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    state() {
        return {
            posts: []
        }
    },
    getters: {
        memos(state) {
            return state.posts.filter(post => post.type === "memo")
        },
        essays(state) {
            return state.posts.filter(post => post.type === "essay")
        },
        posts(state) {
            return state.posts
        },
        postById: (state) => (id) => {
            return state.posts.find((post) => post.id === id)
        }
    },
    mutations: {
        loadPosts(state) {
            state.posts = [
                {
                    id: "9f3984jg",
                    type: "memo",
                    timestamp: new Date("2017-01-26"),
                    title: "",
                    preview: "",
                    content: "OMG, mein erstes Memo!"
                },
                {
                    id: "dsf54",
                    type: "memo",
                    timestamp: new Date("2018-01-26"),
                    title: "",
                    preview: "",
                    content: "Krass, noch ein Memo"
                },
                {
                    id: "98s7df87s9f",
                    type: "memo",
                    timestamp: new Date("2019-01-26"),
                    title: "",
                    preview: "",
                    content: "Neulich beim ÖPNV!"
                },
                {
                    id: "20s0ss",
                    type: "essay",
                    timestamp: new Date("2017-02-26"),
                    title: "Wie die Arbeitswelt sich wandelt",
                    preview: "Manchmal ändert sich die Welt im großen Stil. Momentan können wir genau das in der Arbeitswelt beobachten. So sind nicht nur Arbeitsplätze gefährdet, sondern es ist auch viel innovation am Start.",
                    content: "AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH"
                },
                {
                    id: "as47q11il",
                    type: "essay",
                    timestamp: new Date("2020-05-26"),
                    title: "Die Spuren von Corona",
                    preview: "Manchmal ändert sich die Welt im großen Stil. Momentan können wir genau das in der Arbeitswelt beobachten. So sind nicht nur Arbeitsplätze gefährdet, sondern es ist auch viel innovation am Start.",
                    content: "AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH AH"
                },
            ];
        }
    }
})

export default store
