<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const information = ref([]);
const imageBaseUrl = '/images/Naruto/BannerNaruto.png';
const poster = ref('');


onMounted(async () => {
    let response = await axios.get(
        'https://api.themoviedb.org/3/tv/46260?api_key=34d906537bd517d4c4e627bee6f0fbb0&language=pt-BR',
        {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNGQ5MDY1MzdiZDUxN2Q0YzRlNjI3YmVlNmYwZmJiMCIsIm5iZiI6MTc1OTQ0Mzc0Mi4zODIwMDAyLCJzdWIiOiI2OGRlZmIxZTBkYjJjNDdmMmUzYjhhMTYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.WdZxeGJU4JZyVewsfZW2SFxSW--WQHb3tMg5jqXarxA`,
            },
        },
    );
    information.value = response.data;
    poster.value = `https://image.tmdb.org/t/p/original/jYOEWMq420a2fqrsm0jaRcwPmIs.jpg`;
    console.log(information.value);
});
</script>

<template>
    <section :style="{ backgroundImage: `url(${imageBaseUrl})` }" class="banner">
    </section>

    <section class="informacoes">
        <div>
            <img :src="poster" alt="Poster do filme" />
        </div>
        <div>
            <h1 class="nome">{{ information.name }} {{ information.original_name }}</h1>
            <p class="data">{{ information.first_air_date }}</p>
            <p class="sinopse">{{ information.overview }}</p>
            <button>Ver filmes</button>
        </div>
    </section>


</template>


<style scoped>
.banner {
    height: 30vh;
    background-size: cover;
    background-position: 20% 50%;
    display: flex;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.2);
    background-blend-mode: darken;
}

.banner div {
    list-style: none;
    margin-left: 5vw;
    padding: 20px 20px;
    width: 35%;
    background-color: #FFF;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.informacoes {
    display: flex;
    gap: 20px;
    margin: 2vw 8vw;
}

.informacoes img {
    width: 300px;
    border-radius: 200px;
    margin-right: 3vw;
}

.informacoes h1 {
    font-size: 3rem;
    margin: 3vw 0 1vw 0;
    font-weight: bold;
    --bg-size: 400%;
    --color-one: #ffcc00;
    --color-two: #ff6600;
    background: linear-gradient(90deg,
            var(--color-one),
            var(--color-two),
            var(--color-one)) 0 0 / var(--bg-size) 100%;

    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;

    animation: move-bg 8s infinite linear;
}

@keyframes move-bg {
    0% {
        background-position: 0 0;
    }

    100% {
        background-position: var(--bg-size) 0;
    }
}

.informacoes .sinopse {
    font-size: 1.2rem;
    margin-top: 2vw;
    line-height: 120%;
}
.informacoes button{
    margin-top: 3vw;
    padding: 5px 40px;
    font-size: 1.05rem;
    background-color: #ff6600;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.informacoes button:hover{
    background-color: #f3690d;
    transform: scale(1.03);
    transition: 1s;
}
</style>