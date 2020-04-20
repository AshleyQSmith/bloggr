<template>
  <div class="ActiveBlog">
<div class="blog card text-center">
    <img class="img-fluid" :src="activeBlog.imgUrl" alt srcset />
    <h3>{{activeBlog.title}}</h3>
    <h5>{{activeBlog.body}}</h5>

<!-- add code that hides delete/edit blog unless matching author info -->

    <!-- <div v-if=" this.activeBlog.creatorEmail == this.profile.email">
      <button class="btn-sm btn-outline-warning" @click="editBlog()">Edit</button>
      <button class="btn-sm btn-outline-danger" @click="deleteBlog()">Delete</button>
    </div> -->

  </div>
  </div>
</template>


<script>
import blog from "../components/Blog.vue"
export default {
  name: 'ActiveBlog',

  data(){
    return {}
  },
  created(){
    this.$store.dispatch("getBlogById", this.$route.params.blogId);
    // this.$store.dispatch("getProfile")
  },
  computed:{
    activeBlog(){
      return this.$store.state.activeBlog.blog
    },
  //   comments() {
  //     return this.$store.state.activeBlog.comments
  //   },
  //   profile(){
  //     return this.$store.state.profile
  //   },
  // },
  methods:{
    editBlog(){

    },
    deleteBlog(){

    },
    }
  },
  components:{}
}
</script>


<style scoped>

</style>