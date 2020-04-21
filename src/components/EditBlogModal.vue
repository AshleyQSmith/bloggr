<template>
  <div class="modal editBlogModal col-6 mx-auto">
<div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-primary">Edit Your Blog</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span class="text-danger" aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">

<div class="mx-auto">
    <div class="form-group">
      <label for>Title</label>
      <input
        type="text"
        class="form-control"
        placeholder="Overwrite Title..."
        v-model="blog.title"
      />
    </div>
    <div class="form-group">
      <label for>Body</label>
      <textarea
        class="form-control"
        rows="3"
        placeholder="Overwrite Body..."
        v-model="blog.body"
      />
    </div>
    <button
      class="btn btn-outline-success"
      data-dismiss="modal"
      @click="editBlog()"
    >Submit Edits</button>
  </div>

        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'editBlogModal',
  data(){
    return {}
  },
  computed: {
    blog() {
      return this.$store.state.activeBlog;
    },
  methods: {
    editBlog() {
      this.$store.dispatch("editBlog", this.blog)
    }
  },
  components:{}
  }
}
</script>


<style scoped>

</style>