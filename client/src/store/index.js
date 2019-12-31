import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        posts: '',
        title: '',
        user: null,
        isAuthenticated: false,
    },
    mutations: {
        changeState(posts, state) {
            state.posts = posts;
        },
        setIsAuthenticated(state) {
            state.isAuthenticated = true;
        },
    },
    actions: {
        userLogin({commit},user){

        },
        getPosts(commit, state){
            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(res => state.posts = res.data)
                .catch(err => {
                    console.log(err)
                })
        }
    },
    getters: {
        isAuthenticated(state) {
            return state.user !== null && state.user !== undefined;
        }
    },
    modules: {}
});
