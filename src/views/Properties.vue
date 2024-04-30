<template>
  <div class="all">
    <div class="container">
      <div class="row">
        <!-- //title// -->
        <div class="d-flex justify-content-center mt-3 mb-3">
          <div class="d-flex flex-column align-items-center">
            <h1 class="held">Featured Properties</h1>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </div>
        <!-- //cards// -->

            <div class="d-flex justify-content-evenly flex-wrap ">
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
    <swiper-slide v-for="card in cardstwo" :key="card.id">
       <div class="for-you" >
                <div class="img-card mb-3">
                  <img :src="card.cardimg" alt="Town House" class="image" />
                  <div class="overlay">
                    <button class="text">{{ card.title }} <br /></button>
                  </div>
                  <div class="d-flex justify-content-start flex-column p-2 ticard">
                    <span class="preic fw-bold">{{ card.pric }}</span>
                    <p class="text-dark fw-bold">{{ card.des }}</p>
                  </div>
                  <div class="d-flex gap-2 align-items-center ticard">
                    <img :src="card.icon" alt="" class="img-fluid" />
                    <p class="mt-3 text-black fw-medium">
                      1020 Bloomingdale Ave
                    </p>
                  </div>
                </div>
                <div class="all-icon d-flex gap-4">
                  <div class="d-flex gap-2 align-items-center">
                    <img :src="card.icon2" alt="" class="img-fluid" />
                    <p class="mt-3 text-black fw-medium">4 Beds</p>
                  </div>
                  <div class="d-flex gap-2 align-items-center">
                    <img :src="card.icon3" alt="" class="img-fluid" />
                    <p class="mt-3 text-black fw-medium">2 Baths</p>
                  </div>
                  <div class="d-flex gap-2 align-items-center">
                    <img :src="card.icon4" alt="" class="img-fluid" />
                    <p class="mt-3 text-black fw-medium">450 sqft</p>
                  </div>
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
import img from "../assets/card.png";
import img2 from "../assets/propertythumbnailwrapper.png";
import img3 from "../assets/fff.png";
import img4 from "../assets/four.png";
import imgicon from "../assets/iconone.png";
import imgicon2 from "../assets/icontwo.png";
import imgicon3 from "../assets/iconthree.png";
import imgicon4 from "../assets/Vector.png";
// Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/scrollbar';
  import 'swiper/css/pagination';


  // import required modules
  import { Keyboard, Scrollbar, Pagination } from 'swiper/modules';



export default {
  name: "Propert",
  data() {
    return {
      cardstwo: [
        {
          id: 1,
          title: "For Sale",
          des: "Skyper Pool Apartment",
          cardimg: img,
          icon: imgicon,
          icon2: imgicon2,
          icon3: imgicon3,
          icon4: imgicon4,
          pric: "$280,000",
        },
        {
          id: 2,
          title: "For Rent",
          des: "North Dillard Street",
          cardimg: img2,
          icon: imgicon,
          icon2: imgicon2,
          icon3: imgicon3,
          icon4: imgicon4,
          pric: "$250/month",
        },
        {
          id: 3,
          title: "For Sale",
          des: "Skyper Pool Apartment",
          cardimg: img3,
          icon: imgicon,
          icon2: imgicon2,
          icon3: imgicon3,
          icon4: imgicon4,
          pric: "$180,000",
        },
        {
          id: 4,
          title: "For Sale",
          des: "Skyper Pool Apartment",
          cardimg: img4,
          icon: imgicon,
          icon2: imgicon2,
          icon3: imgicon3,
          icon4: imgicon4,
          pric: "$180,000",
        },
      ],
        modules: [Keyboard, Scrollbar, Pagination],

    };
  },
 components: {
      Swiper,
      SwiperSlide,
    },
 };
</script>

<style scoped>
.all {
  padding: 30px 0;
}

.for-you {
  background-color: #fff;
  width: fit-content;
  box-shadow: 0 0 0 10px #fff;
  height: 405px;
  width: 360px;
  padding: 5px;
  margin: 10px;
  border-radius: 8px;
  border: 1px solid #ddd;
}
.img-card {
  position: relative;
  width: 100%;
  max-width: 380px;
  margin: auto;
}
.image {
  width: 100%;
  height: auto;
  display: block;
}
.sam {
  font-size: 10px;
  font-weight: normal;
}

.text {
  color: var(--main-with);
  font-size: 12px;
  font-weight: 700;
  position: absolute;
  top: 10%;
  left: 11%;
  transform: translate(-50%, -50%);
  text-align: center;
  border: none;
  border-radius: 30px 30px;
  background-color: var(--main-btn);
  padding: 7px 15px;
}
.preic {
  color: var(--main-color2);
}
.ticard {
  margin-bottom: -18px;
}
</style>
