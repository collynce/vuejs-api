<template>
    <div class="grid-container">
        <div class="holder">
<!--            <p>{{$route.params.id}}</p>-->
            <div>
                <form @submit.prevent="addPost">
                    <input type="text" placeholder="Title" v-model="form.title" name="title" required>

                    <textarea placeholder="Body" v-model="form.body" name="body" required/>
                    <button class="button" type="submit">ADD POST</button>
                </form>
            </div>
            <div class="grid-x grid-margin-x" >
                <div class="cell medium-4" v-for="data in posts" :key="data.id">
                    <div class="card">
                        <div class="card-divider">
                            {{data.title}}
                        </div>
                        <div class="card-body">
                            {{data.body}}
                        </div>
                    </div>
                </div>
            </div>

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
        mounted() {
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
                this.form = {}
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
    input, textarea {
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
