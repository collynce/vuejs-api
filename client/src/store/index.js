import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        posts: '',
        title: '',
        isAuthenticated: false,
        status: '',
        token: localStorage.getItem('token') || '',
        user: {}
    },
    mutations: {
        change_state(state, posts) {
            state.posts = posts;
        },
        setIsAuthenticated(state) {
            state.isAuthenticated = true;
        },
        auth_request(state) {
            state.status = 'loading'
        },
        auth_success(state, token, user) {
            state.status = 'success';
            state.token = token;
            state.user = user
        },
        auth_error(state) {
            state.status = 'error'
        },
    },
    actions: {
        userLogin({commit}, user) {
            return new Promise((resolve, reject) => {
                commit('auth_request');
                axios.post('http://localhost:3000/login', user)
                    .then(resp => {
                        const token = resp.data.token;
                        const user = resp.data.user;
                        localStorage.setItem('token', token);
                        axios.defaults.headers.common['Authorization'] = token;
                        commit('auth_success', token, user);
                        resolve(resp)
                    })
                    .catch(err => {
                        commit('auth_error');
                        localStorage.removeItem('token');
                        reject(err)
                    })
            })
        },
        userSignup({commit}, user) {
            return new Promise((resolve, reject) => {
                commit('auth_request');
                axios.post('http://localhost:3000/register', user)
                    .then(resp => {
                        const token = resp.data.token;
                        const user = resp.data.user;
                        localStorage.setItem('token', token);
                        axios.defaults.headers.common['Authorization'] = token;
                        commit('auth_success', token, user);
                        resolve(resp)
                    })
                    .catch(err => {
                        commit('auth_error', err);
                        localStorage.removeItem('token');
                        reject(err)
                    })
            })
        },
        getPosts({commit}) {
            axios.get('http://localhost:3000/api')
                .then(res => res.data)
                .then(posts => {
                    console.log(posts);
                    commit("change_state", posts);
                })
                .catch(err => {
                    console.log(err)
                })
        },
        addPosts({commit},myposts) {
            axios.post("http://localhost:3000/api/post", myposts)
                .then(res=>{
                    console.log(res)
                })
        }
    },
    getters: {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status,
    },
    modules: {}
});
