<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const dublagem = ref([]);

onMounted(async () => {
  let response = await axios.get(
      'https://api.themoviedb.org/3/tv/46260/credits?api_key=34d906537bd517d4c4e627bee6f0fbb0&language=pt-BR',
   {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNGQ5MDY1MzdiZDUxN2Q0YzRlNjI3YmVlNmYwZmJiMCIsIm5iZiI6MTc1OTQ0Mzc0Mi4zODIwMDAyLCJzdWIiOiI2OGRlZmIxZTBkYjJjNDdmMmUzYjhhMTYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.WdZxeGJU4JZyVewsfZW2SFxSW--WQHb3tMg5jqXarxA`,
      },
    },
  );
   dublagem.value = response.data.cast
   console.log(dublagem.value);
});
</script>
<template>
<ul>
      <li v-for="d in dublagem" :key="d.id" class="dublador-card">
        <img
          v-if="d.profile_path"
          :src="'https://image.tmdb.org/t/p/w200' + d.profile_path"
          :alt="d.name"
        />
        <div class="info">
        <strong class="personagem">{{ d.character }}</strong>
        <span class="nome">{{ d.name }}</span>
      </div>
        <button>Ver personagem</button>
      </li>
    </ul>
</template>

<style scoped>
ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 15px;
  padding: 20px;
  justify-items: center;
}

ul li {
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 180px;
  height: 220px;
  text-align: center;
  background: linear-gradient(135deg, #FFB347 0%, #FFC973 100%);
  transition: transform 0.2s, box-shadow 0.2s;
}

ul li:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

ul li img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 8px;
  border: 2px solid #fff;
}

.info {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.personagem {
  font-size: 1rem;
  color: #fff;
  font-weight: bold;
}

.nome {
  font-size: 0.85rem;
  color: #fdfdfd;
}

ul li button {
  margin-top: 8px;
  padding: 6px 0;
  width: 100%;
  border: none;
  border-radius: 6px;
  background-color: #333;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
}

ul li button:hover {
  background-color: #444444;
}

</style>