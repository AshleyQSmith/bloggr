<template>
  <div class="ActiveBlog">
<div class="blog card text-center">
    <img class="img-fluid" :src="activeBlog.imgUrl" alt srcset />
    <h3>{{activeBlog.title}}</h3>
    <h4>By: {{activeBlog.creator.name}}</h4>
    <h5>{{activeBlog.body}}</h5>

<!-- <div v-if=" this.activeBlog.creator.email == this.profile.email" >
<button class="btn-sm btn-danger" @click="deleteBlog()" >Delete</button>
</div> -->

<CreateComment v-if="this.$auth.isAuthenticated" :blogData="activeBlog"/>

<comment v-for="comment in comments" :key="comment.id" :commentData="comment" />


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
import comment from "../components/Comment.vue"
import CreateComment from "../components/CreateComment.vue"
import profile from "../pages/Profile.vue"
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
    comments() {
      return this.$store.state.activeBlog.comments
    },
  //   profile(){
  //     return this.$store.state.profile
  //   },
  // },
  // methods:{
    // editBlog(){

    // },
    // deleteBlog(){

    // },
    // }
  },
  components:{
    CreateComment, comment
  }
}
</script>


<style scoped>

</style>