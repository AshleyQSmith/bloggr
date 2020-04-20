<template>
  <div class="blog card rounded border-primary text-center">
        <img class="img-fluid" :src="blogData.imgUrl" alt srcset />
    <h3>{{blogData.title}}</h3>
    <h5>{{blogData.creator.name}}</h5>
    <button class="btn-sm btn-outline-success mb-2" @click="selectBlog()">Show More</button>

<!-- add code that hides delete/edit blog unless matching author info -->

    <!-- <div v-if=" this.blogData.creatorEmail == this.profile.email">
      <button class="btn-sm btn-outline-warning" @click="editBlog()">Edit</button>
      <button class="btn-sm btn-outline-danger" @click="deleteBlog()">Delete</button>
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
    },
    editBlog() {

    },
    deleteBlog() {
      
    },
  },
  components:{}
};
</script>


<style scoped>

</style>