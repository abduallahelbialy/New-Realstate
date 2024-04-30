
<template>
 <div>

<Navbar/>
 <router-view/>
 <div class="mt-5">

 <Footer/>
 </div>
 </div>
</template>
<script >
import Navbar from './components/navbar/Navbar.vue';
import Footer from './components/navbar/Footer.vue';

export default {
  components:{
    Navbar,
    Footer
  }
}
</script>
<style scoped>

</style>
