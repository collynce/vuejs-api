<template>
    <div class="hello">
        <ul v-for="data in apiData" :key="data.id">
            <li>{{data.title}}</li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: "HelloWorld",
        props: {
            msg: String
        },
        data() {
            return {
                apiData: ''
            }
        },
        created() {
            this.getApi();
        },
        methods: {
            getApi() {
                fetch("https://jsonplaceholder.typicode.com/posts")
                    .then(response => response.json())
                    .then(response => {
                        this.apiData = response;
                        console.log(this.apiData)
                    })
            }
        }

    };
</script>

