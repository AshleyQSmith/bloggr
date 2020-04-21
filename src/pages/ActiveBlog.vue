<template>
  <div class="ActiveBlog">
<div class="blog card text-center">
    <img class="img-fluid" :src="activeBlog.imgUrl" alt srcset />
    <h3>{{activeBlog.title}}</h3>
    <h4>By: {{activeBlog.creator.name}}</h4>
    <h5>{{activeBlog.body}}</h5>

<div v-if="this.activeBlog.creator.email == this.$auth.userInfo.email">

<button class="btn-sm btn-danger" @click="deleteBlog()" >Delete My Blog</button>

<button 
class="btn-sm btn-warning"
@click="triggerEdit()"
data-toggle="modal" 
data-target="#editBlogModal"
>Edit My Blog</button>

<editBlogModal id="editBlogModal"></editBlogModal>

</div>


<CreateComment v-if="this.$auth.isAuthenticated" :blogData="activeBlog"/>

<comment v-for="comment in comments" :key="comment.id" :commentData="comment" />




  </div>
  </div>
</template>


<script>
import blog from "../components/Blog.vue"
import comment from "../components/Comment.vue"
import CreateComment from "../components/CreateComment.vue"
import profile from "../pages/Profile.vue"
import editBlogModal from "../components/EditBlogModal.vue"
export default {
  name: 'ActiveBlog',
  data(){
    return {}
  },
  created(){
    this.$store.dispatch("getBlogById", this.$route.params.blogId);
    this.$store.dispatch("getProfile")
  },
  computed:{
    activeBlog(){
      return this.$store.state.activeBlog.blog
    },
    comments() {
      return this.$store.state.activeBlog.comments
    },
    profile(){
      return this.$store.state.profile
    },
  },
  methods:{
   triggerEdit(){
      this.$store.dispatch("getBlogForEdit", this.activeBlog.id)
    },
    deleteBlog(){
      this.$router.push({name: "Home"})
      this.$store.dispatch("deleteBlog", this.activeBlog.id)
    },
    },

  components:{
    CreateComment, comment, editBlogModal
  }
}
</script>


<style scoped>

</style>