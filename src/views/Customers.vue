<template>
  <div class="customers">
    <div class="container">
      <div class="row">
        <!-- //title// -->
        <div
          class="customer d-flex justify-content-between align-items-center flex-wrap"
        >
          <h1 class="title">
            What our customers are <br />
            saying us?
          </h1>
          <div class="box d-flex justify-content-between gap-3 flex-wrap">
            <div class="one d-flex flex-column align-items-center">
              <sapn>10m+</sapn>
              <p>Happy People</p>
            </div>
            <div class="one d-flex flex-column align-items-center">
              <sapn>4.88</sapn>
              <p>Overall rating</p>
              <div class="card flex justify-content-center">
                <div class="card flex justify-content-center">
                  <Rating v-model="value" :cancel="false" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- //testmeilo// -->
        <div
          class="cust d-flex justify-content-between align-items-center flex-wrap mt-5"
        >
          <swiper
            :slidesPerView="1"
            :centeredSlides="false"
            :slidesPerGroupSkip="1"
            :grabCursor="true"
            :keyboard="{
              enabled: true,
            }"
            :breakpoints="{
              '769': {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
            }"
            :navigation="true"
            :pagination="{
              clickable: true,
            }"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide v-for="tes in tests" :key="tes.id">
              <div class="test">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="d-flex gap-2 align-items-center mt-2">
                    <div class="image">
                      <img :src="tes.avat" alt="" />
                    </div>
                    <div class="text d-flex flex-column align-items-center">
                      <h1 class="sam">{{ tes.titl }}</h1>
                      <p>{{ tes.work }}</p>
                    </div>
                  </div>
                  <div>
                    <img :src="tes.arrw" alt="" />
                  </div>
                </div>
                <div class="dsecription mt-3">
                  <p>
                    {{ tes.desc }}
                  </p>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Rating from "primevue/rating";
import { ref } from "vue";
const value = ref(null);
import img1 from "../assets/avarta.png";
import img3 from "../assets/davarta.png";
import img2 from "../assets/SVG.png";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/scrollbar";
import "swiper/css/pagination";

// import required modules
import { Keyboard, Scrollbar, Pagination } from "swiper/modules";
export default {
  name: "Customers",
  data() {
    return {
      value,
      modules: [Keyboard, Scrollbar, Pagination],

      tests: [
        {
          id: 1,
          titl: "Cameron Williamson",
          work: "Designer",
          avat: img1,
          arrw: img2,
          desc: "Searches for multiplexes, property comparisons, and the loanestimator.Works great. Lorem ipsum dolor sit amet consecteturadipiscing elit sed do eiusmod tempor incididunt ut labore etdores.",
        },
        {
          id: 2,
          titl: "Esther Howard",
          work: "Marketing",
          avat: img3,
          arrw: img2,
          desc: "Sed ut perspiciatis unde omnis iste natus errorsit voluptatem accusantium doloremquelaudantium, totam rem aperiam, eaque ipsaquae ab illo inventore veritatis et quasiarchitecto beatae vitae.",
        },
        {
          id: 3,
          titl: "Abduallah Bialy",
          work: "Front End",
          avat: img3,
          arrw: img2,
          desc: "Sed ut perspiciatis unde omnis iste natus errorsit voluptatem accusantium doloremquelaudantium, totam rem aperiam, eaque ipsaquae ab illo inventore veritatis et quasiarchitecto beatae vitae.",
        },
      ],
    };
  },
  components: { Rating, Swiper, SwiperSlide },
};
</script>

<style scoped>
.customers {
  padding: 40px 0;
  background-color: #f9f9f9;
  border-radius: 4px;
}
.card {
  border: none !important;
}
.sam {
  font-size: 13px;
}
.test {
  background-color: #fff;
  width: fit-content;
  box-shadow: 0 0 0 13px #fff;
  height: auto;
  width: 400px;
  padding: 5px;
  margin: 10px;
  border-radius: 8px;
}
.title {
  font-size: 28px;
}
@media (max-width: 477px) {
  .title {
    font-size: 20px;
    text-align: center;
    margin-bottom: 30px;
  }
}
</style>
