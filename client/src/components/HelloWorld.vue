<template>
    <div class="hello">
        <div class="holder">
<!--            <p>{{$route.params.id}}</p>-->
            <div>
                <form>
                    <input type="text" placeholder="Title" v-model="form.title" name="title">
                    <input type="text" placeholder="Body" v-model="form.body" name="body">
                </form>
            </div>
            <button @click="addPost">ADD POST</button>
            <div></div>
            <ul v-for="data in posts" :key="data.id">
                <li>
                    {{data.title}}
                    {{data.body}}
                    <router-link :to="`/api/`+ data.id">Go Here</router-link>
                </li>
            </ul>
        </div>

    </div>
</template>
<script>
    import {mapState} from "vuex";

    export default {
        name: "HelloWorld",
        props: {
            msg: String
        },
        data() {
            return {
                apiData: '',
                skill: '',
                form: {}
            }
        },
        created() {
            this.getPosts();
        },
        computed: mapState([
            'posts',
        ]),
        methods: {
            getPosts() {
                this.$store.dispatch('getPosts');
            },
            addPost() {
                this.$store.dispatch('addPosts', this.form);
                this.getPosts()
            }
        }

    };
</script>

<style scoped>
    .holder {
        background: #fff;
    }
    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }
    ul li {
        padding: 20px;
        font-size: 1.3em;
        background-color: #e0edf4;
        border-left: 5px solid #3eb3f6;
        margin-bottom: 2px;
        color: #3e5252;
    }
    p {
        color: gray;
        padding: 30px 0;
        text-align: center;
    }
    .container {
        box-shadow: 0px 0px 40px lightgray;
    }
    input {
        width: calc(100% - 40px);
        border: 0;
        padding: 20px;
        font-size: 1.3em;
        background-color: #323333;
        color: #687f7f;
    }
    body{
        background-color: #eeeeee;
        display: grid;
        grid-template-rows: auto;
        justify-items: center;
        align-items: center;
    }
    body, html {
        margin: 0;
        height: 100%;
    }
    #app {
        width: 50%;
    }
</style>
