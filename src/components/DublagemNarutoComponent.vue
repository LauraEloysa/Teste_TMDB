<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';

const dublagem = ref([]);

onMounted(async () => {
  let response = await axios.get(
      'https://api.themoviedb.org/3/tv/46260/credits?api_key=34d906537bd517d4c4e627bee6f0fbb0&language=en-US',
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
<div class="carrossel">
  <Swiper :slides-per-view="4"  :space-between="20" class="mySwiper"  :modules="[Navigation]"
    navigation>
    <SwiperSlide v-for="d in dublagem" :key="d.id" class="dublador-card">
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
    </SwiperSlide>
  </Swiper>
  </div>
</template>

<style scoped>
.carrossel {
  position: relative;
  padding: 20px;
}
.mySwiper {
  width: 90%;
  margin: auto;
  padding: 20px;
}
.swiper-button-next,
.swiper-button-prev {
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
}
</style>