<template>
    <div class="hello">
        <ul v-for="data in apiData" :key="data.id">
            <li>{{data.title}}</li>
        </ul>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        name: "HelloWorld",
        props: {
            msg: String
        },
        data() {
            return {
              apiData:''
            }
        },
        mounted() {
            this.getApi();
        },
        methods: {
            getApi() {
                axios.get('http://localhost:3000/api').then(res=>{
                    this.apiData = res.data
                }).catch(error=>{
                    console.log(error)
                })
            }
        }

    };
</script>

