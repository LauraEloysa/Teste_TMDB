<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';

// Corrigido: ref precisa de array []
const personagens = ref([
  { name: 'naruto', image: './images/Naruto/Naruto.jpeg' },
  { name: 'sasuke', image: './images/Naruto/Sasuke.jpeg' },
  { name: 'sakura', image: './images/Naruto/Sakura.jpeg' },
  { name: 'kakashi', image: './images/Naruto/Kakashi.jpeg' },
  { name: 'hiruzen', image: './images/Naruto/Hiruzen.jpeg' },
  { name: 'neji', image: './images/Naruto/Neji.jpeg' },
  { name: 'maitogai', image: './images/Naruto/MaitoGai.jpeg' },
  { name: 'lee', image: './images/Naruto/Lee.jpeg' },
  { name: 'tenten', image: './images/Naruto/Tenten.jpeg' },
  { name: 'ino', image: './images/Naruto/Ino.jpeg' },
  { name: 'shikamaru', image: './images/Naruto/Shikamaru.jpeg' },
  { name: 'choji', image: './images/Naruto/Chouji.jpeg' },
  { name: 'shino', image: './images/Naruto/Shino.jpeg' },
  { name: 'hinata', image: './images/Naruto/Hinata.jpeg' },
  { name: 'kiba', image: './images/Naruto/Kiba.jpeg' },
  { name: 'itachi', image: './images/Naruto/Itachi.jpeg' },
  { name: 'kisame', image: './images/Naruto/Kisame.jpeg' },
  { name: 'iruka', image: './images/Naruto/Iruka.jpeg' },
  { name: 'kabuto', image: './images/Naruto/Kabuto.jpeg' },
  { name: 'orochimaru', image: './images/Naruto/Orochimaru.jpeg' },
  { name: 'jiraiya', image: './images/Naruto/Jiraya.jpeg' },
  { name: 'shizune', image: './images/Naruto/Shizune.jpeg' },
  { name: 'temari', image: './images/Naruto/Temari.jpeg' },
  { name: 'asuma', image: './images/Naruto/Asuma.jpeg' },
  { name: 'tsunade', image: './images/Naruto/Tsunade.jpeg' },
  { name: 'kurenai', image: './images/Naruto/Kurenai.jpeg' },
  { name: 'kankuro', image: './images/Naruto/Kankuro.jpeg' },

]);

const dublagem = ref([]);
const flipped = ref({});

onMounted(async () => {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/tv/46260/credits?api_key=34d906537bd517d4c4e627bee6f0fbb0&language=en-US'
    );
    dublagem.value = response.data.cast;
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
  }
});

const toggleFlip = (id) => {
  flipped.value[id] = !flipped.value[id];
};
</script>

<template>
  <div class="carrossel">
    <Swiper
      v-if="dublagem.length"
      :slides-per-view="5"
      :space-between="15"
      :modules="[Navigation]"
      navigation
      class="mySwiper"
    >
      <SwiperSlide
        v-for="(d, i) in dublagem"
        :key="d.id"
        class="dublador-card"
        :class="{ flipped: flipped[d.id] }"
      >
        <div class="card-inner">
          <!-- Frente -->
          <div class="card-front">
            <img
              v-if="d.profile_path"
              :src="'https://image.tmdb.org/t/p/w200' + d.profile_path"
              :alt="d.name"
            />
            <div class="info">
              <strong class="personagem">{{ d.character }}</strong>
              <span class="nome">{{ d.name }}</span>
            </div>
            <button @click="toggleFlip(d.id)">Ver personagem</button>
          </div>

          <!-- Verso -->
          <div class="card-back">
            <img
              v-if="personagens[i]"
              :src="personagens[i].image"
              :alt="personagens[i].name"
            />
            <strong>{{ personagens[i]?.name }}</strong>
            <button @click="toggleFlip(d.id)">Voltar</button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped>
.carrossel {
  position: relative;
  padding: 30px;
  --bg-size: 400%;
  --color-one: #ffa600;
  --color-two: #ff6600;
  background: linear-gradient(
      90deg,
      var(--color-one),
      var(--color-two),
      var(--color-one)
    )
    0 0 / var(--bg-size) 100%;
  animation: move-bg 8s infinite linear;
  margin-bottom: 2vw;
}

@keyframes move-bg {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: var(--bg-size) 0;
  }
}

/* Card base */
.dublador-card {
  perspective: 1000px;
  width: 100%;
  height: 50vh;
}

/* estrutura do flip */
.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.dublador-card.flipped .card-inner {
  transform: rotateY(180deg);
}

/* Frente e verso */
.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card-front img,
.card-back img {
  width: 100%;
  height: 35vh;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 8px;
}

.card-back {
  transform: rotateY(180deg);
}

.info {
  text-align: center;
  margin-bottom: 8px;
}

.personagem {
  display: block;
  font-weight: bold;
  margin-bottom: 4px;
}

.nome {
  font-size: 0.85rem;
  color: #555;
}

button {
  background-color: #ff6600;
  color: white;
  margin-top: 1vw;
  border: none;
  border-radius: 5px;
  padding: 6px 40px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
button:hover {
  background-color: #e65500;
  transition: 1s;
  transform: scale(1.04);
}

/* Setas */
.swiper-button-next,
.swiper-button-prev {
  color: white;
  background-color: rgb(0, 0, 0);
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
}
.swiper-button-prev {
  left: -40px;
}
.swiper-button-next {
  right: -40px;
}
.swiper-button-next:hover,
.swiper-button-prev:hover {
  background-color: rgba(255, 106, 0, 0.8);
}
</style>
