<template>
  <div class="about text-center">
    <h1>Welcome {{ profile.name }}</h1>
    <img class="rounded" :src="profile.picture" alt="" />
    <p>{{ profile.email }}</p>

  <CreateBlog></CreateBlog>

  </div>
</template>

<script>

import CreateBlog from "../components/CreateBlog.vue"
export default {
  name: "Profile",
  // props: [],
    data(){
    return {
    }
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    }
  },
  created(){
    this.$store.dispatch("getProfile")
  },
    components:{
      CreateBlog
    }
};
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>


