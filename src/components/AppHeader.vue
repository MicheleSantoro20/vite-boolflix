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
            <div class="headerRight">
                <div class="logo">BoolFlix</div>
                <button class="navButtons">Generi</button>
                <button class="navButtons">Tutti i film</button>
                <button class="navButtons">Tutte le serie tv</button>
            </div>

            <div class="filterWrapper">
                <input class="searchbar" type="text" placeholder="Cerca un film" v-model="store.filter" >
                <button class="searchButton" @click="$emit('searching')">Search</button>
            </div>
        </div>
    </header>
</template>


<style scoped lang="scss">

.headerRight {
    display: flex;
    align-items: center;
}

.navButtons {
    margin: 0px 20px;
    background-color: transparent;
    color: white;
    border: none;
    cursor: pointer;
}

.navButtons:active {
    color: red;
}

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
.logo {
    font-family: 'Orbitron', sans-serif;
    color: red;
    font-size: 30px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
}

.logo:hover {
    text-shadow: #FFF 0px 0px 5px, #FFF 0px 0px 10px, #FFF 0px 0px 15px, #FF2D95 0px 0px 20px, #FF2D95 0px 0px 20px, #FF2D95 0px 0px 30px, #FF2D95 0px 0px 40px, #FF2D95 0px 0px 60px;;
}

.searchButton {
    margin: 0px 10px;
    padding: 5px;
    border-radius: 10px;
    border: 1px solid white;
    background-color: transparent;
    color: white;
    transition: 0.3s ease-in-out;

}
.searchButton:hover {
    border: 1px solid gray;
    background-color: white;
    color: red;

}

.searchbar {
    padding: 5px 10px;
    background-color: transparent;
    color: white;
    border-radius: 10px;
    border: 1px solid white;
}

</style>