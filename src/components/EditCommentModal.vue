<template>
  <div class="modal editCommentModal col-6 mx-auto">
<div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-primary">Edit Your Comment</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span class="text-danger" aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
    <div class="mx-auto">
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        placeholder="Overwrite Comment..."
        v-model="comment.body"/>
    </div>
    <button
      class="btn btn-outline-success"
      data-dismiss="modal" @click="editComment()"
    >Submit Edits</button>
  </div>

        </div>
      </div>
    </div>

  </div>
</template>


<script>
export default {
  name: 'editCommentModal',
  data(){
    return {}
  },
  computed: {
    comment() {
      return this.$store.state.activeComment;
    }
  },
  methods:{
    editComment(){
      this.$store.dispatch("editComment", this.comment)
    }
  },
  components:{}
}
</script>


<style scoped>

</style>