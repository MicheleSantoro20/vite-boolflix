<script>
import axios from 'axios';
import { store } from './store.js';
import AppHeader from './components/AppHeader.vue';
import MainPage from './components/MainPage.vue'


export default {
    components: {
      AppHeader,
      MainPage,
    },
    data () {
      return {
        store
      }
    },
    methods: {
      getFilm () {
        let Api ="https://api.themoviedb.org/3/search/movie?api_key=0b7beefdc6081f07c67886d72aa3b026";
        Api += `&query=${this.store.filter}`;
        console.log(this.store.filter);
        console.log(Api);
        axios.get(Api)
        .then(response => {
          this.store.FilmList = response.data.results
        })

        }

      }
    }

</script>

<template>
  <AppHeader @searching="getFilm()"/>
  <MainPage />
</template>

<style scoped lang="scss">
  @use "./styles/general.scss";
</style>
