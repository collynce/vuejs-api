<template>
    <div class="home">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
<!--        <Requests/>-->
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from "@/components/HelloWorld.vue";
    // import Requests from "@/components/Requests.vue";

    export default {
        name: "home",
        components: {
            HelloWorld
        }
    };
</script>
