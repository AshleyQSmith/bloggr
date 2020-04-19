<template>
  <div class="ActiveBlog">
<div>this is the active blog template</div>
<div class="blog card text-center">
    <h3>{{activeBlog.title}}</h3>
    <h5>{{activeBlog.body}}</h5>

<!-- add code that hides delete/edit blog unless matching author info -->

    <!-- <button class="btn-sm btn-outline-danger" @click="deleteBlog()">Delete</button> -->

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
    this.$store.dispatch("getBlogById", this.$route.params.blogId)
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
  // methods:{
  //   setActiveUser(author){

  //   }
  },
  components:{}
}
</script>


<style scoped>

</style>