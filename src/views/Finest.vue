<template>
  <div class="Fines">
    <div class="container">
      <div class="row">
        <div
          class="phone d-flex justify-content-evenly align-items-center flex-wrap mt-4"
        >
          <div class="d-flex flex-column">
            <h1 class="held">
              Discover Our Finest
              <br />Selection
            </h1>
            <p class="samm link-light-4">
              Pellentesque egestas elementum egestas faucibus sem. Velit <br />
              nunc egestas ut morbi. Leo diam diam.
            </p>
            <div class="btn mt-2 d-flex justify-content-start">
              <button class="d-flex align-items-center gap-2">
                Discover <img :src="arrow" alt="" class="img-fluid" />
              </button>
            </div>
          </div>
          <div>
            <div class="img-card">
              <img :src="fim" alt="Town House" class="image" />
              <div class="overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img from "../assets/section.png";
import img3 from "../assets/arrow.png";
export default {
  name: "Fints",
  data() {
    return {
      fim: img,
      arrow: img3,
    };
  },
};
</script>

<style scoped>
.Fines {
  padding: 30px 0;
  background-color: #e9e9e9;
  width: 80%;
  margin: auto;
  border-radius: 5px;
}
.img-card {
  position: relative;
  width: 100%;
  max-width: 400px;
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
  font-size: 15px;
}
.text {
  color: var(--main-color);
  font-size: 15px;
  font-weight: 700;
  position: absolute;
  top: 13%;
  left: 23%;
  transform: translate(-50%, -50%);
  width: 170px;
  height: 70px;
  border-radius: 7px;
  padding: 2px;
}
.btn button {
  border: none;
  padding: 8px 15px;
  border-radius: 6px;
  background-color: var(--main-color);
  color: var(--main-with);
  font-size: 12px;
}
@media (max-width: 477px) {
  .phone {
    flex-direction: column-reverse;
  }
  .held {
    font-size: 23px;
    margin-top: 14px;
  }
  .Fines {
    width: 90%;
  }
}
</style>
