<template>
  <div class="blog card text-center">
    <h3>{{blogData.title}}</h3>
    <h5>{{blogData.body}}</h5>
    <button class="btn-sm btn-outline-success" @click="selectBlog()">Show More</button>

<!-- add code that hides delete/edit blog unless matching author info -->
    <!-- <div v-if="this.$auth.isAuthenticated">
      <button class="btn-sm btn-outline-warning" v-if="blog.creator.name == profile.name">Edit</button>
    </div> -->
  </div>
</template>


<script>

export default {
  name: 'blog',
  props: ["blogData"],
  data(){
    return {}
  },
  computed: {
    blogs() {
      return this.$store.state.blogs;
    }
  },
  methods:{
    selectBlog() {
      this.$store.commit("setActiveBlog", {})
      this.$router.push({
        name: "ActiveBlog",
        params: {blogId: this.blogData._id}
      })
    }
  },
  components:{}
};
</script>


<style scoped>

</style>