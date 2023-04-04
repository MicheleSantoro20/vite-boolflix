<script>
    import { store } from '../store.js'


    export default {
        name: "MainPage",
        data () {
            return {
                store
            }
        },
        methods: {
            Rating(element) {
                let Rate = Math.ceil(element / 2);
                return Rate
              },
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
                let thumb = "https://image.tmdb.org/t/p/original";
                thumb += elemento.poster_path;
                if (elemento.poster_path == null) {
                  thumb = "https://www.onthisday.com/images/people/homer-simpson-medium.jpg";
                }
                return thumb;

              }
            },

        }
    }
</script>

<template>
<div class="container">

  <div class="divider">Film</div>

  <!--Card relative ai film-->
  <div class="FilmAndSeriesContainer">
    <div class="cardBox" v-for="(element, index) in this.store.FilmList">
        <div class="card" >
            <span class="text">
                <img class="thumb" :src="GetThumb(element)" alt="">
            </span>
            <div class="content">
                <h1>{{ element.title }}</h1>
                <h2>{{ element.original_title }}</h2>
                <img :src="getFlag(element.original_language)" alt="">
                <h4>
                  <i class="fa-star" :class="Rating(element.vote_average) >= 1? 'fa-solid':'fa-regular' "></i>
                  <i class="fa-star" :class="Rating(element.vote_average) >= 2? 'fa-solid':'fa-regular' "></i>
                  <i class="fa-star" :class="Rating(element.vote_average) >= 3? 'fa-solid':'fa-regular' "></i>
                  <i class="fa-star" :class="Rating(element.vote_average) >= 4? 'fa-solid':'fa-regular' "></i>
                  <i class="fa-star" :class="Rating(element.vote_average) == 5? 'fa-solid':'fa-regular' "></i> 
                </h4>
            </div>
        </div>
    </div>
  </div>


  <div class="divider">Serie Tv</div>

    <!--Card relative alle Serie tv-->
  <div class="FilmAndSeriesContainer">
    <div class="cardBox" v-for="(element, index) in this.store.SeriesList">
        <div class="card" >
            <span class="text">
                <img class="thumb" :src="GetThumb(element)" alt="">
            </span>
            <div class="content">
                <h1>{{ element.name }}</h1>
                <h2>{{ element.original_name }}</h2>
                <img :src="getFlag(element.original_language)" alt="">
                <h4>
                  <i class="fa-star" :class="Rating(element.vote_average) >= 1? 'fa-solid':'fa-regular' "></i>
                  <i class="fa-star" :class="Rating(element.vote_average) >= 2? 'fa-solid':'fa-regular' "></i>
                  <i class="fa-star" :class="Rating(element.vote_average) >= 3? 'fa-solid':'fa-regular' "></i>
                  <i class="fa-star" :class="Rating(element.vote_average) >= 4? 'fa-solid':'fa-regular' "></i>
                  <i class="fa-star" :class="Rating(element.vote_average) == 5? 'fa-solid':'fa-regular' "></i> 
                </h4>
            </div>
        </div>
    </div>
  </div>
</div>

</template>

<style scoped lang="scss">

.thumb {
  width: 100%;
}
.FilmAndSeriesContainer {
    display: flex;
    justify-content: space-around;
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
  margin: 10px;
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
  opacity: 1;
  
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
  background: -webkit-linear-gradient(to right, #8c1308, #0004ff, #9b1003);
  background: linear-gradient(to right, #ffffff, #0004ff, #9b1003);
  animation: glowing01 5s linear infinite;
  transform-origin: center;
  animation: glowing 5s linear infinite;
}

.card:hover span {
    opacity: 0.1;
    transition: 0.3s ease-in-out
}

@keyframes glowing {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}

.divider {
  font-size: 50px;
  color: #0004ff;
  margin: 50px 100px;
  font-family: 'Orbitron', sans-serif;
}

</style>