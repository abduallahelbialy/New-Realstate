<template>
  <div class="team">
    <div class="container">
      <div class="row">
        <!-- //title// -->
        <div class="d-flex justify-content-center mb-3">
          <div class="d-flex flex-column align-items-center">
            <h1 class="held">Meet Our Team Of Experts</h1>
            <p class="sam">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
       
        <div
          class="Teams d-flex justify-content-evenly align-items-center flex-wrap"
        >
          <div
            class="img-peopel   align-items-center"
            v-for="people in peoples"
            :key="people.id"
          >
            <div class="one-info">
              <img :src="people.team1" alt="" class="imgss" />
              <div class="two-info d-flex flex-column mt-3">
                <h1 class="name">{{ people.title }}</h1>
                <p>{{ people.des }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from "../assets/teamone.png";
import img2 from "../assets/twotweam.png";
import img3 from "../assets/teamthree.png";
export default {
  name: "Teams",
  data() {
    return {
      peoples: [
          { id: 2, title: "Abduallah Ahmed", team1: img1, des: "Front End" },
        { id: 1, title: "John Powell", team1: img2, des: "Service Support" },
        { id: 2, title: "Abduallah Ahmed", team1: img3, des: "Front End" },
        { id: 2, title: "Abduallah Ahmed", team1: img1, des: "Front End" },
      ],
    };
  },
};
</script>

<style scoped>
.team {
  padding: 40px 0;
}
/* .one-info img {
  display: block;
  width: 60%;
} */
.imgss{
    width: 200px;
}
.name {
  font-size: 18px;
}
@media (max-width:477px) {
    .held {
    font-size: 24px;
    font-weight: 700;
}
.sam{
    font-size: 13px;
}
}
</style>
