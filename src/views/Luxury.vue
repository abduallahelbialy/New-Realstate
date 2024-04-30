<template>
  <div class="lux">
    <div class="container">
      <div class="row">
        <div
          class="d-flex justify-content-evenly align-items-center flex-wrap mt-4" data-aos="fade-up"
        >
          <div>
            <div class="img-card mb-3">
              <img :src="fim" alt="Town House" class="image" />
              <div class="overlay">
                <div class="text">
                  <div class="d-flex gap-2 mt-3 justify-content-center">
                    <div class="filmy">
                      <img :src="ico" alt="" />
                    </div>
                    <div>
                      <p>Total Client <br /><span class="sam">7,000 M</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex flex-column">
            <h1 class="held">
              Local expertise for<br />
              luxury homes
            </h1>
            <p class="samm link-light-4">
              Pellentesque egestas elementum egestas faucibus sem. Velit nunc
              egestas ut morbi.<br />
              Leo diam diam nibh eget fermentum massa pretium. Mi mauris nulla
              ac dictum ut mauris non.
            </p>
            <div class="btn mt-2 d-flex justify-content-start">
                <button class=" d-flex  align-items-center gap-2">Learn More <img :src="arrow" alt="" class=" img-fluid"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img from "../assets/h82.png";
import img2 from "../assets/Icon.png";
import img3 from "../assets/arrow.png";
export default {
  name: "Lux",
  data() {
    return {
      fim: img,
      ico: img2,
      arrow:img3,
    };
  },
};
</script>

<style scoped>
.lux {
  padding: 30px 0;
}
.img-card {
  position: relative;
  width: 100%;
  max-width: 400px;
}
.filmy {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #faf4e3;
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
.samm {
  font-size: 12px;
}
.text {
  color: var(--main-color);
  font-size: 15px;
  font-weight: 700;
  position: absolute;
  top: 13%;
  left: 23%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 170px;
  height: 70px;
  border-radius: 7px;
  padding: 2px;
}
.btn button{
    border:none;
    padding: 8px 15px;
    border-radius: 6px;
    background-color: var(--main-color);
    color: var(--main-with);
    font-size: 12px;
}
</style>
