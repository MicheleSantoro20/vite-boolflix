<script>
    import { store } from '../store.js';
    export default {
        name: "AppHeader",
        data () {
            return {
                store
            }
        },

}
</script>

<template>
    <header>
        <div class="container">
            <div class="title">BoolFlix</div>
            <div class="filterWrapper">
                <input type="text" placeholder="Cerca un film" v-model="store.filter" >
                <button @click="$emit('searching')">Search</button>
            </div>
        </div>
    </header>
</template>


<style scoped lang="scss">
header {
    background-color: black;
    height: 80px;
}
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    margin: 0px 20px;
}
.title {

    color: red;
    font-size: 30px;
}
</style>