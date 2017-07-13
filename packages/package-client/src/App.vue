<template>
    <div id="app">
        Hello {{ name }}!
    </div>
</template>

<script>
    export default {
        name: 'App',

        data() {
            return {
                name: "World"
            }
        }
    }
</script>
