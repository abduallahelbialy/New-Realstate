<template>
  <div class="fute" >
    <div class="container">
      <div class="row" >
        <!-- //title// -->
        <div class="d-flex justify-content-center">
          <div class="d-flex flex-column align-items-center">
            <h1 class="held">Featured Categories</h1>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </div>
        <!-- //card// -->
        <div class="d-flex justify-content-evenly align-items-center flex-wrap mt-5" data-aos="fade-down"  >
          <div class="img-card mb-3" v-for="card in cards" :key="card.id">
            <img :src="card.cardimg" alt="Town House" class="image" />
            <div class="overlay">
              <div class="text">
                {{ card.title }} <br />
                <p class="sam">{{ card.des }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img from "../assets/cardone.png";
import img2 from "../assets/cardtwo.png";
import img3 from "../assets/cardthree.png";
import img4 from "../assets/cardfour.png";
import img5 from "../assets/cardfife.png";
export default {
  name: "fute",
  data() {
    return {
      cards: [
        { id: 1, title: "Town House", des: "2 Properties", cardimg: img },
        { id: 2, title: "Modern Villa", des: "3 Properties", cardimg: img2 },
        { id: 3, title: " Apartment", des: "4 Properties", cardimg: img3 },
        { id: 4, title: " Single Family", des: "5 Properties", cardimg: img4 },
        { id: 5, title: "Office", des: "6 Properties", cardimg: img5 },
      ],
    };
  },
 
};
</script>

<style scoped>
.fute {
  padding: 30px 0;
}
.img-card {
  position: relative;
  width: 100%;
  max-width: 200px;
    box-shadow: 0 0 10px #000;
    border-radius: 13px;
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
  color: var(--main-color);
  font-size: 15px;
  font-weight: 700;
  position: absolute;
  top: 13%;
  left: 33%;
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
