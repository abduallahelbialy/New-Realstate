<template>
  <nav class="navbar navbar-expand-lg sticky-top ">
    <div class="container">
      <router-link class="navbar-brand" to="#">
        <div class="logo">
          <img :src="logo" alt="" class=" img-fluid" />
        </div>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
           <li class="nav-item" v-for="link in Links" :key="link.id">
          <router-link
            :class="{ 'nav-link': true, 'active fw-medium': $route.path === link.path }"
            :to="link.path"
          >
            {{ link.link }}
          </router-link>
        </li>
        </ul>
        <div class="icons d-flex gap-3">
          <div class="d-flex gap-2 align-items-center">
            <img :src="phon" alt=""  class=" img-fluid" />
            <span class="fw-medium">01028924906</span>
          </div>
          <div class="d-flex gap-2 align-items-center cvar">
            <img :src="use" alt="" class=" img-fluid" />
           
          </div>
          <div class="d-flex gap-2 align-items-center cvar2">
           <button>Add Property</button>
           
          </div>
        
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import img from "../../assets/svg fill.png";
import img2 from "../../assets/Link.png";
import img3 from "../../assets/Icon.png";
export default {
  name: "Navbar",
  data() {
    return {
      logo: img,
      phon: img2,
      use: img3,
     Links: [
  { id: 1, link: "Home", path: "/" },
  { id: 2, link: "Listings ", path: "/Futtwo" }, 
  { id: 3, link: "Members  ", path: "/cards" }, 
  { id: 4, link: "Blog", path: "/Lux" },
  { id: 5, link: "Pages", path: "/Thousand" },
  { id: 6, link: "Contact", path: "/Contact" },
],

    };
  },
   computed: {
     trimmedLinks() {
    return this.Links.map(link => ({
      ...link,
      path: link.path.trim() // Trim the path
    }));
  },
}
};
</script>

<style scoped>
.navbar{
  background: transparent !important;
  backdrop-filter: blur(20px);
}
.active{
  border-bottom: 2px solid var(--main-color);
  width:fit-content;
}
.cvar img{
  width: 30px;
  height: 30px;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 50%;
}
.cvar2 button{
border: none;
padding: 7px;
border-radius: 33px 33px;
color: var(--main-color);
font-weight: bold;
outline: none;
}
</style>
