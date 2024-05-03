<template>
  <div class="error">
    <div class="container">
      <div class="row">
        <div class="d-flex justify-content-center fs-4">
          <div class="imgs">
            <img :src="img" alt="" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import error from "../assets/0b219f91b508342ff91c997e16afeca4.gif";
export default {
  name: "not",
  data() {
    return {
      img: error,
    };
  },
};
</script>

<style scoped>
.imgs{
  width: 100vw;
}
</style>
