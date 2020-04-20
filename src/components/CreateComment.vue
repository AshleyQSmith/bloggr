<template>
  <div class="CreateComment">

<form @submit.prevent="createComment()">
      <div class="form-group">
        <input type="text" name="body" id="" class="form-control" placeholder="Add Comment..." v-model="newComment.body" required>
      </div>
      <button type="submit" class="btn btn-success">Add Comment</button>
    </form>

  </div>
</template>


<script>
export default {
  name: 'CreateComment',
  data(){
    return {
      newComment: {}
    }
  },
  computed:{
    activeBlog(){
      return this.$store.state.activeBlog.blog
    }
  },
  methods:{
    createComment() {
      this.newComment.blogId = this.activeBlog.id
      this.newComment.creatorEmail = this.$auth.userInfo.email
      this.$store.dispatch('createComment', this.newComment)
      this.newComment = {}
    }
  },
  components:{}
}
</script>


<style scoped>

</style>