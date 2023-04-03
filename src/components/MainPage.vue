<script>
    import { store } from '../store.js'
    export default {
        name: "MainPage",
        data () {
            return {
                store
            }
        },
        computed: {
            getFlag() {
              return function(country) {
                const flags = {
                "it": "https://www.countryflagicons.com/SHINY/64/IT.png",
                "en": "https://www.countryflagicons.com/SHINY/64/GB.png",
                "de": "https://www.countryflagicons.com/SHINY/64/DE.png",
                "us": "https://www.countryflagicons.com/SHINY/64/US.png",
                };
                return flags[country] || "https://www.countryflagicons.com/SHINY/64/EU.png";
              };
            },
            GetThumb() {
              return function(elemento) {
                const thumb = "https://image.tmdb.org/t/p/original";
                thumb += elemento.poster_path;
                return thumb;

              }
            }
        }
    }
</script>

<template>
<div class="container">
  <div>Film</div>
  <div class="FilmAndSeriesContainer">
    <div class="cardBox" v-for="(element, index) in this.store.FilmList">
        <div class="card" >
            <span class="text">
                <img :src="GetThumb(element.poster_path)" alt="">
            </span>
            <div class="content">
                <h1>{{ element.title }}</h1>
                <h2>{{ element.original_title }}</h2>
                <img :src="getFlag(element.original_language)" alt="">
                <h4>{{ element.vote_average }}</h4>
            </div>
        </div>
    </div>
  </div>
  <div>Serie Tv</div>
  <div class="FilmAndSeriesContainer">
    <div class="cardBox" v-for="(element, index) in this.store.SeriesList">
        <div class="card" >
            <span class="text">
                <img src="" alt="">
            </span>
            <div class="content">
                <h1>{{ element.name }}</h1>
                <h2>{{ element.original_name }}</h2>
                <img :src="getFlag(element.original_language)" alt="">
                <h4>{{ element.vote_average }}</h4>
            </div>
        </div>
    </div>
  </div>
</div>

</template>

<style scoped lang="scss">

.FilmAndSeriesContainer {
    display: flex;
    flex-wrap: wrap;
}

h1 {
    font-size: 15px;
}
.cardBox {
  width: 270px;
  height: 300px;
  position: relative;
  display: grid;
  place-items: center;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 10px 0px,
    rgba(0, 0, 0, 0.5) 0px 2px 25px 0px;
}

.card {
  position: absolute;
  width: 95%;
  height: 95%;
  background: #000814;
  border-radius: 20px;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: #ffffff;
  overflow: hidden;
  padding: 20px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.5) 0px 18px 36px -18px inset;
}

.card h3, span {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  font-weight: 800;
  pointer-events: none;
  opacity: 0.1;
}

.text {
  top: 50%;
}

.card .content h3 {
  font-size: 3rem;
  padding-bottom: 10px;
}

.card .content p {
  font-size: 1.6rem;
  line-height: 25px;
}

.card .content {
  transform: translateY(100%);
  opacity: 0;
  transition: 0.3s ease-in-out;
}

.card:hover .content {
  transform: translateY(0);
  opacity: 1;
}

.cardBox::before {
  content: "";
  position: absolute;
  width: 40%;
  height: 150%;
  background: #40E0D0;
  background: -webkit-linear-gradient(to right, #088c13, #FF8C00, #40E0D0);
  background: linear-gradient(to right, #04a329, #FF8C00, #40E0D0);
  animation: glowing01 5s linear infinite;
  transform-origin: center;
  animation: glowing 5s linear infinite;
}

@keyframes glowing {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}

</style>