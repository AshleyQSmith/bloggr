<template>
  <div class="blog card rounded border-primary text-center">
        <img class="img-fluid" :src="blogData.imgUrl" alt srcset />
    <h3>{{blogData.title}}</h3>
    <h5>{{blogData.creator.name}}</h5>
    <button class="btn-sm btn-outline-success mb-2" @click="selectBlog()">Show More</button>

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
    },
    
  },
  components:{}
};
</script>


<style scoped>

</style>