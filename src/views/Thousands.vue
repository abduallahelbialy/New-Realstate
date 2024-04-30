<template>
  <div class="Thousand">
    <div class="container">
      <div class="row">
        <!-- //title// -->
        <div class="d-flex justify-content-center" data-aos="fade-down">
          <div class="d-flex flex-column align-items-center">
            <p class="text-white phone">
              Thousands of world’s leading companies trust Space
            </p>
          </div>
        </div>
        <!-- ///img Thousand/// -->
        <div class="box-imgs d-flex justify-content-evenly  mt-2">
          <div class="imgs d-flex " v-for="imga in imgs" :key="imga.id">
            <img :src="imga.amz" alt="" class=" img-fluid mb-4" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from "../assets/amazon.png";
import img2 from "../assets/amd.png";
import img3 from "../assets/cis.png";
import img4 from "../assets/dis.png";
import img5 from "../assets/log.png";
import img6 from "../assets/spo.png";
export default {
  name: "Thousand",
  data() {
    return {
      imgs: [
        { id: 1, amz: img1 },
        { id: 2, amz: img2 },
        { id: 3, amz: img3 },
        { id: 4, amz: img4 },
        { id: 4, amz: img5 },
        { id: 4, amz: img6},
      ],
    };
  },
};
</script>

<style scoped>
.Thousand {
  padding: 45px 0;
  border-radius: 4px;
  width: 97%;
  margin: auto;
  background-color: var(--main-color);
}

@media (max-width:477px) {
    .box-imgs{
        flex-direction: column;
       align-items: center !important;
    }
    .phone{
        font-size: 12px;
    }
}
</style>
