<template>
  <div class="CreateBlog border col-6 mx-auto ">
    <form @submit.prevent="createBlog()">
      <div class="form-group">
        <input type="text" name="title" id="" class="form-control" placeholder="Add Title" v-model="newBlog.title" required>
      </div>
      <div class="form-group">
        <input type="text" name="body" id="" class="form-control" placeholder="Add Body..." v-model="newBlog.body" required>
      </div>
      <div class="form-group">
        <input type="text" name="img" id="" class="form-control" placeholder="Add Image URL..." v-model="newBlog.imgUrl" required>
      </div>
      <button type="submit" class="btn btn-success">Add Blog</button>
    </form>
  </div>

</template>



<script>
export default {
  name: 'CreateBlog',
  data(){
    return {
      newBlog: {}
    }
  },
  computed:{},
  methods:{
    createBlog() {
      this.$store.dispatch('createBlog', this.newBlog)
      this.newBlog = {}
    }
  },
  components:{}
}
</script>


<style scoped>

</style>