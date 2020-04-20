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
  computed:{},
  methods:{
    createComment() {
      this.$store.dispatch('createComment', this.newComment)
      this.newComment = {}
    }
  },
  components:{}
}
</script>


<style scoped>

</style>