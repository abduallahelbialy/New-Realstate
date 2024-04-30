<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="text-center d-flex flex-column mt-5">
          <div class="cla">
            <p>LET US GUIDE YOUR HOME</p>
          </div>
          <div class="mt-5">
            <transition name="fade">
              <h1 v-if="showText" class="text-white title">
                {{ dynamicText }}
              </h1>
            </transition>
          </div>
          <div class="small mt-4">
            <p class="text-white">
              From as low as $10 per day with limited time offer discounts
            </p>
          </div>
        </div>
        <div class="d-flex flex-column">
          <div class="box-one mt-5">
            <div class="bx d-flex justify-content-around align-items-center">
              <p>All</p>
              <p class="them">Sale</p>
              <p class="them">Rent</p>
            </div>
          </div>
          <div class="box-two">
            <div
              class="bx d-flex justify-content-between align-items-center flex-wrap"
            >
              <div class="d-flex flex-column">
                <p class="text-black-50">Keyyword</p>
                <p class="text-black">Enter Keyyword</p>
              </div>
              <div class="d-flex flex-column">
                <p class="text-black-50">Type</p>
                <p class="text-black">All Type</p>
              </div>
              <div class="d-flex gap-2">
                <div class="btn-one">
                  <button><img :src="filtr" alt="" />Filter</button>
                </div>
                <div class="btn-two">
                  <button>Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Fetuser />
  <Cards />
  <Luxury />
  <Thousands />
  <Properties />
  <Customers />
  <Team />
  <Finest />
</template>

<script>
import img from "../../assets/filtr.png";
import Fetuser from "../../views/Fetuser.vue";
import Cards from "../../views/Cards.vue";
import Luxury from "../../views/Luxury.vue";
import Thousands from "../../views/Thousands.vue";
import Properties from "../../views/Properties.vue";
import Customers from "../../views/Customers.vue";
import Team from "../../views/Team.vue";
import Finest from "../../views/Finest.vue";
export default {
  name: "home",
  components: {
    Fetuser,
    Cards,
    Luxury,
    Thousands,
    Properties,
    Customers,
    Team,
    Finest,
  },
  data() {
    return {
      filtr: img,
      dynamicText: "Welcome Back!",
      showText: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showText = true;
      this.updateDynamicText();
    }, 1000);
  },
  methods: {
    updateDynamicText() {
      setTimeout(() => {
        this.dynamicText = "Enjoy The Finest Homes";
      }, 1000);
    },
  },
};
</script>

<style scoped>
.home {
  padding: 30px 0;
  background-image: url(../../assets/elements.png);
  background-size: cover;
  height: 100vh;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
.cla p {
  width: fit-content;
  border: 1px solid #fff;
  color: #fff;
  border-radius: 33px 33px;
  padding: 8px;
  margin: auto;
}
.bx .them {
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 4px;
  padding: 10px;
  width: 100px;
}
.box-one {
  background-color: #fff;
  width: 28%;
  height: auto;
  border-radius: 4px;
  margin: auto;
  padding: 10px;
}
.box-two {
  background-color: #fff;
  width: 60%;
  height: auto;
  border-radius: 12px;
  margin: auto;
  padding: 8px;
}
.btn-one button {
  border: none;
  padding: 7px 15px;
  color: var(--main-color);
  font-weight: 700;
  background-color: transparent;
  border: 1px solid #ddd;
  border-radius: 5px;
}
.btn-two button {
  border: none;
  padding: 7px 15px;
  color: #fff;
  background-color: var(--main-color);
  border: 1px solid #ddd;
  border-radius: 5px;
}
@media (max-width: 477px) {
  .box-one {
    background-color: #fff;
    width: 92% !important;
    height: 56px;
    border-radius: 4px;
    margin: auto;
    padding: 7px;
  }
  .title {
    font-size: 31px;
  }
  .box-two {
    background-color: #fff;
    width: 96%;
    height: auto;
    border-radius: 12px;
    margin: auto;
    padding: 8px;
    margin-top: 4px;
  }
}
@media (max-width: 799px) {
  .box-one {
    width: 47%;
    border-radius: 2px;
  }
  .box-two {
    width: 100%;
  }
}
</style>
