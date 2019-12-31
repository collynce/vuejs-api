<template>
    <div @click="postData()">
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "Requests",
        data() {
            return {
                getData: '',
                email: '',
                password: ''
            }
        },
        methods: {
            getApi() {
                axios.get('https://jsonplaceholder.typicode.com/posts')
                    .then(res => this.getData = res.data)
                    .catch(err => {
                        console.log(err)
                    })
            },

            postData() {
                axios.post('https://jsonplaceholder.typicode.com/posts', {
                    "userId": 1,
                    "id": 103,
                    "title": "This is the weekly report",
                    "body": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto" +
                            "cupiditate eos id rem veritatis voluptatem. A aspernatur ducimus eaque nulla " +
                            "possimus, quasi quidem " +
                            "repudiandae sed sint voluptatibus!\n"
                }).then(res => {
                    console.log(res.data)
                }).catch(error => {
                    console.log(error)
                });
            }
        }
    }
</script>

<style scoped>

</style>
