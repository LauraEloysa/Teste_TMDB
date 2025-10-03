<script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';

  const information = ref([]);
  const imageBaseUrl = 'https://image.tmdb.org/t/p/original/pFZEnxvgbzsBJyeo9oOJFvGGJo9.jpg';

  onMounted(async () => {
    let response = await axios.get(
        'https://api.themoviedb.org/3/tv/46260?api_key=SUA_API_KEY&language=pt-BR',
     {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNGQ5MDY1MzdiZDUxN2Q0YzRlNjI3YmVlNmYwZmJiMCIsIm5iZiI6MTc1OTQ0Mzc0Mi4zODIwMDAyLCJzdWIiOiI2OGRlZmIxZTBkYjJjNDdmMmUzYjhhMTYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.WdZxeGJU4JZyVewsfZW2SFxSW--WQHb3tMg5jqXarxA`,
        },
      },
    );
     information.value = response.data
     console.log(information.value);
  });
</script>

<template>
    <section :style="{ backgroundImage: 'url(' + imageBaseUrl + ')' }" class="banner">
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
    height: 70vh;
    background-size: cover;
    background-position: center;
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
.banner .nome {
    font-size: 2.3rem;
    color: #FF6A00;
    font-weight: bold;
    
}
.banner .data {
    font-size: 1.2rem;
    margin-bottom: 15px;
}
.banner .sinopse {
    margin-bottom: 15px;
}
.banner button {
    padding: 0.5vw 4vw;
    background-color: #FF6A00;
    color: #FFF;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
.banner button:hover {
    background-color: #f06101;
    transition: 1s;
}
</style>