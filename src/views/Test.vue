<template>
  <div class="forms">
    <div class="container">
      <div class="row">
        <div
          class="roo text-danger d-flex justify-content-center"
          v-for="err in formerror"
          :key="err.index"
        >
          {{ err }}
        </div>
        <form action="send.html" @submit="vaild">
          <div class="d-flex flex-column align-items-center">
            <label for="username">UserName</label>
            <input
              type="text"
              name="username"
              id="username"
              v-model="username"
            />
          </div>
          <div class="d-flex flex-column align-items-center">
            <label for="username">password</label>
            <input
              type="password"
              name="password"
              id="password"
              v-model="password"
            />
          </div>
          <div class="d-flex flex-column align-items-center mt-3">
            <input type="submit" value="send" />
          </div>
        </form>
        <button class="mt-4" @click="heo">go heom</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      // nam:"",
      // vis:false,
      formerror: [],
      username: "",
      password: "",
    };
  },
 
  methods: {
    vaild: function (e) {
      this.formerror = [];
      if (!this.username) {
        this.formerror.push("tou musst username");
      }
      if (!this.password) {
        this.formerror.push("tou musst password");
      }
      if (!this.formerror.lenght) return true, 
      e.preventDefault();
    },
  },
    computed:{heo: function(){
this.$router.push({name:"home"})
  }},
  //   methods:{hei(){
  //     this.vis=!this.vis;
  //   }}
};
</script>

<style></style>
