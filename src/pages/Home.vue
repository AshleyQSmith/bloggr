<template>
  <div class="home container-fluid">
    <div class="row">
        <div class="col-12 mt-5">
        <div class="card-columns m-2">
<!-- insert all blogs -->
<!-- v-for here -->
        <blog v-for="blog in blogs" :blogData="blog" :key="blog._id"></blog>
        </div>
      </div>
  </div>


  </div>
</template>

<script>
import blog from "../components/Blog"

export default {
  name: "home",
  data() {
    return {}},
  created() {
    this.$store.dispatch("getBlogs");
    this.$store.dispatch("getProfile");
  },
  computed: {
    blogs() {
      return this.$store.state.blogs;
    },
    profile() {
      return this.$store.state.profile;
    }
  },
  methods: {
    createBlog(){

    }
  },
  components:{blog}
};
</script>
