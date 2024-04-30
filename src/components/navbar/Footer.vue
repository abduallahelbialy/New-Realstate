<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <!-- //logo and icons// -->
        <div
          class="info d-flex justify-content-between align-items-center flex-wrap"
        >
          <div class="img-logo">
            <img :src="log" alt="" class="img-fluid" />
          </div>
          <div class="icons d-flex gap-3 flex-wrap align-items-center">
            <div class="mt-3">
              <p class="fw-medium text-black">Follow Us</p>
            </div>
            <img :src="icon" alt="" class="img-fluid" />
            <img :src="icon2" alt="" class="img-fluid" />
            <img :src="icon3" alt="" class="img-fluid" />
            <img :src="icon4" alt="" class="img-fluid" />
          </div>
        </div>
        <div class="border mt-5"></div>
        <div class="texts d-flex justify-content-between gap-3 mt-5 flex-wrap">
          <div class="one d-flex flex-column">
            <p class="text-black fw-bold">Subscribe</p>
            <div
              class="inp d-flex justify-content-between gap-2 align-items-center"
            >
              <input type="email" placeholder="Your e-mail" required />
              <button class="d-flex align-items-center gap-2">
                Send <img :src="arrow" alt="" class="img-fluid" />
              </button>
            </div>
            <div class="border mt-3"></div>
            <p class="mt-4 sam">
              Subscribe to our newsletter to receive our weekly feed.
            </p>
          </div>
          <div class="two d-flex flex-column gap-2">
            <p class="text-black fw-bold">Discover</p>
            <div class="d-flex flex-column p-1">
              <a href="#">Miami</a>
              <a href="#">New York</a>
              <a href="#">Chicago</a>
              <a href="#">Florida</a>
              <a href="#">Los Angeles</a>
              <a href="#">San Diego</a>
            </div>
          </div>
          <div class="two d-flex flex-column gap-2">
            <p class="text-black fw-bold">Quick Links</p>
            <div class="d-flex flex-column p-1">
              <a href="#">About</a>
              <a href="#">Contact</a>
              <a href="#">FAQ’s</a>
              <a href="#">Blog</a>
              <a href="#">Pricing Plans</a>
              <a href="#">Policy</a>
              <a href="#">Terms & Conditions</a>
            </div>
          </div>
          <div class="two d-flex flex-column">
            <p class="text-black fw-bold">Contact Us</p>
            <div class="d-flex flex-column p-1">
              <a href="#">abdaullahelbialy@gmail.com</a>
              <a href="#">01028924906</a>
            </div>
          </div>
          <div class="tt d-flex flex-column">
            <p class="text-black fw-bold">Our Address</p>
            <div class="d-flex flex-column p-1">
              <a href="#">99 Fifth Avenue, 3rd Floor</a>
              <a href="#">San Francisco, CA 1980</a>
            </div>
          </div>
          <div class="t d-flex flex-column">
            <p class="text-black fw-bold">Get the app</p>
            <div class="d-flex flex-column p-1">
              <div class="imgss">
                <img :src="go" alt="" class="mb-3 imgss img-fluid" />
                <img :src="apple" alt="" class="imgss img-fluid" />
              </div>
            </div>
          </div>
        </div>
        <div class="border mt-5"></div>
        <div class="by d-flex justify-content-center align-items-center mt-3">
          <p>Copyright © 2024. Abdaullah El bialy</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "../../assets/svg fill.png";
import fsc from "../../assets/icfoone.png";
import twitter from "../../assets/icofotwo.png";
import insta from "../../assets/iconf.png";
import linkdin from "../../assets/icotw.png";
import img3 from "../../assets/arrow.png";
import google from "../../assets/google.png";
import andr from "../../assets/appl.png";

export default {
  name: "Footer",
  data() {
    return {
      log: logo,
      icon: fsc,
      arrow: img3,
      icon2: twitter,
      icon3: insta,
      icon4: linkdin,
      go: google,
      apple: andr,
    };
  },
};
</script>

<style scoped>
.footer {
  padding: 30px 0;
  background-color: #f9f9f9;
}
@media (max-width: 477px) {
  .info {
    flex-direction: column;
  }
  /* .texts {
    flex-direction: column;
    justify-content: center;
  } */
  .sam {
    font-size: 12px;
  }
}
.imgss {
  width: 150px;
}
button {
  border: none;
  padding: 8px 20px;
  border-radius: 33px 33px;
  background-color: var(--main-btn);
  color: var(--main-with);
  font-size: 12px;
}
input {
  border: none;
  outline: none;
  background-color: transparent;
}
input::placeholder {
  color: var(--main-color);
  font-weight: 700;
  font-size: 15px;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: var(--main-color);
}
</style>
