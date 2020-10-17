<template>
    <div id = "app">
        <Form />
    </div>
</template>

<script>
    import Form from '../components/Form';
    export default {
        components: {
            Form
        },
        data() {
            return {}
        },
        methods: {}
    }
</script>

<style lang = 'scss'>

    * {
        box-sizing: border-box;
        margin: 0; 
        padding: 0;
    }

    html,
    body {
        height: 100%;
        font-family: sans-serif;
    }
</style>