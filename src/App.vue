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
        let ApiSeries="https://api.themoviedb.org/3/search/tv?api_key=0b7beefdc6081f07c67886d72aa3b026"

        Api += `&query=${this.store.filter}`;
        ApiSeries += `&query=${this.store.filter}`

        axios.get(Api)
        .then(response => {
          this.store.FilmList = response.data.results;
        })
        axios.get(ApiSeries)
        .then(response => {
          this.store.SeriesList = response.data.results;
        })
        }

      }
    }

</script>

<template>
  <div class="body-wrapper">
    <AppHeader @searching="getFilm()"/>
    <MainPage />
  </div>

</template>

<style lang="scss">
@use "./styles/general.scss";

</style>
